import { getAllTopicsWithCounts } from "@/lib/data";
import { TopicCloud } from "@/components/topic-cloud";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Tag } from "lucide-react";
import Link from "next/link";

export default function TopicsPage() {
  const topics = getAllTopicsWithCounts();

  return (
    <div className="flex flex-col gap-8 max-w-4xl mx-auto py-8">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div className="flex items-center gap-2">
            <Tag className="h-6 w-6 text-primary" />
            <h1 className="text-3xl font-bold tracking-tight">Core Topics</h1>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <p className="text-muted-foreground text-lg">
            Explore {topics.length} core themes discussed across all episodes.
        </p>
        
        <TopicCloud topics={topics} />
      </div>
    </div>
  );
}
