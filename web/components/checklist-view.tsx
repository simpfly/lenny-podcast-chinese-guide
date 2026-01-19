"use client";

import { useEffect, useState } from "react";
import { SaveToolButton } from "@/components/save-tool-button";
import { Episode } from "@/lib/data";
import { parseActions } from "@/lib/action-parser";
import Link from "next/link";
import { 
  Check, 
  ArrowRight, 
  Loader2, 
  ExternalLink, 
  Trash2, 
  Rocket, 
  Calendar, 
  Search, 
  Wrench, 
  LayoutDashboard,
  CheckSquare,
  Package,
  Users,
  Twitter,
  Linkedin,
  Plus,
  Copy,
  Check as CheckIcon
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ReactMarkdown from "react-markdown";
import { cn, getLinkTarget } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BuilderCard } from "@/components/builder-card";

interface ChecklistViewProps {
  episodes: Episode[];
}

interface CompletedAction {
  id: string;
  text: string;
  episodeSlug: string;
  episodeTitle: string;
  category: string; // "今天", "本周", "深入"
  rawCategory: string; // Original label for filtering
}

export function ChecklistView({ episodes }: ChecklistViewProps) {
  const [completedActions, setCompletedActions] = useState<CompletedAction[]>([]);
  const [productStack, setProductStack] = useState<any[]>([]);
  const [savedBuilders, setSavedBuilders] = useState<any[]>([]); 
  const [isLoading, setIsLoading] = useState(true);
  const [copiedTab, setCopiedTab] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    const loadedActions: CompletedAction[] = [];

    episodes.forEach(episode => {
      const storageKey = `lenny_actions_${episode.slug}`;
      const saved = localStorage.getItem(storageKey);
      
      if (saved && episode.actions) {
        try {
          const checkedState: Record<string, boolean> = JSON.parse(saved);
          const hasCheckedItems = Object.values(checkedState).some(v => v);
          
          if (hasCheckedItems) {
            const categories = parseActions(episode.actions);
            
            categories.forEach(cat => {
              cat.items.forEach(item => {
                if (checkedState[item.id]) {
                  const categoryMap: Record<string, string> = {
                    "今天": "Do It Today",
                    "本周": "This Week",
                    "深入": "Deep Dive"
                  };
                  
                  loadedActions.push({
                    id: item.id,
                    text: item.text,
                    episodeSlug: episode.slug,
                    episodeTitle: episode.guest,
                    category: categoryMap[cat.label] || cat.label,
                    rawCategory: cat.label
                  });
                }
              });
            });
          }
        } catch (e) {
          console.error("Failed to parse actions for", episode.slug, e);
        }
      }
    });

    // Load product stack
    try {
      const stack = JSON.parse(localStorage.getItem("lenny_product_stack") || "[]");
      setProductStack(stack);
    } catch (e) {
      console.error("Failed to parse product stack", e);
    }

    // Load saved builders
    try {
        const builders = JSON.parse(localStorage.getItem("lenny_saved_builders") || "[]");
        setSavedBuilders(builders);
    } catch (e) {
        console.error("Failed to parse saved builders", e);
    }

    setCompletedActions(loadedActions);
    setIsLoading(false);

    // Event listener for syncing changes across tabs/windows or components
    const handleStorageUpdate = (e: any) => {
        // Reload builders
        try {
             const builders = JSON.parse(localStorage.getItem("lenny_saved_builders") || "[]");
             setSavedBuilders(builders);
        } catch (err) {
            console.error(err);
        }

        // Reload actions
        // (For actions, it's more complex as we need to iterate episodes, but the main goal here is builders)
        // Ideally we refactor state loading into a reusable function
    };

    window.addEventListener("checklist-updated", handleStorageUpdate);
    return () => window.removeEventListener("checklist-updated", handleStorageUpdate);
  }, [episodes]);

  const removeAction = (episodeSlug: string, actionId: string) => {
      try {
        const storageKey = `lenny_actions_${episodeSlug}`;
        const saved = localStorage.getItem(storageKey);
        if (saved) {
            const state = JSON.parse(saved);
            state[actionId] = false; // Mark as unchecked
            localStorage.setItem(storageKey, JSON.stringify(state));
            
            // Update local state
            setCompletedActions(prev => prev.filter(a => !(a.episodeSlug === episodeSlug && a.id === actionId)));
            window.dispatchEvent(new CustomEvent("checklist-updated"));
        }
      } catch (e) {
        console.error("Failed to remove action", e);
      }
  };

  const removeFromStack = (name: string) => {
    try {
      const stack = JSON.parse(localStorage.getItem("lenny_product_stack") || "[]");
      const newStack = stack.filter((p: any) => p.name !== name);
      localStorage.setItem("lenny_product_stack", JSON.stringify(newStack));
      setProductStack(newStack);
      window.dispatchEvent(new CustomEvent("checklist-updated"));
    } catch (e) {
      console.error("Failed to remove from stack", e);
    }
  };

  // 生成 Builders 的 Markdown
  const generateBuildersMarkdown = () => {
    let md = `## Builders\n`;
    savedBuilders.forEach(builder => {
      const normalizeSlug = (s: string) => s.replace(/\/$/, "").toLowerCase();
      const fullEpisode = episodes.find(e => normalizeSlug(e.slug) === normalizeSlug(builder.slug));
      const guest = builder.guest || fullEpisode?.guest;
      const intro = fullEpisode?.guestIntro || builder.title || "";
      md += `- **${guest}**：${intro}\n`;
      if (fullEpisode?.twitterUrl) md += `  - [X (Twitter)](${fullEpisode.twitterUrl})\n`;
      if (fullEpisode?.linkedinUrl) md += `  - [LinkedIn](${fullEpisode.linkedinUrl})\n`;
    });
    return md.trim() + "\n";
  };

  // 生成 Tools 的 Markdown
  const generateToolsMarkdown = () => {
    let md = `## My Stack\n`;
    const categories = [...new Set(productStack.map(p => p.category || "Tool"))];
    categories.forEach(cat => {
      const items = productStack.filter(p => (p.category || "Tool") === cat);
      if (items.length > 0) {
        md += `### ${cat.toLowerCase()}\n`;
        items.forEach(item => {
          md += `- [${item.name}](${item.link}): ${item.description}\n`;
        });
        md += `\n`;
      }
    });
    return md.trim() + "\n";
  };

  // 生成 Actions 的 Markdown
  const generateActionsMarkdown = () => {
    let md = `## Actions\n`;
    const categories = ["今天", "本周", "深入"];
    const categoryMap: Record<string, string> = { "今天": "Do It Today (立即执行)", "本周": "This Week (本周尝试)", "深入": "Deep Dive (深度思考)" };
    categories.forEach(cat => {
      const actions = completedActions.filter(a => a.rawCategory === cat);
      if (actions.length > 0) {
        md += `### ${categoryMap[cat] || cat}\n`;
        actions.forEach(action => {
          md += `- [x] ${action.text} (From: ${action.episodeTitle})\n`;
        });
        md += `\n`;
      }
    });
    return md.trim() + "\n";
  };

  // 复制指定分栏的 Markdown
  const copyTabMarkdown = (tab: 'all' | 'builders' | 'tools' | 'actions') => {
    let md = '';
    switch (tab) {
      case 'all':
        md = `# My Lenny's Podcast Collection\n\n`;
        if (savedBuilders.length > 0) md += generateBuildersMarkdown() + "\n";
        if (productStack.length > 0) md += generateToolsMarkdown() + "\n";
        if (completedActions.length > 0) md += generateActionsMarkdown();
        break;
      case 'builders':
        md = generateBuildersMarkdown();
        break;
      case 'tools':
        md = generateToolsMarkdown();
        break;
      case 'actions':
        md = generateActionsMarkdown();
        break;
    }
    navigator.clipboard.writeText(md.trim() + "\n").then(() => {
      setCopiedTab(tab);
      setTimeout(() => setCopiedTab(null), 2000);
    });
  };

  // 获取复制按钮的文本
  const getCopyButtonText = (tab: 'all' | 'builders' | 'tools' | 'actions', isCopied: boolean) => {
    if (!isCopied) return 'Copy as Markdown';
    switch (tab) {
      case 'all': return 'Copied All!';
      case 'builders': return 'Copied Builders!';
      case 'tools': return 'Copied Tools!';
      case 'actions': return 'Copied Actions!';
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center py-12">
        <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (completedActions.length === 0 && productStack.length === 0 && savedBuilders.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-4 text-center space-y-4 border-2 border-dashed rounded-2xl bg-muted/5">
        <div className="p-4 bg-muted rounded-full">
            <LayoutDashboard className="w-8 h-8 text-muted-foreground" />
        </div>
        <div className="space-y-2 max-w-sm">
            <h3 className="text-xl font-bold">Your Saved Collection is Empty</h3>
            <p className="text-muted-foreground">
            Start building your knowledge base by saving actions, tools, and profiles from episodes.
            </p>
        </div>
        <div className="flex gap-3 pt-2">
           <Button asChild variant="default">
                <Link href="/">Browse Episodes</Link>
           </Button>
           <Button asChild variant="outline">
                <Link href="/products">Explore Tools</Link>
           </Button>
        </div>
      </div>
    );
  }

  const groupedActions = {
    today: completedActions.filter(a => a.rawCategory === "今天"),
    week: completedActions.filter(a => a.rawCategory === "本周"),
    deep: completedActions.filter(a => a.rawCategory === "深入"),
  };

  return (
    <div className="space-y-6 pb-12 w-full">
        {/* Header with Title and Copy Button */}
        <div className="space-y-2">
            <div className="flex items-center justify-between">
                <h1 className="text-4xl font-black tracking-tight">Saved</h1>
                <Button 
                    onClick={() => copyTabMarkdown(activeTab as 'all' | 'builders' | 'tools' | 'actions')} 
                    variant="outline" 
                    size="sm"
                    className={cn(
                        "gap-2 transition-all duration-300",
                        copiedTab ? "border-green-500 text-green-600 bg-green-50" : ""
                    )}
                >
                    {copiedTab ? (
                        <><CheckIcon className="w-4 h-4" /> {getCopyButtonText(copiedTab as 'all' | 'builders' | 'tools' | 'actions', true)}</>
                    ) : (
                        <><Copy className="w-4 h-4" /> Copy as Markdown</>
                    )}
                </Button>
            </div>
            <p className="text-muted-foreground text-lg">
                Track your progress, manage your tools stack, and review actionable insights from the podcast.
            </p>
        </div>

        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="w-full justify-start h-12 p-1 bg-muted/50 rounded-xl mb-6 overflow-x-auto">
                <TabsTrigger value="all" className="rounded-lg px-4 gap-2 data-[state=active]:bg-background data-[state=active]:shadow-sm">
                    <LayoutDashboard className="w-4 h-4" /> All Items
                </TabsTrigger>
                <TabsTrigger value="builders" className="rounded-lg px-4 gap-2 data-[state=active]:bg-background data-[state=active]:shadow-sm">
                    <Users className="w-4 h-4" /> Builders
                    <Badge variant="secondary" className="ml-1 h-5 px-1.5 min-w-[1.25rem]">{savedBuilders.length}</Badge>
                </TabsTrigger>
                <TabsTrigger value="tools" className="rounded-lg px-4 gap-2 data-[state=active]:bg-background data-[state=active]:shadow-sm">
                    <Wrench className="w-4 h-4" /> Tools
                    <Badge variant="secondary" className="ml-1 h-5 px-1.5 min-w-[1.25rem]">{productStack.length}</Badge>
                </TabsTrigger>
                <TabsTrigger value="actions" className="rounded-lg px-4 gap-2 data-[state=active]:bg-background data-[state=active]:shadow-sm">
                    <CheckSquare className="w-4 h-4" /> Actions
                    <Badge variant="secondary" className="ml-1 h-5 px-1.5 min-w-[1.25rem]">{completedActions.length}</Badge>
                </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-8 animate-in fade-in-50 slide-in-from-bottom-2 duration-300">
                 {/* Recent Builders */}
                 {savedBuilders.length > 0 && (
                    <section className="space-y-4">
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-semibold flex items-center gap-2">
                                <Users className="w-4 h-4 text-primary" /> Saved Builders
                            </h2>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {savedBuilders.slice(0, 3).map(builder => {
                                // Normalize slugs for comparison
                                const normalizeSlug = (s: string) => s.replace(/\/$/, "").toLowerCase();
                                const fullEpisode = episodes.find(e => normalizeSlug(e.slug) === normalizeSlug(builder.slug));
                                const mergedBuilder = fullEpisode ? { ...builder, ...fullEpisode } : builder;

                                return (
                                    <div key={builder.slug} className="h-full">
                                        <BuilderCard episode={mergedBuilder} />
                                    </div>
                                );
                            })}
                        </div>
                    </section>
                )}

                {/* Recent Tools */}
                {productStack.length > 0 && (
                    <section className="space-y-4">
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-semibold flex items-center gap-2">
                                <Wrench className="w-4 h-4 text-primary" /> My Stack
                            </h2>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {productStack.slice(0, 3).map(product => (
                                <ToolCard key={product.name} product={product} onRemove={removeFromStack} />
                            ))}
                        </div>
                    </section>
                )}

                {/* Recent Actions */}
                {completedActions.length > 0 && (
                    <section className="space-y-4">
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-semibold flex items-center gap-2">
                                <Rocket className="w-4 h-4 text-primary" /> Recent Actions
                            </h2>
                            <Button variant="ghost" size="sm" className="text-xs text-muted-foreground" onClick={() => (document.querySelector('[data-value="actions"]') as HTMLButtonElement)?.click()}>
                                View All
                            </Button>
                        </div>
                        <div className="grid gap-3">
                            {completedActions.slice(0, 3).map(action => (
                                <ActionCard key={`${action.episodeSlug}-${action.id}`} action={action} onRemove={removeAction} />
                            ))}
                        </div>
                    </section>
                )}
            </TabsContent>

            <TabsContent value="actions" className="space-y-8 animate-in fade-in-50 slide-in-from-bottom-2 duration-300">
                {groupedActions.today.length > 0 && (
                    <div className="space-y-3">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                            <Rocket className="w-4 h-4" /> Do It Today
                        </h3>
                        <div className="grid gap-3">
                            {groupedActions.today.map(action => (
                                <ActionCard key={`${action.episodeSlug}-${action.id}`} action={action} onRemove={removeAction} />
                            ))}
                        </div>
                    </div>
                )}
                {groupedActions.week.length > 0 && (
                    <div className="space-y-3">
                         <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                            <Calendar className="w-4 h-4" /> This Week
                        </h3>
                        <div className="grid gap-3">
                            {groupedActions.week.map(action => (
                                <ActionCard key={`${action.episodeSlug}-${action.id}`} action={action} onRemove={removeAction} />
                            ))}
                        </div>
                    </div>
                )}
                {groupedActions.deep.length > 0 && (
                    <div className="space-y-3">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                            <Search className="w-4 h-4" /> Deep Dive
                        </h3>
                        <div className="grid gap-3">
                            {groupedActions.deep.map(action => (
                                <ActionCard key={`${action.episodeSlug}-${action.id}`} action={action} onRemove={removeAction} />
                            ))}
                        </div>
                    </div>
                )}
                 {completedActions.length === 0 && <EmptyState tab="Actions" />}
            </TabsContent>

            <TabsContent value="tools" className="space-y-6 animate-in fade-in-50 slide-in-from-bottom-2 duration-300">
                {productStack.length > 0 ? (
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {productStack.map(product => (
                            <ToolCard key={product.name} product={product} onRemove={removeFromStack} />
                        ))}
                    </div>
                ) : <EmptyState tab="Tools" />}
            </TabsContent>

            <TabsContent value="builders" className="space-y-6 animate-in fade-in-50 slide-in-from-bottom-2 duration-300">
                {savedBuilders.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {savedBuilders.map(builder => {
                            // Normalize slugs for comparison (handle potential trailing slashes and case)
                            const normalizeSlug = (s: string) => s.replace(/\/$/, "").toLowerCase();
                            const fullEpisode = episodes.find(e => normalizeSlug(e.slug) === normalizeSlug(builder.slug));
                            const mergedBuilder = fullEpisode ? { ...builder, ...fullEpisode } : builder;
                            
                            return (
                                <div key={builder.slug} className="h-full">
                                    <BuilderCard episode={mergedBuilder} />
                                </div>
                            );
                        })}
                    </div>
                ) : <EmptyState tab="Builders" />}
            </TabsContent>
        </Tabs>
    </div>
  );
}

// Sub-components

function ActionCard({ action, onRemove }: { action: CompletedAction, onRemove: (slug: string, id: string) => void }) {
    return (
        <div className="group bg-card hover:bg-muted/30 border rounded-xl p-4 flex items-start gap-4 transition-colors relative">
             <div className="mt-1 w-5 h-5 rounded-full bg-green-600 border-green-600 text-white flex items-center justify-center shrink-0 border shadow-sm">
                <Check className="w-3 h-3" strokeWidth={3} />
            </div>
            <div className="flex-1 min-w-0">
                <div className="text-sm leading-relaxed text-foreground/90 font-medium">
                     <ReactMarkdown 
                        components={{
                                p: ({children}) => <p className="m-0 inline">{children}</p>,
                                a: ({node, ...props}) => <a className="text-primary hover:underline" target="_blank" {...props} />
                        }}
                    >
                        {action.text}
                    </ReactMarkdown>
                </div>
                <div className="flex items-center gap-2 mt-2">
                     <Badge variant="outline" className="text-[10px] h-5 px-1.5 text-muted-foreground font-normal border-muted-foreground/20">
                        {action.category}
                     </Badge>
                     <Link href={`/episode/${action.episodeSlug}`} className="text-xs text-muted-foreground hover:text-primary flex items-center gap-1 transition-colors truncate">
                        <span className="truncate">From: {action.episodeTitle}</span>
                        <ArrowRight className="w-3 h-3 shrink-0" />
                    </Link>
                </div>
            </div>
            <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 text-muted-foreground hover:text-destructive hover:bg-destructive/10 opacity-60 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100 transition-all absolute top-2 right-2"
                onClick={() => onRemove(action.episodeSlug, action.id)}
            >
                <Trash2 className="w-4 h-4" />
            </Button>
        </div>
    );
}

function ToolCard({ product, onRemove }: { product: any, onRemove: (name: string) => void }) {
    return (
        <div className="group bg-card border hover:border-primary/50 rounded-2xl p-6 flex flex-col gap-6 shadow-sm hover:shadow-md transition-all h-full relative">
            <div className="flex items-start justify-between">
                <Badge variant="outline" className="rounded-full px-3 py-0.5 text-[10px] uppercase font-medium tracking-wider bg-background">
                    {product.category || "TOOL"}
                </Badge>
                <div className="flex items-center gap-1">
                    <SaveToolButton 
                        product={product} 
                        className="h-8 w-8 rounded-full"
                    />
                </div>
            </div>
            <div>
                <h3 className="font-bold text-2xl mb-3 tracking-tight flex items-center gap-2">
                    {product.link ? (
                        <a 
                            href={product.link} 
                            target={getLinkTarget(product.link)} 
                            rel={getLinkTarget(product.link) === "_blank" ? "noopener noreferrer" : undefined}
                            className="group/link hover:text-primary transition-colors flex items-center gap-2"
                        >
                            <span className="group-hover/link:underline decoration-2 decoration-primary/30 underline-offset-4">{product.name}</span>
                            <ExternalLink className="w-5 h-5 opacity-0 -translate-x-2 group-hover/link:translate-x-0 group-hover/link:opacity-50 transition-all duration-300" />
                        </a>
                    ) : (
                        product.name
                    )}
                </h3>
                <p className="text-sm text-muted-foreground leading-7">
                    {product.description}
                </p>
            </div>
        </div>
    );
}

function EmptyState({ tab }: { tab: string }) {
    return (
        <div className="flex flex-col items-center justify-center py-12 text-center border-2 border-dashed rounded-xl bg-muted/5">
            <div className="p-3 bg-muted rounded-full mb-3">
                <Search className="w-6 h-6 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-medium">No {tab} Saved Yet</h3>
             <p className="text-sm text-muted-foreground mt-1 max-w-xs mx-auto">
                Explore episodes to find actions, tools, and builders to add to your personal stack.
            </p>
             <Button asChild variant="outline" size="sm" className="mt-4">
                <Link href="/">Browse Content</Link>
           </Button>
        </div>
    );
}
