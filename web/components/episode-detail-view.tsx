"use client";

import { useState, useEffect } from "react";
import { SaveToolButton } from "@/components/save-tool-button";
import { Episode } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Check,
  Twitter,
  Linkedin,
  LinkIcon,
  ListTodo,
  Target,

  Wrench,
  Lightbulb,
  FileText,
  Mic,
  Key,
  ShieldCheck,
  Star,
  BookOpen,
} from "lucide-react";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { cn, getLinkTarget } from "@/lib/utils";
import { MarkdownRenderer } from "./markdown-renderer";

import { parseActions } from "@/lib/action-parser";

import remarkGfm from 'remark-gfm';

// Simplified ActionList for in-place rendering
function ActionSection({ content, slug }: { content: string, slug: string }) {
    const headerMatch = content.match(/^## (?:📋\s*)?(.*?)\n/);
    const headerTitle = headerMatch ? headerMatch[1].trim() : "行动建议";
    const body = content.replace(/^## .*?\n/, "");
    
    const storageKey = `lenny_actions_${slug}`;
    const [checkedState, setCheckedState] = useState<Record<string, boolean>>({});

    // Parse body to get stable IDs from content
    const getStableId = (text: string) => {
        const clean = text.replace(/^- \[[ x]\]\s*/, '').trim();
        return btoa(unescape(encodeURIComponent(clean))).slice(0, 16);
    };

    useEffect(() => {
        const saved = localStorage.getItem(storageKey);
        if (saved) {
            try {
                setCheckedState(JSON.parse(saved));
            } catch (e) {
                console.error("Failed to parse saved actions", e);
            }
        }
    }, [storageKey]);

    const handleCheckChange = (id: string, checked: boolean) => {
        const newState = { ...checkedState, [id]: checked };
        setCheckedState(newState);
        localStorage.setItem(storageKey, JSON.stringify(newState));
        window.dispatchEvent(new CustomEvent("checklist-updated"));
    };

    return (
        <div className="h-full">
            <h2 className="text-2xl font-black mb-8 flex items-center gap-2">
                <ListTodo className="w-7 h-7 text-primary" /> {headerTitle}
            </h2>
            <div className="prose prose-stone dark:prose-invert max-w-none prose-ul:list-none prose-ul:pl-0">
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                        h3: ({children}) => {
                            const text = children?.toString() || "";
                            let label = text;
                            if (text.includes("今天")) label = "今天";
                            else if (text.includes("本周")) label = "本周";
                            else if (text.includes("深入") || text.includes("探索")) label = "深度探索";

                            return (
                                <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground/40 mt-8 mb-4">
                                    {label}
                                </h3>
                            );
                        },
                        input: ({type, checked, node}) => {
                            if (type === 'checkbox') {
                                // Find parent li content to get stable ID
                                // React-markdown provides access to the node
                                let id = "unknown";
                                if (node && node.position) {
                                    // Fallback to simple counter if content matching fails
                                }
                                // We'll use a more direct approach in 'li' below
                                return null; // We'll render custom checkbox in li
                            }
                            return <input type={type} />;
                        },
                        li: ({children, ...props}) => {
                            // Extract text content for ID generation
                            const textContent = (props as any).node?.children
                                .filter((c: any) => c.type === 'text' || c.type === 'paragraph')
                                .map((c: any) => c.value || "")
                                .join("") || "";
                            
                            const id = getStableId(textContent || children?.toString() || "");
                            const isChecked = checkedState[id] || false;

                            return (
                                <li 
                                    className={cn(
                                        "flex items-start mb-2 group transition-all duration-300",
                                        isChecked ? "opacity-100" : "opacity-100"
                                    )}
                                >
                                    <div className="pt-[0.45rem] shrink-0 mr-3">
                                        <div 
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleCheckChange(id, !isChecked);
                                            }}
                                            className={cn(
                                            "w-4 h-4 rounded border flex items-center justify-center transition-all duration-300 cursor-pointer",
                                            isChecked 
                                                ? "bg-green-600 border-green-600 text-white scale-110 shadow-sm" 
                                                : "border-muted-foreground/20 bg-background hover:border-primary/50 hover:scale-105"
                                        )}>
                                            {isChecked && <Check className="w-2.5 h-2.5" strokeWidth={5} />}
                                        </div>
                                    </div>
                                    <span className="flex-1">
                                        {/* Filter out the default checkbox input from children */}
                                        {Array.isArray(children) 
                                            ? children.filter(c => (c as any)?.type?.name !== 'input' && (c as any)?.props?.type !== 'checkbox')
                                            : children}
                                    </span>
                                </li>
                            );
                        },
                        p: ({children}) => <span className="m-0 leading-relaxed py-1 block">{children}</span>,
                        a: ({node, ...props}) => <a className="text-primary hover:underline font-medium" onClick={(e) => e.stopPropagation()} target="_blank" {...props} />
                    }}
                >
                    {body}
                </ReactMarkdown>
            </div>
        </div>
    );
}



// Helper to parse resources into structured groups
function parseResources(body: string) {
    const lines = body.split('\n').map(l => l.trim()).filter(l => l.length > 0);
    const resources: Array<{ title: string; description?: string; link?: string }> = [];
    let current: { title: string; description?: string; link?: string } | null = null;

    lines.forEach(line => {
        // 跳过"推荐阅读"、"工具类"等标题行本身，但继续解析后续的条目
        if (line.match(/^\*{0,2}(推荐阅读|工具类|阅读类|书籍|工具|资源|工具\/资源|工具\/书籍|Tools?|Books?|Resources?)\*{0,2}\s*[:：]?\s*$/i)) {
            return;
        }
        
        // More robust matching:
        // Handle variations: "**工具 1**: Name", "[工具 1](url): Name", "**推荐阅读 1**: **《书名》**", "**书籍**: 《Name》"
        // Pattern: Starts with list marker? Optional ** or [. Then Keyword. Optional space+number. Optional ** or ]. Optional (url). Then mandatory/optional colon. Then the Title.
        const headerMatch = line.match(/^(?:[-*]\s*)?(?:\*\*|\[)?(?:工具|资源|推荐阅读|书籍|概念|产品|工具\/书籍)\s*\d*(?:\*\*|\])?(?:\((.*?)\))?\s*[:：]\s*(.*)/i);
        const boldMatch = line.match(/^(?:[-*]\s*)?\*\*(.*?)\*\*/);

        // Ignore separator lines
        if (line.match(/^[-*_]{3,}\s*$/)) return;
        
        if (headerMatch) {
            if (current) resources.push(current);
            const capturedLink = headerMatch[1];
            let capturedTitle = headerMatch[2].trim();
            let finalLink = capturedLink || undefined;
            
            // If title is [Name](Url), extract it
            const inlineLinkMatch = capturedTitle.match(/^\[(.*?)\]\((.*?)\)$/);
            if (inlineLinkMatch) {
                capturedTitle = inlineLinkMatch[1];
                finalLink = inlineLinkMatch[2];
            }
            
            if (capturedTitle) {
                current = { 
                    title: capturedTitle.replace(/\*\*/g, "").replace(/\s*[:：]\s*$/, "").trim(),
                    link: finalLink
                };
            } else {
                // Label only line, maybe name is next? Or label is name if nothing else.
                current = { title: line.replace(/^(?:[-*]\s*)?/, "") };
            }
        } else if (boldMatch && !line.includes("说明") && !line.includes("链接") && !line.includes("推荐阅读")) {
            if (current) resources.push(current);
            current = { title: boldMatch[1].trim() };
        } else {
            // Check for direct link start: [Name](Url) or - [Name](Url)
            const linkStartMatch = line.match(/^(?:[-*]\s*)?\[(.*?)\]\((.*?)\)$/);
            if (linkStartMatch) {
                if (current) resources.push(current);
                current = { title: linkStartMatch[1].trim(), link: linkStartMatch[2].trim() };
            } else if (current) {

            const cleanLine = line.replace(/^([-*]\s*)?(?:说明|描述|链接)[:：]\s*/i, "").trim();
            
            // Prioritize Link detection before generic description
            if (line.match(/链接|http/i)) {
                const mdMatch = line.match(/\[(.*?)\]\((.*?)\)/);
                if (mdMatch) {
                    current.link = mdMatch[2];
                    if (!current.description && mdMatch[1].length > 5 && !mdMatch[1].includes("链接")) {
                         // Only use link text as description if it seems like a description and not just "Link"
                        current.description = mdMatch[1];
                    }
                } else {
                    current.link = line.match(/(https?:\/\/[^\s]+)/)?.[1] || cleanLine;
                }
            } else if (line.match(/说明|描述/i) || line.startsWith("-") || line.startsWith("*")) {
                current.description = cleanLine;
            } else if (!current.description) {
                current.description = cleanLine;
            }
        }
        }
    });
    if (current) resources.push(current);
    
    return resources.filter(res => res.title.length > 0).map(res => {
        let cleanTitle = res.title
            .replace(/^(?:工具|资源)\s*\d+[:：]\s*/i, "")
            .replace(/^\*\*(.*?)\*\*$/, "$1")
            .trim();
        
        // If the title is still "工具 X", and we have a description, 
        // maybe the description starting contains the name? 
        // But for now, let's just make sure we strip the keyword.
        return { ...res, title: cleanTitle };
    }).filter(res => res.title.length > 0);
}

// Simplified ResourceList for in-place rendering
function ResourceSection({ content }: { content: string }) {
    const headerMatch = content.match(/^## (?:🛠️\s*)?(.*?)\n/);
    // Force unified title as requested
    const headerTitle = "工具/书籍"; 
    const body = content.replace(/^## .*?\n/, "");
    
    const resources = parseResources(body);

    return (
        <div className="h-full">
            <h2 className="text-2xl font-black mb-8 flex items-center gap-2">
                <Wrench className="w-7 h-7 text-primary" /> {headerTitle}
            </h2>
            <Card className="border-none shadow-none bg-muted/20 rounded-2xl overflow-hidden h-full">
                <CardContent className="p-6">
                    <ul className="space-y-6">
                        {resources.map((res, i) => {
                            const isBook = res.title.includes("《") || res.title.toLowerCase().includes("book") || res.title.includes("阅读");
                            const Icon = isBook ? BookOpen : Wrench;
                            const target = getLinkTarget(res.link);

                            return (
                                <li key={i} className="flex gap-4 items-start group">
                                    <div className="mt-1 shrink-0 text-muted-foreground/30 group-hover:text-primary/40 transition-colors">
                                        <Icon className="w-4 h-4" />
                                    </div>
                                    <div className="flex-1 text-[15px] leading-relaxed">
                                        <div className="flex flex-col gap-1">
                                            {res.link ? (
                                                <a 
                                                    href={res.link} 
                                                    target={target}
                                                    rel={target === "_blank" ? "noopener noreferrer" : undefined}
                                                    className="font-bold text-foreground hover:text-primary transition-colors decoration-primary/30 underline-offset-4 hover:underline block"
                                                >
                                                    {res.title}
                                                </a>
                                            ) : (
                                                <span className="font-bold text-foreground block">{res.title}</span>
                                            )}
                                            {res.description && (
                                                <div className="text-muted-foreground text-sm pl-1">
                                                    <span className="mr-2 opacity-50">-</span>
                                                    {res.description}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="shrink-0">
                                        <SaveToolButton product={{
                                            name: res.title,
                                            description: res.description,
                                            link: res.link,
                                            category: isBook ? "Book" : "Tool"
                                        }} />
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </CardContent>
            </Card>
        </div>
    );
}



function TableOfContents({ items }: { items: Array<{ id: string; title: string; icon?: React.ReactNode }> }) {
    const [activeId, setActiveId] = useState<string>("");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: "-100px 0px -80% 0px" }
        );

        items.forEach((item) => {
            const element = document.getElementById(item.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [items]);

    if (items.length === 0) return null;

    return (
        <div className="hidden lg:block sticky top-32 max-h-[calc(100vh-8rem)] overflow-y-auto pr-4">
            <h4 className="font-bold text-sm text-muted-foreground/50 uppercase tracking-widest mb-4 pl-4">目录</h4>
            <ul className="relative space-y-1 border-l border-muted/50 ml-1">
                {items.map((item) => {
                    const isActive = activeId === item.id;
                    return (
                        <li key={item.id} className="group relative pl-4">
                             {isActive && (
                                <div className="absolute -left-[1px] top-1/2 -translate-y-1/2 w-[2px] h-6 bg-primary rounded-none shadow-[0_0_8px_rgba(var(--primary),0.5)]" />
                            )}
                            <a
                                href={`#${item.id}`}
                                className={cn(
                                    "flex items-center gap-2 py-1.5 text-sm transition-all duration-300",
                                    isActive
                                        ? "text-primary font-bold translate-x-1"
                                        : "text-muted-foreground/80 hover:text-primary hover:bg-muted/50 rounded-r-md"
                                )}
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById(item.id)?.scrollIntoView({
                                        behavior: "smooth"
                                    });
                                }}
                            >
                                {item.icon && (
                                    <span className={cn("shrink-0 transition-colors", isActive ? "text-primary" : "text-muted-foreground/50")}>
                                        {item.icon}
                                    </span>
                                )}
                                <span className="truncate">{item.title}</span>
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}





function ClassificationSection({ content }: { content: string }) {
    const quadrants = content.split(/###\s+/).slice(1);

    return (
        <div className="my-10 pt-8 border-t border-dashed">
            <h2 className="text-2xl font-black mb-8 flex items-center gap-2">
                <Target className="w-7 h-7 text-primary" /> 四维分类评估
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {quadrants.map((quadrant, idx) => {
                    const lines = quadrant.split('\n');
                    const titleLine = lines[0].trim();
                    const body = lines.slice(1).join('\n').trim();
                    
                    // 简化的颜色指示器
                    let dotColor = "bg-slate-400";
                    
                    if (titleLine.includes("高度正确") || titleLine.includes("Highly Correct")) {
                        dotColor = "bg-emerald-500";
                    } else if (titleLine.includes("当下可执行") || titleLine.includes("Actionable")) {
                        dotColor = "bg-blue-500";
                    } else if (titleLine.includes("理智质疑") || titleLine.includes("Questionable")) {
                        dotColor = "bg-amber-500";
                    } else if (titleLine.includes("需警惕") || titleLine.includes("Warning")) {
                        dotColor = "bg-red-500";
                    }

                    return (
                        <div key={idx} className="space-y-3">
                            <h3 className="font-bold text-base flex items-center gap-2">
                                <span className={`w-2.5 h-2.5 rounded-full ${dotColor} shrink-0`} />
                                {titleLine}
                            </h3>
                            <div className="text-sm text-muted-foreground pl-[18px] prose prose-sm dark:prose-invert max-w-none">
                                <MarkdownRenderer content={body} />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export function EpisodeDetailView({ 
    episode, 
    content 
}: { 
    episode: Episode; 
    content: string 
}) {
    // ... existing code ...
    
    // Split content by H2 headers
    const sections = content.split(/\n(?=## )/);

    // Helper to get header title for robust matching
    const getHeader = (s: string) => {
        const match = s.trim().match(/^## (?:.*? )?(.*?)(?:\n|$)/);
        return match ? match[1].trim() : "";
    };

    const filteredSections = sections.filter(section => {
        const trimmed = section.trim();
        if (!trimmed) return false;
        if (!trimmed.startsWith("##")) return false;
        
        // Strict filter for host intro and core topics
        const h = getHeader(section);
        if (h.includes("主持人介绍")) return false;
        if (h.includes("核心话题")) return false;
        return true;
    }).map(section => {
        return section
            .replace(/\n---\n+\*?_?来源_?\*?[:：][\s\S]*$/, "")
            .replace(/\n---\n+\*?_?Source_?\*?[:：][\s\S]*$/, "")
            .trim();
    });

    // Calculate TOC Items matching render order
    const tocItems: Array<{ id: string; title: string, icon?: React.ReactNode }> = [];

    // 1. Content Summary
    if (sections.find(s => {
        const h = getHeader(s);
        return h.includes("内容概要") || h.includes("Content Summary");
    })) {
        tocItems.push({ 
            id: "content-summary", 
            title: "内容概要",
            icon: <FileText className="w-4 h-4" />
        });
    }

    // 2. Resources & Actions (Manually added to TOC to match new layout)
    if (sections.find(s => {
        const h = getHeader(s);
        return h.includes("提到的工具") || h.includes("Tools/Resources");
    })) {
        tocItems.push({ 
            id: "resources", 
            title: "工具/书籍",
            icon: <Wrench className="w-4 h-4" />
        });
    }

    if (sections.find(s => {
        const h = getHeader(s);
        return h.includes("行动建议") || h.includes("Action Items");
    })) {
        tocItems.push({ 
            id: "action-items", 
            title: "行动建议",
            icon: <ListTodo className="w-4 h-4" />
        });
    }

    // 3. Key Insights
    if (sections.find(s => {
        const h = getHeader(s);
        return h.includes("关键洞察") || h.includes("Key Insights");
    })) {
        tocItems.push({ 
            id: "key-insights", 
            title: "关键洞察",
            icon: <Key className="w-4 h-4" />
        });
    }



    // 4. Pre-calculate metadata for Filtered Sections to ensure ID uniqueness
    const usedIds = new Set<string>();
    
    // Add existing static IDs to used set (using strict header matching)
    if (sections.find(s => {
        const h = getHeader(s);
        return h.includes("内容概要") || h.includes("Content Summary");
    })) usedIds.add("content-summary");
    
    if (sections.find(s => {
        const h = getHeader(s);
        return h.includes("关键洞察") || h.includes("Key Insights");
    })) usedIds.add("key-insights");
    


    const filteredSectionsMetadata = filteredSections.map((section, idx) => {
        const cleanSection = section.trim();
        if (!cleanSection) return null;
        
        const cleanHeader = getHeader(cleanSection);
        
        // Skip manually handled ones (return null to filter out later)
        // Check HEADER strictly
        if (cleanHeader.includes("关键洞察") || cleanHeader.includes("Key Insights")) return null;
        if (cleanHeader.includes("内容概要") || cleanHeader.includes("Content Summary")) return null;

        let title = "Section";
        let baseId = `section-${idx}`;
        let icon = null;

        // Extract title and strip emojis
        const headerMatch = cleanSection.match(/^## (?:.*? )?(.*?)(?:\n|$)/);
        if (headerMatch) {
            title = headerMatch[1].replace(/[\u{1F300}-\u{1F9FF}]/gu, "").trim();
        }
        
        // Use cleanHeader for identification
        if (cleanHeader.includes("行动建议") || cleanHeader.includes("Action Items")) {
            title = "行动建议";
            baseId = "action-items";
            icon = <ListTodo className="w-4 h-4" />;
        } else if (cleanHeader.includes("提到的工具") || cleanHeader.includes("Tools/Resources")) {
            title = "工具/书籍";
            baseId = "resources";
            icon = <Wrench className="w-4 h-4" />;
        } else if (cleanHeader.includes("四维分类评估") || cleanHeader.includes("Classification Assessment")) {
            title = "四维分类评估";
            baseId = "classification";
            icon = <Target className="w-4 h-4" />;
        } else if (cleanHeader.includes("嘉宾介绍") || cleanHeader.includes("Guest Introduction")) {
            title = "嘉宾介绍";
            baseId = "guest-intro";
            icon = <Mic className="w-4 h-4" />;
        } else if (cleanHeader.includes("核心论点") || cleanHeader.includes("Core Arguments")) {
            title = "核心论点";
            baseId = "core-arguments";
            icon = <Lightbulb className="w-4 h-4" />;
        } else if (cleanHeader.includes("数据验证结果") || cleanHeader.includes("Data Verification")) {
            title = "数据验证结果";
            baseId = "data-verification";
            icon = <ShieldCheck className="w-4 h-4" />;
        } else if (cleanHeader.includes("评分") || cleanHeader.includes("Score")) {
            title = "深度评分";
            baseId = "score-content";
            icon = <Star className="w-4 h-4" />;
        } else if (cleanHeader.includes("参考来源") || cleanHeader.includes("References")) {
            title = "参考来源";
            baseId = "references";
            icon = <BookOpen className="w-4 h-4" />;
        }

        // Ensure uniqueness
        let id = baseId;
        let counter = 1;
        while (usedIds.has(id)) {
            id = `${baseId}-${counter}`;
            counter++;
        }
        usedIds.add(id);

        return { id, title, icon, content: cleanSection };
    }).filter((item): item is NonNullable<typeof item> => item !== null);

    // Add to TOC Items
    filteredSectionsMetadata.forEach(item => {
        if (item.id.startsWith("resources") || item.id.startsWith("action-items")) return;
        tocItems.push({ id: item.id, title: item.title, icon: item.icon });
    });

    return (
        <div className="flex flex-col gap-0 pb-20">
            {/* Guest Header */}
            <div className="mb-10 flex flex-col gap-6">
                {/* ... existing guest header code ... */}
                <div className="flex flex-wrap items-center gap-4">
                    <div className="flex gap-3">
                        {episode.twitterUrl && (
                            <a href={episode.twitterUrl} target="_blank" rel="noopener noreferrer" className="p-2 bg-muted rounded-full hover:bg-primary/10 hover:text-primary transition-colors">
                                <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 fill-current">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                                </svg>
                            </a>
                        )}
                        {episode.linkedinUrl && (
                            <a href={episode.linkedinUrl} target="_blank" rel="noopener noreferrer" className="p-2 bg-muted rounded-full hover:bg-primary/10 hover:text-primary transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        )}
                    </div>
                   {/* ... rest of guest header ... */}
                   <div className="flex flex-wrap gap-2">
                        {episode.topics.map(topic => (
                            <Badge key={topic} variant="secondary" className="px-3 py-1 font-medium">{topic}</Badge>
                        ))}
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-9">
                    {/* Content Summary Section */}
                    {sections.find(s => {
                        const h = getHeader(s);
                        return h.includes("内容概要") || h.includes("Content Summary");
                    }) && (
                        <div id="content-summary" className="scroll-mt-24 mb-0 prose prose-slate dark:prose-invert max-w-none prose-headings:font-black prose-p:leading-relaxed prose-li:leading-relaxed">
                            <h2 className="text-2xl font-black mb-8 flex items-center gap-2">
                                <FileText className="w-7 h-7 text-primary" /> 内容概要
                            </h2>
                            <MarkdownRenderer content={sections.find(s => {
                                const h = getHeader(s);
                                return h.includes("内容概要") || h.includes("Content Summary");
                            })?.replace(/^## .*?\n/, "").replace(/\n---\n*$/, "") || ""} />
                            
                            <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
                                {episode.transcriptUrl && (
                                    <Button variant="outline" className="gap-2 h-10 bg-card hover:bg-accent/50 transition-colors shadow-sm border-muted/40 hover:border-primary/20" asChild>
                                        <Link href={episode.transcriptUrl} className="no-underline">
                                            <FileText className="w-4 h-4" />
                                            逐字稿
                                        </Link>
                                    </Button>
                                )}

                                {episode.transcriptPdfUrl && (
                                    <Button variant="outline" className="gap-2 h-10 bg-card hover:bg-accent/50 transition-colors shadow-sm border-muted/40 hover:border-primary/20" asChild>
                                       <a href={episode.transcriptPdfUrl} target="_blank" rel="noopener noreferrer" className="no-underline">
                                            <FileText className="w-4 h-4" />
                                            双语 PDF
                                        </a>
                                    </Button>
                                )}
                            </div>
                            
                            <hr className="my-8 border-muted" />
                        </div>
                    )}

                    {/* Resources & Actions Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                        {/* Resources Column */}
                        {filteredSectionsMetadata.find(s => s.id.startsWith("resources")) && (
                             <div id="resources" className="scroll-mt-24">
                                <ResourceSection content={filteredSectionsMetadata.find(s => s.id.startsWith("resources"))!.content} />
                            </div>
                        )}
                        
                        {/* Actions Column */}
                        {filteredSectionsMetadata.find(s => s.id.startsWith("action-items")) && (
                            <div id="action-items" className="scroll-mt-24">
                                <ActionSection content={filteredSectionsMetadata.find(s => s.id.startsWith("action-items"))!.content} slug={episode.slug} />
                            </div>
                        )}
                    </div>

                    {/* Key Insights Section */}
                    {sections.find(s => {
                        const h = getHeader(s);
                        return h.includes("关键洞察") || h.includes("Key Insights");
                    }) && (
                        <div id="key-insights" className="scroll-mt-24 mb-8 prose prose-slate dark:prose-invert max-w-none prose-headings:font-black prose-p:leading-relaxed prose-li:leading-relaxed">
                            <h2 className="text-2xl font-black mb-8 flex items-center gap-2">
                                <Key className="w-7 h-7 text-primary" /> 关键洞察
                            </h2>
                            <MarkdownRenderer content={sections.find(s => {
                                const h = getHeader(s);
                                return h.includes("关键洞察") || h.includes("Key Insights");
                            })?.replace(/^## .*?\n/, "") || ""} />
                        </div>
                    )}

                    {/* Main Content Sections (Skipping moved sections) */}
                    <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-black prose-p:leading-relaxed prose-li:leading-relaxed">
                        {filteredSectionsMetadata.map((section, idx) => {
                            const { id, content: cleanSection } = section;
                            
                            // Skip sections that moved to the grid
                            if (id.startsWith("action-items") || id.startsWith("resources")) return null;

                            const Wrapper = ({ children }: { children: React.ReactNode }) => (
                                <section id={id} className="scroll-mt-24">
                                    {children}
                                </section>
                            );

                            if (id.startsWith("classification")) {
                                return <Wrapper key={idx}><ClassificationSection content={cleanSection} /></Wrapper>;
                            }

                            if (id.startsWith("guest-intro")) {
                                return (
                                    <Wrapper key={idx}>
                                        <div className="mb-8 prose prose-slate dark:prose-invert max-w-none prose-headings:font-black prose-p:leading-relaxed prose-li:leading-relaxed">
                                            <h2 className="text-2xl font-black mb-8 flex items-center gap-2">
                                                <Mic className="w-7 h-7 text-primary" /> 嘉宾介绍
                                            </h2>
                                            <MarkdownRenderer content={cleanSection.replace(/^## .*?\n/, "")} />
                                        </div>
                                    </Wrapper>
                                );
                            }

                            if (id.startsWith("core-arguments")) {
                                return (
                                    <Wrapper key={idx}>
                                        <div className="mb-8 prose prose-slate dark:prose-invert max-w-none prose-headings:font-black prose-p:leading-relaxed prose-li:leading-relaxed">
                                            <h2 className="text-2xl font-black mb-8 flex items-center gap-2">
                                                <Lightbulb className="w-7 h-7 text-primary" /> 核心论点
                                            </h2>
                                            <MarkdownRenderer content={cleanSection.replace(/^## .*?\n/, "")} />
                                        </div>
                                    </Wrapper>
                                );
                            }

                            if (id.startsWith("data-verification")) {
                                return (
                                    <Wrapper key={idx}>
                                        <div className="mb-8 prose prose-slate dark:prose-invert max-w-none prose-headings:font-black prose-p:leading-relaxed prose-li:leading-relaxed">
                                            <h2 className="text-2xl font-black mb-8 flex items-center gap-2">
                                                <ShieldCheck className="w-7 h-7 text-primary" /> 数据验证结果
                                            </h2>
                                            <MarkdownRenderer content={cleanSection.replace(/^## .*?\n/, "")} />
                                        </div>
                                    </Wrapper>
                                );
                            }
                            
                            if (id.startsWith("score-content")) {
                                return (
                                    <Wrapper key={idx}>
                                        <div className="mb-8 prose prose-slate dark:prose-invert max-w-none prose-headings:font-black prose-p:leading-relaxed prose-li:leading-relaxed">
                                            <h2 className="text-2xl font-black mb-8 flex items-center gap-2">
                                                <Star className="w-7 h-7 text-primary" /> 深度评分
                                            </h2>
                                            <MarkdownRenderer content={cleanSection.replace(/^## .*?\n/, "")} />
                                        </div>
                                    </Wrapper>
                                );
                            }

                            if (id.startsWith("references")) {
                                return (
                                    <Wrapper key={idx}>
                                        <div className="mb-8 prose prose-slate dark:prose-invert max-w-none prose-headings:font-black prose-p:leading-relaxed prose-li:leading-relaxed">
                                            <h2 className="text-2xl font-black mb-8 flex items-center gap-2">
                                                <BookOpen className="w-7 h-7 text-primary" /> 参考来源
                                            </h2>
                                            <MarkdownRenderer content={cleanSection.replace(/^## .*?\n/, "")} />
                                        </div>
                                    </Wrapper>
                                );
                            }
                            
                            // Render generic sections with ID
                             return (
                                <Wrapper key={idx}>
                                    <MarkdownRenderer content={cleanSection} />
                                </Wrapper>
                            );
                        })}
                    </div>
                </div>

                {/* Sidebar TOC */}
                <div className="lg:col-span-3">
                    <TableOfContents items={tocItems} />
                </div>
            </div>
        </div>
    );

}

