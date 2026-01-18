"use client";

import { useEffect, useState } from "react";
import { Episode } from "@/lib/data";
import { ActionItem, parseActions } from "@/lib/action-parser";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowRight, Loader2 } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { cn } from "@/lib/utils";

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

    setCompletedActions(loadedActions);
    setIsLoading(false);
  }, [episodes]);

  if (isLoading) {
    return (
      <div className="flex justify-center py-12">
        <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (completedActions.length === 0) {
    return (
      <div className="text-center py-12 border rounded-lg bg-muted/10 border-dashed">
        <h3 className="text-lg font-medium text-muted-foreground">No completed actions yet</h3>
        <p className="text-sm text-muted-foreground mt-2">
          Visit episodes and mark actions as done to see them here.
        </p>
        <div className="mt-6">
           <Link href="/" className="text-primary hover:underline">Browse Episodes</Link>
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

  return (
    <div className="space-y-10 pb-12">
        <div className="grid gap-4 p-4 border rounded-xl bg-primary/5 text-primary-foregroundish mb-8">
             <div className="flex items-center justify-between">
                 <div className="font-medium text-foreground">Total Completed</div>
                 <div className="text-2xl font-bold text-primary">{completedActions.length}</div>
             </div>
        </div>

        {renderSection("Do It Today", grouped.today, "🚀")}
        {renderSection("This Week", grouped.week, "📅")}
        {renderSection("Deep Dive", grouped.deep, "🔍")}
    </div>
  );
}
