import { getEpisodeMetadata, getTranscriptContent, getAllEpisodeSlugs } from "@/lib/data";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";
import { MarkdownRenderer } from "@/components/markdown-renderer";
import { Metadata } from "next";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllEpisodeSlugs();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const metadata = getEpisodeMetadata(slug);

  if (!metadata) {
    return {
      title: "Transcript Not Found",
    };
  }
  
  return {
    title: `${metadata.guest} - Transcript`,
    description: `Full transcript of the episode with ${metadata.guest}.`,
  };
}

export default async function TranscriptPage({ params }: PageProps) {
  const { slug } = await params;
  const transcriptContent = getTranscriptContent(slug);
  const metadata = getEpisodeMetadata(slug);

  if (!transcriptContent || !metadata) {
    notFound();
  }

  // Fetch all episodes for navigation if needed, but for now we just need back button
  
  return (
    <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 py-8">
      <div className="mb-8">
        <Button variant="ghost" className="pl-0 gap-2 hover:bg-transparent -ml-2 text-muted-foreground hover:text-foreground mb-6" asChild>
            <Link href={`/episodes/${slug}`}>
                <ArrowLeft className="h-4 w-4" />
                Back to Analysis
            </Link>
        </Button>
        
        <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-black tracking-tight sm:text-4xl text-balance flex items-center gap-3">
                <FileText className="w-8 h-8 text-primary/80" />
                Transcript: {metadata.guest}
            </h1>
            <p className="text-muted-foreground text-sm font-medium">
                Full conversation transcript
            </p>
        </div>
      </div>

      <div className="prose prose-slate dark:prose-invert max-w-none prose-p:leading-relaxed prose-li:leading-relaxed">
          <MarkdownRenderer content={transcriptContent} />
      </div>
    </div>
  );
}
