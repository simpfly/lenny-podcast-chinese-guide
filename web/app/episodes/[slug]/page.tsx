import { getEpisodeContent, getEpisodeMetadata, getAllEpisodes } from "@/lib/data";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { EpisodeDetailView } from "@/components/episode-detail-view";
import { SaveBuilderButton } from "@/components/save-builder-button";
import { RandomEpisodeButton } from "@/components/random-episode-button";
import { JsonLd } from "@/components/json-ld";

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
      <div className="mb-8">
        <div className="flex items-center justify-between mb-8">
            <Button variant="ghost" className="pl-0 gap-2 hover:bg-transparent -ml-2 text-muted-foreground hover:text-foreground" asChild>
                <Link href="/">
                    <ArrowLeft className="h-4 w-4" />
                    Back to Archive
                </Link>
            </Button>
            <RandomEpisodeButton allSlugs={allSlugs} currentSlug={slug} />
        </div>
        
        <div className="flex flex-col gap-3">
            <div className="flex items-center gap-4 group w-fit">
                <h1 className="text-4xl font-black tracking-tighter sm:text-6xl text-balance">
                    {metadata.guest}
                </h1>
                <SaveBuilderButton episode={metadata} />
            </div>
            <p className="text-muted-foreground text-sm flex items-center gap-2 font-medium">
                <span>Detailed Analysis & Action Guide</span>
                {metadata.date && <span className="text-muted-foreground/30">/</span>}
                {metadata.date && <span className="">{metadata.date}</span>}
            </p>
        </div>
      </div>

      <EpisodeDetailView episode={metadata} content={contentWithoutTitle} />
      
      {/* Structural Data for SEO */}
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "PodcastEpisode",
        "name": `${metadata.guest} on Lenny's Podcast`,
        "description": metadata.summary,
        "datePublished": metadata.date,
        "url": `https://builders.simpfly.info/episodes/${metadata.slug}`,
        "partOfSeries": {
            "@type": "PodcastSeries",
            "name": "Lenny's Podcast",
            "url": "https://www.lennysnewsletter.com/podcast"
        },
        "director": {
            "@type": "Person",
            "name": "Lenny Rachitsky"
        }
      }} />
    </div>
  );
}
