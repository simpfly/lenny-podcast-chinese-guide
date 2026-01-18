"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useState, useMemo } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search as SearchIcon, ArrowRight } from "lucide-react";
import { getSearchTerms } from "@/lib/topic-mapping";

type EpisodeResult = {
  slug: string;
  title: string;
  guest: string;
  guestIntro?: string;

  summary: string;
  topics: string[];
  score?: {
      knowledge: string;
      actionable: string;
      business: string;
      roi: string;
      overall: string;
  };
};

export function SearchList({ episodes }: { episodes: EpisodeResult[] }) {
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
            (ep.guestIntro && ep.guestIntro.toLowerCase().includes(lowerQuery));

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
          className="w-full bg-background pl-8"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoFocus
        />
      </div>

      <p className="text-muted-foreground">
        Found {filteredEpisodes.length} results for "{query}"
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        {filteredEpisodes.map((episode) => (
          <Link key={episode.slug} href={`/episode/${episode.slug}`}>
            <Card className="h-full hover:bg-muted/50 transition-colors flex flex-col">
              <CardHeader>
                <CardTitle className="leading-normal text-lg">
                  {episode.title}
                </CardTitle>
                <CardDescription className="line-clamp-4 whitespace-pre-line text-xs">
                    {episode.guestIntro || episode.summary || `Episode with ${episode.guest}`}
                </CardDescription>

                <div className="flex flex-wrap gap-2 mt-2">
                    {episode.topics.slice(0, 3).map(t => (
                        <Badge key={t} variant="secondary" className="text-xs">{t}</Badge>
                    ))}
                </div>
              </CardHeader>
              {episode.score && (
                 <CardContent>
                    <div className="grid grid-cols-2 gap-y-1 gap-x-4 text-xs bg-muted/30 p-2 rounded-md">
                         <div className="flex justify-between">
                            <span className="text-muted-foreground">知识价值</span>
                            <span className="font-medium">{episode.score.knowledge}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-muted-foreground">可执行性</span>
                            <span className="font-medium">{episode.score.actionable}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-muted-foreground">商业潜力</span>
                            <span className="font-medium">{episode.score.business}</span>
                        </div>
                         <div className="flex justify-between">
                            <span className="text-muted-foreground">投入产出</span>
                            <span className="font-medium">{episode.score.roi}</span>
                        </div>
                         <div className="col-span-2 pt-1 mt-1 border-t flex justify-between">
                            <span className="font-semibold text-primary">综合评分</span>
                            <span className="font-bold text-primary">{episode.score.overall}</span>
                        </div>
                    </div>
                 </CardContent>
              )}
            </Card>
          </Link>
        ))}
        {filteredEpisodes.length === 0 && (
            <div className="p-8 text-center text-muted-foreground border rounded-lg border-dashed col-span-2">
                No episodes found matching your query.
            </div>
        )}
      </div>
    </div>
  );
}
