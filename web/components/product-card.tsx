"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Tag, Plus, Check } from "lucide-react";
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

  useEffect(() => {
    const stack = JSON.parse(localStorage.getItem("lenny_product_stack") || "[]");
    setIsInStack(stack.some((p: any) => p.name === product.name));
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
    }
    localStorage.setItem("lenny_product_stack", JSON.stringify(newStack));
    setIsInStack(!isInStack);
    
    // Trigger count update in sidebar
    window.dispatchEvent(new CustomEvent("checklist-updated"));
  };

  return (
    <Card className="flex flex-col h-full transition-all hover:shadow-lg hover:-translate-y-1 hover:border-primary/50 group relative">
      <CardHeader className="flex-none space-y-3">
        <div className="flex items-start justify-between gap-2">
          <Badge variant="outline" className="font-mono text-[10px] py-0 px-1.5 h-5">
            {product.category}
          </Badge>
          
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "h-7 w-7 rounded-full transition-all opacity-0 group-hover:opacity-100",
              isInStack ? "text-primary bg-primary/10 opacity-100" : "text-muted-foreground hover:text-primary hover:bg-muted"
            )}
            onClick={(e) => {
              e.preventDefault();
              toggleStack();
            }}
            title={isInStack ? "Remove from my stack" : "Add to my tool stack"}
          >
            {isInStack ? <Check className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
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
          {product.description || "No description provided."}
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
                <Link 
                  key={ep.episodeSlug} 
                  href={`/episode/${ep.episodeSlug}`}
                  className="transition-transform hover:scale-105 active:scale-95"
                >
                  <Badge variant="secondary" className="px-2 py-0.5 text-[11px] font-medium cursor-pointer bg-muted hover:bg-primary hover:text-primary-foreground transition-colors border-none">
                    {ep.episodeTitle}
                  </Badge>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
