"use client";

import { useEffect, useState } from "react";
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
  Plus
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ReactMarkdown from "react-markdown";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

  const removeFromBuilders = (slug: string) => {
    try {
        const builders = JSON.parse(localStorage.getItem("lenny_saved_builders") || "[]");
        const newBuilders = builders.filter((b: any) => b.slug !== slug);
        localStorage.setItem("lenny_saved_builders", JSON.stringify(newBuilders));
        setSavedBuilders(newBuilders);
        window.dispatchEvent(new CustomEvent("checklist-updated"));
    } catch (e) {
        console.error("Failed to remove from builders", e);
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
    <div className="space-y-8 pb-12 w-full max-w-6xl mx-auto">
        {/* Dashboard Header */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <StatsCard 
                icon={<CheckSquare className="w-5 h-5 text-blue-500" />}
                label="Action Items"
                value={completedActions.length}
                color="bg-blue-500/10 text-blue-600"
            />
            <StatsCard 
                icon={<Package className="w-5 h-5 text-purple-500" />}
                label="Tools Collected"
                value={productStack.length}
                color="bg-purple-500/10 text-purple-600"
            />
            <StatsCard 
                icon={<Users className="w-5 h-5 text-emerald-500" />}
                label="Builders Saved"
                value={savedBuilders.length}
                color="bg-emerald-500/10 text-emerald-600"
            />
        </div>

        <Tabs defaultValue="all" className="w-full">
            <TabsList className="w-full justify-start h-12 p-1 bg-muted/50 rounded-xl mb-6 overflow-x-auto">
                <TabsTrigger value="all" className="rounded-lg px-4 gap-2 data-[state=active]:bg-background data-[state=active]:shadow-sm">
                    <LayoutDashboard className="w-4 h-4" /> All Items
                </TabsTrigger>
                <TabsTrigger value="actions" className="rounded-lg px-4 gap-2 data-[state=active]:bg-background data-[state=active]:shadow-sm">
                    <CheckSquare className="w-4 h-4" /> Actions
                    <Badge variant="secondary" className="ml-1 h-5 px-1.5 min-w-[1.25rem]">{completedActions.length}</Badge>
                </TabsTrigger>
                <TabsTrigger value="tools" className="rounded-lg px-4 gap-2 data-[state=active]:bg-background data-[state=active]:shadow-sm">
                    <Wrench className="w-4 h-4" /> Tools
                    <Badge variant="secondary" className="ml-1 h-5 px-1.5 min-w-[1.25rem]">{productStack.length}</Badge>
                </TabsTrigger>
                <TabsTrigger value="builders" className="rounded-lg px-4 gap-2 data-[state=active]:bg-background data-[state=active]:shadow-sm">
                    <Users className="w-4 h-4" /> Builders
                    <Badge variant="secondary" className="ml-1 h-5 px-1.5 min-w-[1.25rem]">{savedBuilders.length}</Badge>
                </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-8 animate-in fade-in-50 slide-in-from-bottom-2 duration-300">
                {/* Recent Actions */}
                {completedActions.length > 0 && (
                    <section className="space-y-4">
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-semibold flex items-center gap-2">
                                <Rocket className="w-4 h-4 text-primary" /> Recent Actions
                            </h2>
                            <Button variant="ghost" size="sm" className="text-xs text-muted-foreground" onClick={() => document.getElementById('tab-trigger-actions')?.click()}>
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

                 {/* Recent Builders */}
                 {savedBuilders.length > 0 && (
                    <section className="space-y-4">
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-semibold flex items-center gap-2">
                                <Users className="w-4 h-4 text-primary" /> Saved Builders
                            </h2>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {savedBuilders.slice(0, 3).map(builder => (
                                <BuilderCard key={builder.slug} builder={builder} onRemove={removeFromBuilders} />
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

            <TabsContent value="tools" className="animate-in fade-in-50 slide-in-from-bottom-2 duration-300">
                {productStack.length > 0 ? (
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {productStack.map(product => (
                            <ToolCard key={product.name} product={product} onRemove={removeFromStack} />
                        ))}
                    </div>
                ) : <EmptyState tab="Tools" />}
            </TabsContent>

            <TabsContent value="builders" className="animate-in fade-in-50 slide-in-from-bottom-2 duration-300">
                {savedBuilders.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {savedBuilders.map(builder => {
                            const fullEpisode = episodes.find(e => e.slug === builder.slug);
                            const mergedBuilder = fullEpisode ? { ...builder, ...fullEpisode } : builder;
                            return (
                                <BuilderCard 
                                    key={builder.slug} 
                                    builder={mergedBuilder} 
                                    onRemove={removeFromBuilders} 
                                />
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

function StatsCard({ icon, label, value, color }: { icon: React.ReactNode, label: string, value: number, color: string }) {
    return (
        <div className="bg-card border rounded-xl p-4 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow">
            <div className={cn("p-3 rounded-xl flex items-center justify-center bg-muted", color)}>
                {icon}
            </div>
            <div>
                <div className="text-2xl font-bold leading-none mb-1">{value}</div>
                <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide">{label}</div>
            </div>
        </div>
    );
}

function ActionCard({ action, onRemove }: { action: CompletedAction, onRemove: (slug: string, id: string) => void }) {
    return (
        <div className="group bg-card hover:bg-muted/30 border rounded-xl p-4 flex items-start gap-4 transition-colors relative">
             <div className="mt-1 w-5 h-5 rounded-full bg-green-500/10 text-green-600 flex items-center justify-center shrink-0 border border-green-500/20">
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
                className="h-8 w-8 text-muted-foreground hover:text-destructive hover:bg-destructive/10 opacity-0 group-hover:opacity-100 transition-all absolute top-2 right-2"
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
                    <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-8 w-8 rounded-full bg-muted hover:bg-destructive/10 hover:text-destructive text-foreground transition-all group/action"
                        onClick={() => onRemove(product.name)}
                        title="Remove from stack"
                    >
                        <Check className="w-4 h-4 group-hover/action:hidden" />
                        <Trash2 className="w-4 h-4 hidden group-hover/action:block" />
                    </Button>
                </div>
            </div>
            <div>
                <h3 className="font-bold text-2xl mb-3 tracking-tight flex items-center gap-2">
                    {product.link ? (
                        <a 
                            href={product.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
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

function BuilderCard({ builder, onRemove }: { builder: any, onRemove: (slug: string) => void }) {
    return (
        <div className="group h-full relative">
            <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-primary/50 flex flex-col overflow-hidden bg-card/50 hover:bg-card relative">
                {/* Overlay Link for the entire card */}
                <Link 
                    href={`/episode/${builder.slug}`} 
                    className="absolute inset-0 z-0"
                    prefetch={false}
                >
                    <span className="sr-only">View {builder.guest}'s Episode</span>
                </Link>
                
                <CardHeader className="pb-4 relative z-10 pointer-events-none">
                    <div className="flex justify-between items-start gap-4">
                        <div className="flex-1">
                             <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-1">
                                {builder.guest}
                            </CardTitle>
                        </div>
                        <div className="flex gap-2 shrink-0 pointer-events-auto">
                            {builder.twitterUrl && (
                                <div 
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        window.open(builder.twitterUrl, '_blank');
                                    }}
                                    className="p-1.5 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                                    title="Open Twitter"
                                >
                                    <Twitter className="w-4 h-4" />
                                </div>
                            )}
                            {builder.linkedinUrl && (
                                <div 
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        window.open(builder.linkedinUrl, '_blank');
                                    }}
                                    className="p-1.5 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                                    title="Open LinkedIn"
                                >
                                    <Linkedin className="w-4 h-4" />
                                </div>
                            )}
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between relative z-10 pointer-events-none">
                    <div className="space-y-4">
                         {builder.guestIntro && (
                            <div className="text-sm text-muted-foreground line-clamp-3 leading-relaxed [&_strong]:font-bold [&_b]:font-bold pointer-events-auto">
                                <ReactMarkdown components={{
                                    p: ({children}) => <p className="mb-0 inline">{children}</p>,
                                    a: ({href, children}) => (
                                        <a 
                                            href={href} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="text-primary hover:underline relative z-20"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            {children}
                                        </a>
                                    )
                                }}>
                                    {builder.guestIntro}
                                </ReactMarkdown>
                            </div>
                         )}
                         {!builder.guestIntro && (
                            <div className="text-sm text-muted-foreground/50 italic pointer-events-auto">
                                No intro available.
                            </div>
                         )}
                    </div>
                    
                    <div className="mt-6 pt-4 border-t flex items-center justify-between pointer-events-auto">
                        {/* Left: View Episode Link */}
                        <Link 
                            href={`/episode/${builder.slug}`} 
                            className="group/link flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
                        >
                            View Episode <ExternalLink className="w-3 h-3 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                        </Link>
                        
                        {/* Right: Remove Button (Check style) */}
                        <Button 
                            variant="ghost" 
                            size="icon" 
                            className="h-8 w-8 text-muted-foreground hover:text-destructive hover:bg-destructive/10 opacity-0 group-hover:opacity-100 transition-all absolute top-2 right-2 z-10 group/action"
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                onRemove(builder.slug);
                            }}
                        >
                            <Check className="w-4 h-4 text-primary group-hover/action:hidden" />
                            <Trash2 className="w-4 h-4 hidden group-hover/action:block" />
                        </Button>
                    </div>
                </CardContent>
            </Card>
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
