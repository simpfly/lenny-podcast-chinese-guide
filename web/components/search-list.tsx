"use client";

import { useSearchParams } from "next/navigation";
import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Search as SearchIcon } from "lucide-react";
import { getSearchTerms } from "@/lib/topic-mapping";
import { TopicEpisodeList } from "@/components/topic-episode-list";
import { SearchEpisode } from "@/lib/data";

export function SearchList({ episodes }: { episodes: SearchEpisode[] }) {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);

  const filteredEpisodes = useMemo(() => {
    if (!query.trim()) return episodes;
    const lowerQuery = query.toLowerCase();
    const searchTerms = getSearchTerms(query); // Expand query to include synonyms for parsing
    
    return episodes.filter((ep) => {
        // 1. Text Search (Title, Guest, Summary, Intro)
        const textMatch = 
            ep.title.toLowerCase().includes(lowerQuery) ||
            ep.guest.toLowerCase().includes(lowerQuery) ||
            ep.summary.toLowerCase().includes(lowerQuery) ||
            (ep.guestIntro && ep.guestIntro.toLowerCase().includes(lowerQuery)) ||
            ep.searchText.includes(lowerQuery);

        // 2. Semantic Topic Search
        // Check if ANY of the expanded search terms match ANY of the episode topics
        const topicMatch = ep.topics.some(t => 
            searchTerms.some(term => t.toLowerCase().includes(term))
        );

        return textMatch || topicMatch;
    });
  }, [query, episodes]);

  return (
    <div className="flex flex-col gap-6">
      <div className="relative w-full max-w-lg">
        <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Filter episodes..."
          className="w-full bg-background pl-8 h-11"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoFocus
        />
      </div>

      {query.trim() && (
        <p className="text-muted-foreground">
            Found {filteredEpisodes.length} results for "{query}"
        </p>
      )}

      <TopicEpisodeList 
        episodes={filteredEpisodes} 
        initialViewMode={(searchParams.get("v") as any) || "keypoints"} 
      />
      
      {filteredEpisodes.length === 0 && (
          <div className="p-8 text-center text-muted-foreground border rounded-lg border-dashed">
              No episodes found matching your query.
          </div>
      )}
    </div>
  );
}
