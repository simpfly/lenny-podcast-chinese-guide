import { getEpisodeContent, getEpisodeMetadata, getAllEpisodes } from "@/lib/data";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { EpisodeDetailView } from "@/components/episode-detail-view";
import { RandomEpisodeButton } from "@/components/random-episode-button";
import { SaveBuilderButton } from "@/components/save-builder-button";

import { Metadata } from "next";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const metadata = getEpisodeMetadata(slug);

  if (!metadata) {
    return {
      title: "Episode Not Found",
    };
  }
  
  const title = `${metadata.guest} on Lenny's Podcast`;
  const description = metadata.summary || `Deep dive analysis of the episode with ${metadata.guest}.`;

  return {
    title: `${title} - Analysis`,
    description: description.slice(0, 160),
    openGraph: {
      title: `${title} - Analysis`,
      description: description.slice(0, 200),
      type: "article",
      authors: ["Lenny Rachitsky", metadata.guest],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} - Analysis`,
      description: description.slice(0, 200),
    }
  };
}

export default async function EpisodePage({ params }: PageProps) {
  const { slug } = await params;
  const contentData = getEpisodeContent(slug);
  const metadata = getEpisodeMetadata(slug);

  if (!contentData || !metadata) {
    notFound();
  }

  const { content } = contentData;

  // Remove the first H1 from markdown content if it exists
  const contentWithoutTitle = content.replace(/^# .*?\n/, '');

  // Fetch all episodes for random navigation
  const allEpisodes = getAllEpisodes();
  const allSlugs = allEpisodes.map(ep => ep.slug);

  return (
    <div className="max-w-5xl mx-auto w-full px-2 sm:px-4">
      <div className="mb-6">
        <div className="flex items-center justify-between">
            <Button variant="ghost" className="pl-0 gap-2 hover:bg-transparent" asChild>
                <Link href="/">
                    <ArrowLeft className="h-4 w-4" />
                    Back to Archive
                </Link>
            </Button>
            <RandomEpisodeButton allSlugs={allSlugs} currentSlug={slug} />
        </div>
        
        <div className="mt-4 flex flex-col gap-2">
            <div className="flex items-center gap-4 group w-fit">
                <h1 className="text-3xl font-black tracking-tighter sm:text-5xl text-balance">
                    {metadata.guest}
                </h1>
                <SaveBuilderButton episode={metadata} />
            </div>
            <p className="text-muted-foreground text-sm flex items-center gap-2">
                <span>Detailed Analysis & Action Guide</span>
                {metadata.date && <span className="opacity-50">/</span>}
                {metadata.date && <span className="font-mono">{metadata.date}</span>}
            </p>
        </div>
      </div>

      <EpisodeDetailView episode={metadata} content={contentWithoutTitle} />
    </div>
  );
}
