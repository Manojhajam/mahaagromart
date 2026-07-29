"use client";

import { useSearchParams } from "next/navigation";
import products from "@/data/products";
import ProductCard from "@/components/home/ProductCard";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  const filtered = products.filter((p) => {
    const q = query.toLowerCase();
    return (
      p.title.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
    );
  });

  return (
    <section className="container py-10">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">
        Results for &ldquo;{query}&rdquo;
      </h2>
      <p className="text-gray-500 mb-6">{filtered.length} result{filtered.length !== 1 ? "s" : ""} found</p>

      {filtered.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <p className="text-lg">No products found for &ldquo;{query}&rdquo;</p>
          <p className="text-sm mt-2">Try searching with a different keyword.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filtered.map((p) => (
            <div key={p.id} className="h-[360px] sm:h-[400px] lg:h-[440px]">
              <ProductCard
                title={p.title}
                price={p.price}
                oldPrice={p.oldPrice}
                image={p.image}
                category={p.category}
                label={p.label}
                discount={p.discount}
                rating={p.rating}
                reviews={p.reviews}
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
