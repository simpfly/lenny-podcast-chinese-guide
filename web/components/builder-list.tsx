"use client";

import { useState, useMemo } from "react";
import { Episode } from "@/lib/data";
import { BuilderCard } from "@/components/builder-card";
import { Input } from "@/components/ui/input";
import { Search as SearchIcon } from "lucide-react";

interface BuilderListProps {
  initialEpisodes: Episode[];
  title?: string;
  description?: string;
}

export function BuilderList({ initialEpisodes, title, description }: BuilderListProps) {
  const [query, setQuery] = useState("");

  const filteredEpisodes = useMemo(() => {
    if (!query.trim()) return initialEpisodes;
    const lowerQuery = query.toLowerCase();
    
    return initialEpisodes.filter((ep) => {
        return (
            ep.guest.toLowerCase().includes(lowerQuery) ||
            ep.title.toLowerCase().includes(lowerQuery) ||
            (ep.guestIntro && ep.guestIntro.toLowerCase().includes(lowerQuery)) ||
            ep.summary.toLowerCase().includes(lowerQuery)
        );
    });
  }, [query, initialEpisodes]);

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

      <div className="relative w-full max-w-lg">
        <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search builders by name, role, or company..."
          className="w-full bg-background pl-8 h-11"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {query.trim() && (
        <p className="text-muted-foreground">
            Found {filteredEpisodes.length} builders matching "{query}"
        </p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEpisodes.map((episode) => (
          <BuilderCard key={episode.slug} episode={episode} />
        ))}
      </div>

      {filteredEpisodes.length === 0 && (
          <div className="py-20 text-center border rounded-lg bg-muted/20 border-dashed">
              <p className="text-muted-foreground">No builders found matching your search.</p>
          </div>
      )}
    </div>
  );
}
