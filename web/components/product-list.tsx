"use client";

import { useState } from "react";
import { Product } from "@/lib/data";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { LayoutGrid, Wrench, Book } from "lucide-react";

interface ProductListProps {
  initialProducts: Product[];
}

export function ProductList({ initialProducts }: ProductListProps) {
  const [filter, setFilter] = useState<string>("All");

  const filteredProducts = filter === "All" 
    ? initialProducts 
    : initialProducts.filter(p => p.category === filter);

  const categories = ["All", "Tool", "Book"];

  const getIcon = (cat: string) => {
    switch (cat) {
      case "Tool": return <Wrench className="h-4 w-4" />;
      case "Book": return <Book className="h-4 w-4" />;
      default: return <LayoutGrid className="h-4 w-4" />;
    }
  };

  const getLabel = (cat: string) => {
    switch (cat) {
      case "Tool": return "Tools";
      case "Book": return "Books";
      default: return "All Categories";
    }
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-wrap gap-2 items-center bg-muted/50 p-1 rounded-xl w-fit border">
        {categories.map((cat) => (
          <Button
            key={cat}
            variant={filter === cat ? "default" : "ghost"}
            size="sm"
            onClick={() => setFilter(cat)}
            className="gap-2 rounded-lg"
          >
            {getIcon(cat)}
            {getLabel(cat)}
            <span className="ml-1 text-[10px] opacity-60 font-mono">
              ({cat === "All" ? initialProducts.length : initialProducts.filter(p => p.category === cat).length})
            </span>
          </Button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 animate-in fade-in duration-500">
        {filteredProducts.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="py-20 text-center border rounded-lg bg-muted/20">
          <p className="text-muted-foreground">No items found in this category.</p>
        </div>
      )}
    </div>
  );
}
