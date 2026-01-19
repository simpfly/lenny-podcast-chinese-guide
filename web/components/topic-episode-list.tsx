"use client";

import Link from "next/link";
import React, { useState, useEffect, useMemo } from "react";
import { Episode } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SaveToolButton } from "@/components/save-tool-button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Tag, LayoutList, Zap, Wrench, Check, ArrowRight, Linkedin, LinkIcon, BookOpen, Lightbulb } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { cn } from "@/lib/utils";

type ViewMode = "keypoints" | "actions" | "resources";

import { ActionCategory, parseActions } from "@/lib/action-parser";

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
                    <ul className="space-y-2.5">
                        {cat.items.map((item) => {
                            const isChecked = checkedState[item.id] || false;
                            return (
                                <li 
                                    key={item.id} 
                                    className={cn(
                                        "flex items-start gap-2.5 group transition-all duration-200",
                                        isChecked ? "opacity-100" : "opacity-100"
                                    )}
                                >
                                    <div 
                                        onClick={(e) => {
                                            e.preventDefault(); 
                                            e.stopPropagation();
                                            toggleItem(item.id);
                                        }}
                                        className={cn(
                                        "mt-1 w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-colors relative z-20 cursor-pointer", 
                                        isChecked 
                                            ? "bg-green-600 border-green-600 text-white" 
                                            : "border-muted-foreground/30 bg-background hover:border-primary/50"
                                    )}>
                                        {isChecked && <Check className="w-2.5 h-2.5" strokeWidth={3} />}
                                    </div>
                                    <div className="flex-1 text-sm leading-relaxed pt-0.5">
                                        <ReactMarkdown 
                                            components={{
                                                p: ({children}) => <p className={cn("m-0")}>{children}</p>,
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
        // Generic Parse Strategy:
        // 1. Identify Key/Value pair: **Key**: Value
        // 2. If Value exists -> Single Item (Format A/B/D)
        // 3. If Value is empty -> Group Header (Format C)

        const mainLineMatch = block.match(/^\*\*(.*?)\*\*:\s*(.*)$/m);
        
        // Extract URL (Separate line)
        const urlMatch = block.match(/-\s*(?:链接|Link):\s*\[.*?\]\((.*?)\)/);
        // Extract Description
        const descMatch = block.match(/-\s*(?:说明|Description|Desc)[:：]\s*(.*)/);

        if (mainLineMatch) {
            const category = mainLineMatch[1];
            const content = mainLineMatch[2].trim();

            if (content) {
                // It has content, so it's a Single Item
                let name = content;
                let url = urlMatch ? urlMatch[1] : '';

                // Try to extract name/url from content if inline
                // Check for Inline Link: [Name](Url)
                const inlineLinkMatch = content.match(/^\[(.*?)\]\((.*?)\)$/);
                // Check for Bold Name: **Name**
                const boldNameMatch = content.match(/^\*\*(.*?)\*\*$/);

                if (inlineLinkMatch) {
                    name = inlineLinkMatch[1];
                    url = inlineLinkMatch[2];
                } else if (boldNameMatch) {
                    name = boldNameMatch[1];
                }

                items.push(createResourceItem(category, name, url, descMatch ? descMatch[1] : undefined));
            } else {
                // It's a Group Header (content is empty)
                // Parse following lines as items
                const lines = block.split('\n').slice(1);
                 
                lines.forEach(line => {
                     // Match bullet point with bold name
                     // - **Name**: Description [Label](Url)
                     const itemMatch = line.match(/-\s*\*\*(.*?)\*\*:\s*(.*?)(\[.*?\]\((.*?)\))?$/);
                     if (itemMatch) {
                         const name = itemMatch[1];
                         let description = itemMatch[2].trim();
                         let url = itemMatch[4];
                         
                         if (!url) {
                              const linkInDesc = description.match(/\[.*?\]\((.*?)\)/);
                              if (linkInDesc) {
                                  url = linkInDesc[1];
                                  description = description.replace(linkInDesc[0], '').trim();
                              }
                         }

                         if (url) {
                              items.push(createResourceItem(category, name, url, description));
                         }
                     }
                 })
            }
        }
    });

    return items;
}

function createResourceItem(category: string, name: string, url: string, description: string | undefined): ResourceItem {
    let type: ResourceItem['type'] = 'other';
    
    // Check type based on category OR item name (sometimes helps)
    const lowerCat = category.toLowerCase();
    
    if (lowerCat.includes('工具') || lowerCat.includes('tool') || lowerCat.includes('app') || lowerCat.includes('softwar')) {
        type = 'tool';
    } else if (lowerCat.includes('阅读') || lowerCat.includes('书') || lowerCat.includes('read') || lowerCat.includes('book')) {
        type = 'book';
    }

    return {
        name: name,
        url: url,
        description: description?.trim(),
        type
    };
}

// Helper component for responsive tags
// Helper component for responsive tags
function ResponsiveTopicTags({ topics }: { topics: string[] }) {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const ghostRef = React.useRef<HTMLDivElement>(null);
    const uniqueTopics = useMemo(() => Array.from(new Set(topics)), [topics]);
    const [visibleCount, setVisibleCount] = useState(uniqueTopics.length);

    useEffect(() => {
        const calculateVisible = () => {
            if (!containerRef.current || !ghostRef.current) return;
            
            // Sync width of ghost to real container
            const width = containerRef.current.getBoundingClientRect().width;
            ghostRef.current.style.width = `${width}px`;

            const children = Array.from(ghostRef.current.children) as HTMLElement[];
            if (children.length === 0) return;

            const firstTop = children[0].offsetTop;
            let newVisibleCount = topics.length;

            // Find the first item that wraps to the next line in the GHOST container
            for (let i = 0; i < children.length; i++) {
                if (children[i].offsetTop > firstTop) {
                    newVisibleCount = i;
                    break;
                }
            }

            // Adjust for counter space if truncated
            // If we are truncating, we generally need space for the "+N" badge.
            // A simple heuristic is to remove one more item to be safe.
            if (newVisibleCount < uniqueTopics.length) {
                newVisibleCount = Math.max(1, newVisibleCount - 1);
            }

            setVisibleCount(newVisibleCount);
        };

        const observer = new ResizeObserver(() => {
            // No need to reset state or requestAnimationFrame loops that cause flicker.
            // Just recalculate based on the Ghost.
            // We use requestAnimationFrame to throttle slightly and ensure DOM is ready.
            requestAnimationFrame(calculateVisible);
        });

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }
        
        // Initial calc
        calculateVisible();

        return () => observer.disconnect();
    }, [uniqueTopics]);

    return (
        <div className="relative w-full">
            {/* Real Visible Container */}
            <div 
                ref={containerRef} 
                className="flex flex-wrap gap-2 w-full overflow-hidden"
                style={{ maxHeight: '24px' }}
            >
                {uniqueTopics.map((t, i) => {
                    if (i < visibleCount) {
                         return (
                            <Badge key={t} variant="secondary" className="text-xs font-normal whitespace-nowrap">
                                {t}
                            </Badge>
                        );
                    }
                    if (i === visibleCount && visibleCount < uniqueTopics.length) {
                         return (
                             <span key="more" className="text-xs text-muted-foreground self-center whitespace-nowrap pl-1">
                                +{uniqueTopics.length - visibleCount} more
                             </span>
                         );
                    }
                    return null;
                })}
            </div>

            {/* Ghost Container for Measurement - Absolute, Hidden but Layout Active */}
            <div 
                ref={ghostRef}
                className="flex flex-wrap gap-2 absolute top-0 left-0 opacity-0 pointer-events-none -z-10"
                style={{ visibility: 'hidden' }} 
                aria-hidden="true"
            >
                 {uniqueTopics.map((t) => (
                    <Badge key={t} variant="secondary" className="text-xs font-normal whitespace-nowrap">
                        {t}
                    </Badge>
                ))}
                 {/* Add a fake "more" badge to account for its width? 
                     Ideally we'd measure with it, but simple reduction (count - 1) usually works. 
                  */}
            </div>
        </div>
    );
}

export function TopicEpisodeList({ episodes, initialViewMode }: { episodes: Episode[], initialViewMode?: ViewMode }) {
  const [viewMode, setViewMode] = useState<ViewMode>(initialViewMode || "keypoints");

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-end gap-2">
        <Button 
            variant={viewMode === "keypoints" ? "default" : "outline"} 
            size="sm"
            onClick={() => setViewMode("keypoints")}
            className="text-xs"
        >
            <Lightbulb className="mr-2 h-3.5 w-3.5" />
            Keypoints
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
            <Card key={episode.slug} className="h-full group/card relative hover:bg-muted/50 transition-colors flex flex-col">
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
              <CardContent className="flex-1 min-h-[160px] flex flex-col">
                <div className="text-sm text-muted-foreground line-clamp-2 mb-3 h-[2.8rem]">
                    {episode.guestIntro ? (
                        <div className="prose prose-sm dark:prose-invert max-w-none">
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
                
                
                {viewMode === "keypoints" && (
                    <div className="mt-3 pt-3 border-t flex-1">
                        {episode.coreArguments && episode.coreArguments.length > 0 ? (
                            <ol className="list-decimal list-outside pl-4 space-y-2.5 text-sm text-muted-foreground font-medium">
                                {episode.coreArguments.map((arg, i) => (
                                    <li key={i} className="pl-1 leading-relaxed">
                                        <span className="text-foreground/90">{arg}</span>
                                    </li>
                                ))}
                            </ol>
                        ) : (
                             // Fallback to Scores if no arguments found (Backward Compatibility)
                            episode.score ? (
                                <div className="grid grid-cols-2 gap-y-1 gap-x-4 text-xs">
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
                                     <div className="col-span-2 pt-1 mt-1 border-t flex justify-between">
                                        <span className="font-semibold text-primary">综合评分</span>
                                        <span className="font-bold text-primary">{episode.score.overall}</span>
                                    </div>
                                </div>
                            ) : (
                                <p className="text-muted-foreground italic text-center py-4 text-xs">No keypoints available.</p>
                            )
                        )}
                    </div>
                )}

                {viewMode === "actions" && (
                    <div className="mt-3 pt-3 border-t text-sm relative flex-1">
                         {episode.actions ? (
                             <ActionList content={episode.actions} slug={episode.slug} />
                         ) : (
                             <p className="text-muted-foreground italic text-center py-4">No action items available.</p>
                         )}
                    </div>
                )}


                {viewMode === "resources" && (
                     <div className="mt-3 pt-3 border-t text-sm relative flex-1">
                         {episode.resources ? (
                             <div className="space-y-3">
                                 {parseResources(episode.resources).length > 0 ? (
                                     parseResources(episode.resources).map((item, i) => (
                                         <div key={i} className="leading-snug flex items-start gap-2.5 group">
                                             <div className="mt-1 text-muted-foreground/70 shrink-0">
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
                                                    <span className="text-muted-foreground leading-relaxed block mt-0.5 text-xs">
                                                        {item.description}
                                                    </span>
                                                 )}
                                             </div>
                                            
                                            <div className="ml-auto shrink-0 relative z-30">
                                                 <SaveToolButton 
                                                    product={{
                                                        name: item.name,
                                                        link: item.url,
                                                        description: item.description,
                                                        category: item.type === 'tool' ? 'Tool' : item.type === 'book' ? 'Book' : 'Resource'
                                                    }}
                                                    className="w-5 h-5"
                                                 />
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
              <CardFooter className="pt-0 min-h-[24px]"> 
                 <ResponsiveTopicTags topics={episode.topics} />
              </CardFooter>
            </Card>
        ))}
      </div>
    </div>
  );
}
