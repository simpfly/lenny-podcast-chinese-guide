import { getAllProducts } from "@/lib/data";
import { ProductList } from "@/components/product-list";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | Lenny's Podcast Tools & Resources",
  description: "A curated list of all tools, books, and resources mentioned in Lenny's Podcast episodes.",
};

import { Suspense } from "react";
import { JsonLd } from "@/components/json-ld";

export default function ProductsPage() {
  const products = getAllProducts();

  return (
    <div className="py-4">
      <Suspense fallback={<div className="container py-10">Loading products...</div>}>
      <ProductList 
        initialProducts={products} 
        title="Products"
        description="Browse all the software, frameworks, books, and resources recommended or used by world-class product leaders on Lenny's Podcast."
      />
      </Suspense>

      {/* Structured Data for Books */}
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": products
            .filter(p => p.category === "Book")
            .slice(0, 20) // Limit to top 20 to avoid excessive DOM size
            .map((book, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                    "@type": "Book",
                    "name": book.name,
                    "description": book.description,
                    "url": book.link
                }
            }))
      }} />
    </div>
  );
}
