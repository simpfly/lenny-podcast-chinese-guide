"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, RefreshCw, ArrowRight, Check, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { cn } from "@/lib/utils";

export interface ActionContext {
  id: string; 
  originalId: string;
  text: string;
  category: string;
  episodeSlug: string;
  episodeTitle: string;
}

interface SurpriseMeProps {
  actions: ActionContext[];
}

export function SurpriseMe({ actions }: SurpriseMeProps) {
  const [currentAction, setCurrentAction] = useState<ActionContext | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  // Define category mapping for display
  const categoryMap: Record<string, string> = {
    "今天": "Do It Today",
    "本周": "This Week",
    "深入": "Deep Dive"
  };

  // Check completion status when action changes
  useEffect(() => {
    if (currentAction) {
        const storageKey = `lenny_actions_${currentAction.episodeSlug}`;
        const saved = localStorage.getItem(storageKey);
        if (saved) {
            try {
                const state = JSON.parse(saved);
                setIsCompleted(!!state[currentAction.originalId]);
            } catch (e) {
                setIsCompleted(false);
            }
        } else {
            setIsCompleted(false);
        }
    }
  }, [currentAction]);

  const toggleCompletion = () => {
    if (!currentAction) return;

    const newState = !isCompleted;
    setIsCompleted(newState);

    const storageKey = `lenny_actions_${currentAction.episodeSlug}`;
    try {
        const saved = localStorage.getItem(storageKey);
        let state: Record<string, boolean> = {};
        if (saved) {
            state = JSON.parse(saved);
        }
        state[currentAction.originalId] = newState;
        localStorage.setItem(storageKey, JSON.stringify(state));
        
        // Dispatch event to notify other components (like checklist-view)
        window.dispatchEvent(new CustomEvent("checklist-updated"));
    } catch (e) {
        console.error("Failed to save action state", e);
    }
  };

  const handleSurprise = () => {
    if (actions.length === 0) return;
    
    setIsAnimating(true);
    // Short delay for animation effect
    setTimeout(() => {
        let randomIndex = Math.floor(Math.random() * actions.length);
        // Avoid showing same action twice in a row if possible
        if (actions.length > 1 && currentAction && actions[randomIndex].id === currentAction.id) {
            randomIndex = (randomIndex + 1) % actions.length;
        }
        
        setCurrentAction(actions[randomIndex]);
        setIsAnimating(false);
    }, 200);
  };

  return (
    <div className={cn(
        "w-full h-[260px] border rounded-3xl p-5 flex flex-col items-center justify-center relative overflow-hidden shadow-sm hover:shadow-md transition-all duration-500",
        isCompleted 
            ? "bg-green-50/50 border-green-200" 
            : "bg-gradient-to-br from-primary/5 via-background to-primary/5 border-primary/10"
    )}>
       {/* Background decoration */}
       <div className="absolute top-0 right-0 p-4 opacity-[0.03] pointer-events-none">
          <Sparkles className="w-32 h-32" />
       </div>

       {/* Checkbox (Absolute, Top Right) */}
       {currentAction && (
           <Button
               variant="ghost"
               size="icon"
               className={cn(
                   "absolute top-5 right-5 z-20 rounded-full h-10 w-10 transition-all duration-300",
                   isCompleted 
                       ? "bg-green-500 text-white hover:bg-green-600 hover:text-white shadow-sm" 
                       : "bg-background/50 hover:bg-green-50 text-muted-foreground/70 hover:text-green-600 border border-transparent hover:border-green-200"
               )}
               onClick={toggleCompletion}
               title={isCompleted ? "Mark as incomplete" : "Mark as complete"}
           >
                {isCompleted ? <Check className="w-6 h-6" /> : <CheckCircle2 className="w-6 h-6" />}
           </Button>
       )}

       {!currentAction ? (
           <div className="flex flex-col items-center gap-4 z-10 text-center animate-in fade-in zoom-in-95 duration-500">
              <div className="p-4 bg-background rounded-full shadow-sm group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 border border-primary/10">
                  <Sparkles className="w-8 h-8 text-primary animate-pulse" />
              </div>
              <div className="space-y-1">
                  <h3 className="text-xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">Surprise Me</h3>
                  <p className="text-sm text-muted-foreground font-medium">Get a random actionable insight</p>
              </div>
              <Button 
                onClick={handleSurprise} 
                className="mt-2 rounded-full px-8 font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95"
                size="lg"
              >
                Click for Magic
              </Button>
           </div>
       ) : (
           <div className={cn("flex flex-col h-full w-full z-10 transition-all duration-300", isAnimating ? "opacity-0 scale-95 blur-sm" : "opacity-100 scale-100 blur-0")}>
               <div className="flex-1 flex flex-col justify-center"> 
                   <div className="mb-3 flex items-center h-8"> 
                       <Badge variant="secondary" className={cn(
                           "transition-colors",
                           isCompleted ? "bg-green-100 text-green-700 hover:bg-green-200" : "bg-primary/10 text-primary hover:bg-primary/20 border-primary/20"
                       )}>
                           {categoryMap[currentAction.category] || currentAction.category}
                           {isCompleted && <span className="ml-1 flex items-center gap-1">• Done</span>}
                       </Badge>
                   </div>
                   
                   <div className={cn(
                       "text-base md:text-lg font-medium leading-relaxed line-clamp-5 select-text mb-2 transition-colors",
                       isCompleted ? "text-muted-foreground line-through decoration-green-500/30" : "text-foreground/90"
                   )}>
                       <ReactMarkdown components={{
                           p: ({children}) => <span className="inline">{children}</span>,
                           a: ({node, ...props}) => <span className="text-primary font-semibold underline decoration-dotted hover:opacity-80 cursor-default">{props.children}</span>,
                           strong: ({children}) => <span className="text-primary font-bold">{children}</span>
                       }}>
                           {currentAction.text}
                       </ReactMarkdown>
                   </div>
               </div>
               
               <div className="mt-auto pt-4 border-t border-primary/10 flex items-center justify-between gap-4">
                    <Link href={`/episode/${currentAction.episodeSlug}`} className="text-xs font-bold text-muted-foreground/70 hover:text-primary grid gap-0.5 transition-colors max-w-[70%] group/link text-left">
                        <span className="truncate">FROM EPISODE</span>
                        <div className="flex items-center gap-1">
                            <span className="truncate text-foreground group-hover/link:text-primary transition-colors">{currentAction.episodeTitle}</span>
                            <ArrowRight className="w-3 h-3 shrink-0 -translate-x-1 opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                        </div>
                    </Link>
                    
                    <Button 
                        variant="ghost" 
                        size="sm" 
                        className="h-9 w-9 rounded-full hover:bg-primary/10 hover:text-primary transition-all active:rotate-180 duration-500"
                        onClick={handleSurprise}
                        title="Another One"
                    >
                        <RefreshCw className="w-5 h-5" />
                    </Button>
               </div>
           </div>
       )}
    </div>
  );
}
