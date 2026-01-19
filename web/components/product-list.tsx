"use client";

import { useState, useMemo, useEffect } from "react";
import { Product } from "@/lib/data";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LayoutGrid, Wrench, Book, Search as SearchIcon } from "lucide-react";
import { useSearchParams } from "next/navigation";

interface ProductListProps {
  initialProducts: Product[];
  title?: string;
  description?: string;
}

export function ProductList({ initialProducts, title, description }: ProductListProps) {
  const searchParams = useSearchParams();
  const [filter, setFilter] = useState<string>("All");
  const [query, setQuery] = useState("");

  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (categoryParam && ["Tool", "Book"].includes(categoryParam)) {
        setFilter(categoryParam);
    }
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    return initialProducts.filter(p => {
      const categoryMatch = filter === "All" || p.category === filter;
      const searchMatch = query.trim() === "" || 
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase());
      return categoryMatch && searchMatch;
    });
  }, [initialProducts, filter, query]);

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
      {(title || description) && (
        <div className="flex flex-col gap-4">
          {title && (
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
              {title}
            </h1>
          )}
          {description && (
            <p className="text-muted-foreground text-lg max-w-2xl">
              {description}
            </p>
          )}
        </div>
      )}

      <div className="flex flex-col gap-4">
        <div className="relative w-full max-w-lg">
          <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search products, books, resources..."
            className="w-full bg-background pl-8 h-11"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className="flex flex-wrap gap-2 items-center bg-muted/40 p-1 rounded-xl w-fit border">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={filter === cat ? "default" : "ghost"}
              size="sm"
              onClick={() => setFilter(cat)}
              className="gap-2 rounded-lg h-8 px-3"
            >
              {getIcon(cat)}
              {getLabel(cat)}
              <span className="ml-1 text-[10px] opacity-60 font-mono">
                ({cat === "All" ? initialProducts.length : initialProducts.filter(p => p.category === cat).length})
              </span>
            </Button>
          ))}
        </div>
      </div>

      {query.trim() && (
        <p className="text-muted-foreground">
            Found {filteredProducts.length} results for "{query}"
        </p>
      )}

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 animate-in fade-in duration-500">
        {filteredProducts.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="py-20 text-center border rounded-lg bg-muted/20">
          <p className="text-muted-foreground">No items found matching your filter or query.</p>
        </div>
      )}
    </div>
  );
}
