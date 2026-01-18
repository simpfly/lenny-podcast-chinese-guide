import { getEpisodeContent } from "@/lib/data";
import { notFound } from "next/navigation";
import { MarkdownRenderer } from "@/components/markdown-renderer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function EpisodePage({ params }: PageProps) {
  const { slug } = await params;
  const data = getEpisodeContent(slug);

  if (!data) {
    notFound();
  }

  const { content, data: frontmatter } = data;

  // Attempt to parse Title from content if frontmatter doesn't have it
  const title = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  // Remove the first H1 from markdown content if it exists, to avoid duplication
  const contentWithoutTitle = content.replace(/^# .*?\n/, '');

  return (
    <div className="max-w-4xl mx-auto w-full">
      <div className="mb-8 flex items-start gap-4 flex-col">
        <Button variant="ghost" className="pl-0 gap-2" asChild>
             <Link href="/">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
             </Link>
        </Button>
        
        <div className="flex flex-col gap-2">
            <div className="flex gap-2">
                <Badge variant="outline">Analysis</Badge>
                <Badge variant="secondary">Podcast</Badge>
            </div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
                 {title} - Detailed Analysis
            </h1>
        </div>
      </div>

      <div className="rounded-xl border bg-card text-card-foreground shadow-sm p-6 sm:p-10">
        <MarkdownRenderer content={contentWithoutTitle} />
      </div>

       <div className="mt-10 flex justify-center gap-4">
         <Button variant="outline" className="gap-2" disabled>
            <Download className="h-4 w-4" />
            Download PDF (Coming Soon)
         </Button>
       </div>
    </div>
  );
}
