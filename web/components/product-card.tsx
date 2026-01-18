import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Tag } from "lucide-react";
import Link from "next/link";
import { Product } from "@/lib/data";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const mentionCount = product.mentionedIn.length;

  return (
    <Card className="flex flex-col h-full transition-all hover:shadow-lg hover:-translate-y-1 hover:border-primary/50 group">
      <CardHeader className="flex-none space-y-3">
        <div className="flex items-start justify-between gap-2">
          <Badge variant="outline" className="font-mono text-[10px] py-0 px-1.5 h-5">
            {product.category}
          </Badge>
          {mentionCount > 1 && (
            <Badge variant="secondary" className="bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400 border-orange-200 dark:border-orange-800 font-bold">
              {mentionCount} Mentions
            </Badge>
          )}
        </div>
        <CardTitle className="text-xl font-bold line-clamp-1 group-hover:text-primary transition-colors">
          {product.name}
        </CardTitle>
        <CardDescription className="line-clamp-2 min-h-[40px] text-sm leading-relaxed">
          {product.description || "No description provided."}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pt-0">
        <div className="flex flex-col gap-3">
          <div className="space-y-2">
            <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/70">
              <Tag className="h-3 w-3" />
              <span>Mentioned In</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {product.mentionedIn.map((ep) => (
                <Link 
                  key={ep.episodeSlug} 
                  href={`/episode/${ep.episodeSlug}`}
                  className="transition-transform hover:scale-105 active:scale-95"
                >
                  <Badge variant="secondary" className="px-2 py-0.5 text-[11px] font-medium cursor-pointer bg-muted hover:bg-primary hover:text-primary-foreground transition-colors border-none">
                    {ep.episodeTitle}
                  </Badge>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex-none pt-4 border-t bg-muted/30">
        {product.link ? (
          <Button variant="default" size="sm" className="w-full gap-2 shadow-sm" asChild>
            <a href={product.link} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4" />
              Visit Website
            </a>
          </Button>
        ) : (
          <Button variant="outline" size="sm" className="w-full gap-2 opacity-50 cursor-not-allowed" disabled>
            No Link Available
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
