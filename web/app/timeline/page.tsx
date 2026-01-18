import { getAllEpisodes, Episode } from "@/lib/data";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Star, CalendarDays, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function TimelinePage() {
  const episodes = getAllEpisodes().sort((a, b) => {
    // Newest first
    return new Date(b.date || "").getTime() - new Date(a.date || "").getTime();
  });

  return (
    <div className="container py-8 max-w-4xl mx-auto">
      <div className="flex flex-col space-y-2 mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Timeline</h1>
        <p className="text-muted-foreground">
            Episodes ordered chronologically. High-rated content (9.5+) is highlighted.
        </p>
      </div>

      <div className="relative border-l border-muted ml-4 md:ml-32 space-y-12 pb-12">
        {episodes.map((episode, index) => {
          const score = parseFloat(episode.score?.overall || "0");
          const isHighRated = score >= 9.5;

          return (
            <div key={episode.slug} className="relative pl-8 md:pl-12">
              {/* Timeline Dot */}
              <div 
                className={cn(
                    "absolute -left-[5px] top-6 w-2.5 h-2.5 rounded-full border bg-background",
                    isHighRated 
                        ? "border-amber-400 bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.6)]" 
                        : "border-muted-foreground/30"
                )} 
              />
              
              {/* Date Label */}
              <div className="absolute -left-[5.5rem] md:-left-32 top-5 text-sm text-muted-foreground font-mono w-20 md:w-28 text-right hidden md:block pr-4 whitespace-nowrap">
                 {episode.date || "Unknown"}
              </div>

              {/* Card */}
              <Link href={`/episode/${episode.slug}`} className="block group">
                <Card 
                    className={cn(
                        "transition-all duration-300 relative overflow-hidden",
                        isHighRated 
                            ? "border-amber-400/50 dark:border-amber-500/30 bg-gradient-to-br from-amber-50/50 to-background dark:from-amber-950/10 dark:to-background shadow-md hover:shadow-lg hover:border-amber-400/80" 
                            : "hover:border-primary/50 hover:shadow-sm"
                    )}
                >
                    {isHighRated && (
                        <div className="absolute top-0 right-0 px-3 py-1 bg-amber-400 text-amber-950 text-[10px] font-bold uppercase tracking-wider rounded-bl-lg shadow-sm flex items-center gap-1">
                            <Star className="w-3 h-3 fill-current" />
                            Top Rated
                        </div>
                    )}

                    <CardHeader>
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-2 text-xs text-muted-foreground md:hidden mb-1">
                                <CalendarDays className="w-3 h-3" />
                                {episode.date}
                            </div>
                            <CardTitle className={cn("text-xl", isHighRated && "text-amber-900 dark:text-amber-100")}>
                                {episode.guest}
                            </CardTitle>
                            <CardDescription className="line-clamp-1">
                                {episode.title}
                            </CardDescription>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                            {episode.summary}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                             {episode.topics.slice(0, 3).map(t => (
                                 <Badge key={t} variant="secondary" className="text-[10px] px-1.5 py-0 h-5">
                                     {t}
                                 </Badge>
                             ))}
                             {episode.score?.overall && (
                                 <Badge variant="outline" className={cn("h-5 text-[10px] ml-auto", isHighRated && "border-amber-200 bg-amber-100 dark:bg-amber-950/30 text-amber-700 dark:text-amber-400")}>
                                     Score: {episode.score.overall}
                                 </Badge>
                             )}
                        </div>
                    </CardContent>
                </Card>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
