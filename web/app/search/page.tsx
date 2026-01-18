import { getAllEpisodes } from "@/lib/data";
import { SearchList } from "@/components/search-list";
import { Suspense } from "react";

export const dynamic = 'force-dynamic'; // Ensure we don't statically optimize this too hard if we added more dynamic aspects

export default function SearchPage() {
  const episodes = getAllEpisodes();

  return (
    <div className="flex flex-col gap-6 w-full max-w-5xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Search Archive</h1>
        <p className="text-muted-foreground">
            Search across {episodes.length} episodes, transcripts, and analysis.
        </p>
      </div>

      <Suspense fallback={<div>Loading search results...</div>}>
        <SearchList episodes={episodes} />
      </Suspense>
    </div>
  );
}
