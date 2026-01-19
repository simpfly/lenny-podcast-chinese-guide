"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Tag, Plus, Check, Trash2 } from "lucide-react";
import Link from "next/link";
import { Product } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const mentionCount = product.mentionedIn.length;
  const [isInStack, setIsInStack] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  const checkIsInStack = () => {
    const stack = JSON.parse(localStorage.getItem("lenny_product_stack") || "[]");
    setIsInStack(stack.some((p: any) => p.name === product.name));
  };

  useEffect(() => {
    checkIsInStack();
    
    const handleUpdate = () => checkIsInStack();
    window.addEventListener("checklist-updated", handleUpdate);
    return () => window.removeEventListener("checklist-updated", handleUpdate);
  }, [product.name]);

  const toggleStack = () => {
    const stack = JSON.parse(localStorage.getItem("lenny_product_stack") || "[]");
    let newStack;
    if (isInStack) {
      newStack = stack.filter((p: any) => p.name !== product.name);
    } else {
      newStack = [...stack, { 
        name: product.name, 
        category: product.category, 
        link: product.link,
        description: product.description 
      }];
      setJustAdded(true);
    }
    localStorage.setItem("lenny_product_stack", JSON.stringify(newStack));
    setIsInStack(!isInStack);
    
    // Trigger count update in sidebar
    window.dispatchEvent(new CustomEvent("checklist-updated"));
  };

  return (
    <Card className={cn(
      "flex flex-col h-full transition-all hover:shadow-lg hover:-translate-y-1 group relative overflow-hidden",
      isInStack 
        ? "border-primary/50 shadow-md ring-1 ring-primary/20 bg-primary/[0.02]" 
        : "hover:border-primary/50"
    )}>
      <CardHeader className="flex-none space-y-3">
        <div className="flex items-start justify-between gap-2">
          <Badge variant="outline" className={cn(
            "font-mono text-[10px] py-0 px-1.5 h-5",
            isInStack ? "border-primary/30 text-primary bg-primary/5" : ""
          )}>
            {product.category}
          </Badge>
          
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "h-7 w-7 rounded-full transition-all",
              // 触屏设备始终可见，桌面端 hover 显示
              "opacity-60 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100",
              isInStack 
                ? "text-primary !opacity-100"
                : "text-muted-foreground hover:text-primary"
            )}
            onClick={(e) => {
              e.preventDefault();
              toggleStack();
            }}
            title={isInStack ? "Remove from my stack" : "Add to my tool stack"}
          >
            {isInStack ? (
              <Check className="h-4 w-4" />
            ) : (
              <Plus className="h-4 w-4" />
            )}
          </Button>
        </div>
        <CardTitle className="text-xl font-bold line-clamp-1 transition-colors">
          {product.link ? (
            <a 
              href={product.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-primary hover:underline underline-offset-4 decoration-primary/30 inline-flex items-center gap-1.5"
            >
              {product.name}
              <ExternalLink className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ) : (
            product.name
          )}
        </CardTitle>
        <CardDescription className="line-clamp-2 min-h-[40px] text-sm leading-relaxed">
          {product.description ? (
            <span dangerouslySetInnerHTML={{ 
              __html: product.description.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') 
            }} />
          ) : "No description provided."}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pt-0">
        <div className="flex flex-col gap-3">
          <div className="space-y-2">
            <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/70">
              <Tag className="h-3 w-3" />
              <span>{mentionCount} Mention{mentionCount > 1 ? 's' : ''} In</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {product.mentionedIn.map((ep) => (
                <MentionedEpisodeBadge key={ep.episodeSlug} episode={ep} />
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function MentionedEpisodeBadge({ episode }: { episode: any }) {
  const [isEpisodeSaved, setIsEpisodeSaved] = useState(false);
  
  const checkSaved = () => {
    const storageKey = `lenny_actions_${episode.episodeSlug}`;
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      try {
        const state = JSON.parse(saved);
        setIsEpisodeSaved(Object.values(state).some(v => v === true));
      } catch (e) {
        console.error("Error parsing episode state", e);
      }
    } else {
      setIsEpisodeSaved(false);
    }
  };

  useEffect(() => {
    checkSaved();
    
    // Listen for global checklist updates
    const handleUpdate = () => checkSaved();
    window.addEventListener("checklist-updated", handleUpdate);
    return () => window.removeEventListener("checklist-updated", handleUpdate);
  }, [episode.episodeSlug]);

  return (
    <Link 
      href={`/episode/${episode.episodeSlug}`}
      className="transition-transform hover:scale-105 active:scale-95"
    >
      <Badge 
        variant={isEpisodeSaved ? "default" : "secondary"} 
        className={cn(
          "px-2 py-0.5 text-[11px] font-medium cursor-pointer transition-colors border-none",
          isEpisodeSaved 
            ? "bg-primary text-primary-foreground shadow-sm ring-1 ring-primary/20" 
            : "bg-muted hover:bg-primary hover:text-primary-foreground"
        )}
      >
        {episode.episodeTitle}
      </Badge>
    </Link>
  );
}
