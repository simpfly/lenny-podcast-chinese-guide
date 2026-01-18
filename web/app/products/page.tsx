import { getAllProducts } from "@/lib/data";
import { ProductList } from "@/components/product-list";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | Lenny's Podcast Tools & Resources",
  description: "A curated list of all tools, books, and resources mentioned in Lenny's Podcast episodes.",
};

export default function ProductsPage() {
  const products = getAllProducts();

  return (
    <div className="py-4">
      <ProductList 
        initialProducts={products} 
        title="Products"
        description="Browse all the software, frameworks, books, and resources recommended or used by world-class product leaders on Lenny's Podcast."
      />
    </div>
  );
}
