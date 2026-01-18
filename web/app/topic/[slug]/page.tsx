import { TopicEpisodeList } from "@/components/topic-episode-list";
import { getCategoryDetail, getEpisodeMetadata } from "@/lib/data";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function TopicPage({ params }: PageProps) {
  const { slug } = await params;
  const category = getCategoryDetail(slug);

  if (!category) {
    notFound();
  }

  // Fetch full metadata for each episode in the category
  const episodes = category.episodes
    .map((slug) => getEpisodeMetadata(slug))
    .filter((ep) => ep !== null);

  return (
    <div className="flex flex-col gap-6">
       <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">{category.title}</h1>
      </div>
      
      <p className="text-muted-foreground">
        Found {episodes.length} relevant episodes in this topic.
      </p>

      <TopicEpisodeList episodes={episodes as any[]} />
    </div>
  );
}
