"use client";

import { useEffect, useState } from "react";
import { Episode } from "@/lib/data";
import { ActionItem, parseActions } from "@/lib/action-parser";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowRight, Loader2, ExternalLink, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import ReactMarkdown from "react-markdown";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface ChecklistViewProps {
  episodes: Episode[];
}

interface CompletedAction {
  id: string;
  text: string;
  episodeSlug: string;
  episodeTitle: string;
  category: string; // "今天", "本周", "深入"
}

export function ChecklistView({ episodes }: ChecklistViewProps) {
  const [completedActions, setCompletedActions] = useState<CompletedAction[]>([]);
  const [productStack, setProductStack] = useState<any[]>([]);
  // Use `any` for simplicity for now, but ideally interface Builder { slug: string, guest: string, guestIntro?: string }
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
          // Only process if there are actually checked items
          const hasCheckedItems = Object.values(checkedState).some(v => v);
          
          if (hasCheckedItems) {
            const categories = parseActions(episode.actions);
            
            categories.forEach(cat => {
              cat.items.forEach(item => {
                if (checkedState[item.id]) {
                  loadedActions.push({
                    id: item.id,
                    text: item.text,
                    episodeSlug: episode.slug,
                    episodeTitle: episode.guest, // Using guest as main title usually, or title? Guest is shorter.
                    category: cat.label
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
      <div className="text-center py-12 border rounded-lg bg-muted/10 border-dashed">
        <h3 className="text-lg font-medium text-muted-foreground">No completed actions or tools yet</h3>
        <p className="text-sm text-muted-foreground mt-2">
          Visit episodes or the Product Wall to build your action plan and tool stack.
        </p>
        <div className="mt-6 flex justify-center gap-4">
           <Link href="/" className="text-primary hover:underline">Browse Episodes</Link>
           <span className="text-muted-foreground">|</span>
           <Link href="/products" className="text-primary hover:underline">Product Wall</Link>
        </div>
      </div>
    );
  }

  // Group by Category
  const grouped = {
    today: completedActions.filter(a => a.category === "今天"),
    week: completedActions.filter(a => a.category === "本周"),
    deep: completedActions.filter(a => a.category === "深入"),
  };

  const renderSection = (title: string, items: CompletedAction[], icon: string) => {
    if (items.length === 0) return null;
    return (
      <div className="space-y-4">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <span>{icon}</span> {title} 
          <span className="text-sm font-normal text-muted-foreground ml-2">({items.length})</span>
        </h2>
        <div className="grid gap-4">
          {items.map((action, idx) => (
             <div key={`${action.episodeSlug}-${action.id}`} className="bg-card border rounded-lg p-4 flex items-start gap-4 shadow-sm">
                <div className="mt-1 w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3" strokeWidth={3} />
                </div>
                <div className="flex-1 space-y-2">
                    <div className="text-sm leading-relaxed">
                        <ReactMarkdown 
                            components={{
                                 p: ({children}) => <p className="m-0 text-foreground/90">{children}</p>,
                                 a: ({node, ...props}) => <a className="text-primary hover:underline" target="_blank" {...props} />
                            }}
                        >
                            {action.text}
                        </ReactMarkdown>
                    </div>
                    
                    <div className="flex items-center gap-2 pt-1 border-t border-muted/50 mt-2">
                        <Link href={`/episode/${action.episodeSlug}`} className="text-xs text-muted-foreground hover:text-primary flex items-center gap-1 transition-colors">
                            <span className="font-medium">{action.episodeTitle}</span>
                            <ArrowRight className="w-3 h-3" />
                        </Link>
                    </div>
                </div>
             </div>
          ))}
        </div>
      </div>
    );
  }

  const totalCount = completedActions.length + productStack.length + savedBuilders.length;

  return (
    <div className="space-y-10 pb-12">
        <div className="grid gap-4 p-4 border rounded-xl bg-primary/5 text-primary-foregroundish mb-8">
             <div className="flex items-center justify-between">
                 <div className="font-medium text-foreground">Total Completed (Actions & Tools)</div>
                 <div className="text-2xl font-bold text-primary">{totalCount}</div>
             </div>
        </div>

        {renderSection("Do It Today", grouped.today, "🚀")}
        {renderSection("This Week", grouped.week, "📅")}
        {renderSection("Deep Dive", grouped.deep, "🔍")}

        {productStack.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <span>🛠️</span> My Product Stack
              <span className="text-sm font-normal text-muted-foreground ml-2">({productStack.length})</span>
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {productStack.map((product) => (
                <div key={product.name} className="group bg-card border rounded-lg p-4 flex flex-col gap-2 shadow-sm relative">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-[10px] uppercase">{product.category}</Badge>
                    <div className="flex items-center gap-2">
                      {product.link && (
                        <a href={product.link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-6 w-6 text-muted-foreground hover:text-destructive opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => removeFromStack(product.name)}
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </Button>
                    </div>
                  </div>
                  <div className="font-bold">{product.name}</div>
                  <div className="text-xs text-muted-foreground line-clamp-2">
                    {product.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Saved Builders Section */}
        {savedBuilders.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <span>👷</span> Saved Builders
              <span className="text-sm font-normal text-muted-foreground ml-2">({savedBuilders.length})</span>
            </h2>
             <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {savedBuilders.map((builder) => (
                <Link key={builder.slug} href={`/episode/${builder.slug}`} className="group block h-full">
                    <Card className="h-full border hover:border-primary/50 transition-colors p-4 flex flex-col justify-between">
                        <div>
                             <div className="flex items-center justify-between mb-2">
                                <h3 className="font-bold group-hover:text-primary transition-colors">{builder.guest}</h3>
                                <Button 
                                    variant="ghost" 
                                    size="icon" 
                                    className="h-6 w-6 text-muted-foreground hover:text-destructive opacity-0 group-hover:opacity-100 transition-opacity -mr-2"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        removeFromBuilders(builder.slug);
                                    }}
                                >
                                    <Trash2 className="w-3.5 h-3.5" />
                                </Button>
                             </div>
                             {builder.guestIntro && (
                                <div className="text-xs text-muted-foreground line-clamp-2 mb-3">
                                    {builder.guestIntro}
                                </div>
                             )}
                        </div>
                         <div className="text-[10px] text-muted-foreground flex items-center gap-1 group-hover:text-primary transition-colors">
                            View Profile <ArrowRight className="w-3 h-3" />
                         </div>
                    </Card>
                </Link>
              ))}
            </div>
          </div>
        )}
    </div>
  );
}
