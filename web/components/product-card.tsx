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
  return (
    <Card className="flex flex-col h-full transition-all hover:shadow-md hover:border-primary/50">
      <CardHeader className="flex-none">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-xl font-bold line-clamp-1">{product.name}</CardTitle>
          <Badge variant={product.category === 'Tool' ? 'default' : 'outline'}>
            {product.category}
          </Badge>
        </div>
        <CardDescription className="line-clamp-2 min-h-[40px] mt-2">
          {product.description || "No description provided."}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap gap-2 items-center text-sm text-muted-foreground">
            <Tag className="h-3 w-3" />
            <span>Mentioned in:</span>
            <div className="flex flex-wrap gap-1">
              {product.mentionedIn.map((ep) => (
                <Link 
                  key={ep.episodeSlug} 
                  href={`/episode/${ep.episodeSlug}`}
                  className="hover:text-primary hover:underline underline-offset-4"
                >
                  <Badge variant="secondary" className="px-1 py-0 text-[10px] font-normal cursor-pointer">
                    {ep.episodeTitle}
                  </Badge>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex-none pt-0">
        {product.link && (
          <Button variant="outline" size="sm" className="w-full gap-2" asChild>
            <a href={product.link} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-3 w-3" />
              Visit Website
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
