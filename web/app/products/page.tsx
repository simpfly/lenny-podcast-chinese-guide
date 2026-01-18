import { getAllProducts } from "@/lib/data";
import { ProductCard } from "@/components/product-card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Wall | Lenny's Podcast Tools & Resources",
  description: "A curated list of all tools, books, and resources mentioned in Lenny's Podcast episodes.",
};

export default function ProductsPage() {
  const products = getAllProducts();

  return (
    <div className="flex flex-col gap-8 py-4">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          Product Wall
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl">
          Browse all the software, frameworks, books, and resources recommended or used by world-class product leaders on Lenny's Podcast.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>

      {products.length === 0 && (
        <div className="py-20 text-center border rounded-lg bg-muted/20">
          <p className="text-muted-foreground">No products found. Add more episode analysis files to populate the wall.</p>
        </div>
      )}
    </div>
  );
}
