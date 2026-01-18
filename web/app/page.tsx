import { getAllCategories } from "@/lib/data";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { SearchInput } from "@/components/search-input";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const categories = getAllCategories();

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4 text-center md:text-left">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          Lenny's Podcast Knowledge Base
        </h1>
        <p className="text-muted-foreground text-lg">
          Deep dive analysis and bilingual transcripts from the best product podcast.
        </p>
        <div className="mt-4">
            <SearchInput />
        </div>
      </div>

      <section>
        <h2 className="mb-4 text-2xl font-semibold tracking-tight">Browse by Topic</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link key={category.slug} href={`/topic/${category.slug}`}>
              <Card className="h-full transition-all hover:bg-muted/50 hover:border-primary/50">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {category.title}
                  </CardTitle>
                  <CardDescription>
                     Explore episodes related to {category.title.toLowerCase()}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                    <Badge variant="secondary">Topic Index</Badge>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
