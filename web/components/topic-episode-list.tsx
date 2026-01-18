"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Episode } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Tag, LayoutList, Zap, Wrench, Check, ArrowRight, Linkedin, LinkIcon, BookOpen } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { cn } from "@/lib/utils";

type ViewMode = "score" | "actions" | "resources";

interface ActionItem {
    id: string; // hash or cleaned text
    text: string;
    originalText: string;
}

interface ActionCategory {
    label: string; // "今天", "本周", "深入"
    items: ActionItem[];
}

function parseActions(markdown: string): ActionCategory[] {
    const sections = markdown.split(/###\s+/);
    const categories: ActionCategory[] = [];

    // Map keywords to unified labels
    // Order matters? Usually standard order.
    // keywords: 
    // "立即" -> "今天"
    // "本周" -> "本周"
    // "深度" -> "深入"
    
    sections.forEach(section => {
        if (!section.trim()) return;
        
        const lines = section.split('\n');
        const header = lines[0].trim();
        const contentLines = lines.slice(1);
        
        let label = "";
        if (header.includes("立即") || header.includes("今天")) label = "今天";
        else if (header.includes("本周")) label = "本周";
        else if (header.includes("深度") || header.includes("深入")) label = "深入";
        
        if (!label) return; // Skip unknown sections or intro text

        const items: ActionItem[] = [];
        contentLines.forEach(line => {
            const trimmed = line.trim();
            // Match list items: - [ ] or - 
            if (trimmed.startsWith('-')) {
                // Remove "- [ ]" or "- " prefix
                let cleanText = trimmed.replace(/^-\s*(\[\s*\])?\s*/, '');
                // Remove bold markers if they wrap the whole line roughly, or keep them?
                // Plan said "Interactive checkbox". 
                // Let's just strip the markdown checkbox syntax.
                
                if (cleanText) {
                    items.push({
                        id: btoa(unescape(encodeURIComponent(cleanText))).slice(0, 16), // Simple hash for ID
                        text: cleanText,
                        originalText: cleanText 
                    });
                }
            }
        });

        if (items.length > 0) {
            categories.push({ label, items });
        }
    });

    return categories;
}

function ActionList({ content, slug }: { content: string, slug: string }) {
    const categories = parseActions(content);
    const storageKey = `lenny_actions_${slug}`;
    const [checkedState, setCheckedState] = useState<Record<string, boolean>>({});

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

    const toggleItem = (id: string) => {
        const newState = { ...checkedState, [id]: !checkedState[id] };
        setCheckedState(newState);
        localStorage.setItem(storageKey, JSON.stringify(newState));
    };

    return (
        <div className="space-y-4">
            {categories.map((cat) => (
                <div key={cat.label}>
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/70 mb-2">
                        {cat.label}
                    </h4>
                    <ul className="space-y-2">
                        {cat.items.map((item) => {
                            const isChecked = checkedState[item.id] || false;
                            return (
                                <li 
                                    key={item.id} 
                                    className={cn(
                                        "flex items-start gap-2.5 group cursor-pointer select-none transition-all duration-200",
                                        isChecked ? "opacity-50" : "opacity-100"
                                    )}
                                    onClick={(e) => {
                                        e.preventDefault(); // Prevent card click
                                        e.stopPropagation();
                                        toggleItem(item.id);
                                    }}
                                >
                                    <div className={cn(
                                        "mt-0.5 w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-colors pointer-events-auto relative z-20", // pointer-events-auto just in case
                                        isChecked 
                                            ? "bg-primary border-primary text-primary-foreground" 
                                            : "border-muted-foreground/30 bg-background group-hover:border-primary/50"
                                    )}>
                                        {isChecked && <Check className="w-2.5 h-2.5" strokeWidth={3} />}
                                    </div>
                                    <div className="flex-1 text-sm leading-snug pt-0.5">
                                        <ReactMarkdown 
                                            components={{
                                                p: ({children}) => <p className={cn("m-0", isChecked && "line-through text-muted-foreground")}>{children}</p>,
                                                // Ensure links inside are clickable and don't toggle the checkbox if clicked directly? 
                                                // Actually strict check: prevent checkbox toggle if clicking link?
                                                // Simplify: Just let it toggle.
                                                a: ({node, ...props}) => (
                                                    <a 
                                                        className="text-primary hover:underline relative z-30" 
                                                        target="_blank" 
                                                        onClick={(e) => e.stopPropagation()} 
                                                        {...props} 
                                                    />
                                                ) 
                                            }}
                                        >
                                            {item.text}
                                        </ReactMarkdown>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            ))}
        </div>
    );
}


interface ResourceItem {
    name: string;
    url: string;
    description?: string;
    type: 'tool' | 'book' | 'other';
}

function parseResources(markdown: string): ResourceItem[] {
    const items: ResourceItem[] = [];
    // Split by blocks that look like they start with **Prefix**:
    const blocks = markdown.split(/\n(?=\*\*)/);
    
    blocks.forEach(block => {
        // Extract Name and Category
        // Match: **Prefix**: **Name**
        // e.g. **工具 1**: **Coda**
        // e.g. **推荐阅读**: **Book Name**
        const nameMatch = block.match(/\*\*(.*?)\*\*:\s*\*\*(.*?)\*\*/);
        
        // Extract URL
        const urlMatch = block.match(/-\s*(?:链接|Link):\s*\[.*?\]\((.*?)\)/);

        // Extract Description
        const descMatch = block.match(/-\s*(?:说明|Description|Desc)[:：]\s*(.*)/);

        if (nameMatch && urlMatch) {
            const category = nameMatch[1];
            let type: ResourceItem['type'] = 'other';
            
            if (category.includes('工具') || category.toLowerCase().includes('tool')) {
                type = 'tool';
            } else if (category.includes('阅读') || category.includes('书') || category.toLowerCase().includes('read') || category.toLowerCase().includes('book')) {
                type = 'book';
            }

            items.push({
                name: nameMatch[2], // The actual name is now in group 2
                url: urlMatch[1],
                description: descMatch ? descMatch[1].trim() : undefined,
                type
            });
        }
    });

    return items;
}

export function TopicEpisodeList({ episodes }: { episodes: Episode[] }) {
  const [viewMode, setViewMode] = useState<ViewMode>("score");

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-end gap-2">
        <Button 
            variant={viewMode === "score" ? "default" : "outline"} 
            size="sm"
            onClick={() => setViewMode("score")}
            className="text-xs"
        >
            <LayoutList className="mr-2 h-3.5 w-3.5" />
            Scores
        </Button>
        <Button 
            variant={viewMode === "actions" ? "default" : "outline"} 
            size="sm"
            onClick={() => setViewMode("actions")}
            className="text-xs"
        >
            <Zap className="mr-2 h-3.5 w-3.5" />
            Actions
        </Button>
        <Button 
            variant={viewMode === "resources" ? "default" : "outline"} 
            size="sm"
            onClick={() => setViewMode("resources")}
            className="text-xs"
        >
            <Wrench className="mr-2 h-3.5 w-3.5" />
            Tools
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
        {episodes.map((episode) => (
            <Card key={episode.slug} className="h-full group relative hover:bg-muted/50 transition-colors flex flex-col">
              <CardHeader>
                <CardTitle className="leading-tight text-xl mb-1">
                   <Link href={`/episode/${episode.slug}`} className="after:absolute after:inset-0 focus:outline-none">
                        {episode.guest}
                   </Link>
                </CardTitle>
                

                         <div className="flex items-center gap-3 mb-2 relative z-20">
                            {episode.twitterUrl && (
                                <a 
                                    href={episode.twitterUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
                                    onClick={(e) => e.stopPropagation()}
                                    aria-label="X (Twitter) Profile"
                                >
                                    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current transition-transform hover:scale-110">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                                    </svg>
                                </a>
                            )}
                            {episode.linkedinUrl && (
                                <a 
                                    href={episode.linkedinUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="inline-flex items-center text-muted-foreground hover:text-[#0077b5] transition-colors"
                                    onClick={(e) => e.stopPropagation()}
                                    aria-label="LinkedIn Profile"
                                >
                                   <Linkedin className="h-4 w-4 transition-transform hover:scale-110" />
                                </a>
                            )}
                         </div>


              </CardHeader>
              <CardContent className="flex-1 min-h-[160px]">
                <div className="text-sm text-muted-foreground line-clamp-4 mb-4 text-xs h-[80px]">
                    {episode.guestIntro ? (
                        <div className="prose prose-xs dark:prose-invert max-w-none">
                             <ReactMarkdown 
                                components={{
                                    p: ({children}) => <p className="mb-1 leading-relaxed">{children}</p>,
                                    a: ({node, ...props}) => <a className="text-primary hover:underline relative z-10" target="_blank" {...props} />
                                }}
                             >
                                {episode.guestIntro}
                            </ReactMarkdown>
                        </div>
                    ) : (
                        <p className="whitespace-pre-line">{episode.summary}</p>
                    )}
                </div>
                
                {viewMode === "score" && episode.score && (
                    <div className="grid grid-cols-2 gap-y-1 gap-x-4 text-xs mt-2 bg-muted/30 p-2 rounded-md">
                        <div className="flex justify-between">
                            <span className="text-muted-foreground">知识价值</span>
                            <span className="font-medium">{episode.score.knowledge}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-muted-foreground">可执行性</span>
                            <span className="font-medium">{episode.score.actionable}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-muted-foreground">商业潜力</span>
                            <span className="font-medium">{episode.score.business}</span>
                        </div>
                         <div className="flex justify-between">
                            <span className="text-muted-foreground">投入产出</span>
                            <span className="font-medium">{episode.score.roi}</span>
                        </div>
                         <div className="col-span-2 pt-1 mt-1 border-t flex justify-between">
                            <span className="font-semibold text-primary">综合评分</span>
                            <span className="font-bold text-primary">{episode.score.overall}</span>
                        </div>
                    </div>
                )}

                {viewMode === "actions" && (
                    <div className="text-xs bg-muted/20 p-3 rounded-md mt-2 relative">
                         {episode.actions ? (
                             <ActionList content={episode.actions} slug={episode.slug} />
                         ) : (
                             <p className="text-muted-foreground italic text-center py-4">No action items available.</p>
                         )}
                    </div>
                )}


                {viewMode === "resources" && (
                     <div className="text-sm bg-muted/20 p-3 rounded-md mt-2 relative">
                         {episode.resources ? (
                             <div className="space-y-2">
                                 {parseResources(episode.resources).length > 0 ? (
                                     parseResources(episode.resources).map((item, i) => (
                                         <div key={i} className="leading-snug flex items-start gap-2">
                                             <div className="mt-0.5 text-muted-foreground/70 shrink-0">
                                                {item.type === 'tool' && <Wrench className="w-3.5 h-3.5" />}
                                                {item.type === 'book' && <BookOpen className="w-3.5 h-3.5" />}
                                                {item.type === 'other' && <LinkIcon className="w-3.5 h-3.5" />}
                                             </div>
                                             <div>
                                                 <a 
                                                     href={item.url}
                                                     target="_blank"
                                                     rel="noopener noreferrer"
                                                     className="text-primary hover:underline font-semibold relative z-30 mr-1"
                                                     onClick={(e) => e.stopPropagation()}
                                                 >
                                                     {item.name}
                                                 </a>
                                                 {item.description && (
                                                    <span className="text-muted-foreground">
                                                        - {item.description}
                                                    </span>
                                                 )}
                                             </div>
                                         </div>
                                     ))
                                 ) : (
                                     <div className="prose prose-xs dark:prose-invert max-w-none">
                                         {/* Fallback to simple markdown if parsing fails or structure matches nothing */}
                                         <ReactMarkdown 
                                            components={{
                                                p: ({children}) => <p className="mb-1 leading-relaxed">{children}</p>,
                                                a: ({node, ...props}) => <a className="text-primary hover:underline relative z-10" target="_blank" {...props} />
                                            }}
                                         >
                                            {episode.resources}
                                         </ReactMarkdown>
                                     </div>
                                 )}
                             </div>
                         ) : (
                             <p className="text-muted-foreground italic text-center py-4">No resources available.</p>
                         )}
                     </div>
                )}


              </CardContent>
              <CardFooter className="flex gap-2 flex-wrap pt-0 text-xs"> 
                 {/* Z-index for tags too if they are clickable links? 
                     Current Tags are just Badges, not links here.
                  */}
                 {episode.topics.slice(0, 3).map(t => (
                    <Badge key={t} variant="secondary" className="text-xs font-normal">
                        {t}
                    </Badge>
                 ))}
                 {episode.topics.length > 3 && (
                    <span className="text-xs text-muted-foreground">+{episode.topics.length - 3} more</span>
                 )}
              </CardFooter>
            </Card>
        ))}
      </div>
    </div>
  );
}
