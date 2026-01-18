import { getAllProducts } from "@/lib/data";
import { ProductList } from "@/components/product-list";
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

      <ProductList initialProducts={products} />
    </div>
  );
}

