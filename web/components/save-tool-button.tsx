"use client";

import { useState, useEffect } from "react";
import { Plus, Check, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Product {
  name: string;
  category?: string;
  link?: string;
  description?: string;
}

interface SaveToolButtonProps {
  product: Product;
  className?: string;
}

export function SaveToolButton({ product, className = "" }: SaveToolButtonProps) {
  const [isInStack, setIsInStack] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  useEffect(() => {
    const stack = JSON.parse(localStorage.getItem("lenny_product_stack") || "[]");
    setIsInStack(stack.some((p: any) => p.name === product.name));
  }, [product.name]);

  const toggleStack = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const stack = JSON.parse(localStorage.getItem("lenny_product_stack") || "[]");
    let newStack;
    if (isInStack) {
      newStack = stack.filter((p: any) => p.name !== product.name);
    } else {
      newStack = [...stack, { 
        name: product.name, 
        category: product.category || "Tool", 
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
    <Button
      variant="ghost"
      size="icon"
      className={`h-6 w-6 transition-all 
          opacity-60 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100
          ${isInStack 
            ? "text-primary !opacity-100"
            : "text-muted-foreground hover:text-foreground hover:bg-transparent"
          } ${className}`}
      onClick={toggleStack}
      title={isInStack ? "Remove from my stack" : "Add to my tool stack"}
    >
      {isInStack ? (
        <Check className="h-4 w-4" />
      ) : (
        <Plus className="h-4 w-4" />
      )}
    </Button>
  );
}
