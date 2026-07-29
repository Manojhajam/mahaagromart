"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState, useMemo } from "react";
import products, { categories } from "@/data/products";
import ProductCard from "@/components/home/ProductCard";
import { DownOutlined } from "@ant-design/icons";

const priceRanges = [
  { label: "Under ₹100", min: 0, max: 100 },
  { label: "₹100 - ₹500", min: 100, max: 500 },
  { label: "₹500 - ₹1000", min: 500, max: 1000 },
  { label: "₹1000+", min: 1000, max: Infinity },
];

const ratingOptions = [
  { label: "4★ & above", value: 4 },
  { label: "3★ & above", value: 3 },
  { label: "2★ & above", value: 2 },
  { label: "All Ratings", value: 0 },
];

function parsePrice(p: string) {
  return parseFloat(p.replace("₹", ""));
}

function FilterSidebar({
  selectedCat,
  setSelectedCat,
  priceRange,
  setPriceRange,
  minRating,
  setMinRating,
  closeMobile,
}: {
  selectedCat: string | null;
  setSelectedCat: (v: string | null) => void;
  priceRange: { min: number; max: number } | null;
  setPriceRange: (v: { min: number; max: number } | null) => void;
  minRating: number;
  setMinRating: (v: number) => void;
  closeMobile?: () => void;
}) {
  return (
    <div className="space-y-8">
      {/* Category Filter */}
      <div>
        <h3 className="font-bold text-gray-900 mb-3 text-lg">Category</h3>
        <div className="space-y-1 max-h-64 overflow-y-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCat(cat)}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                selectedCat === cat
                  ? "bg-green-700 text-white font-medium"
                  : "text-gray-600 hover:bg-green-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div>
        <h3 className="font-bold text-gray-900 mb-3 text-lg">Price</h3>
        <div className="space-y-2">
          <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-600 hover:text-gray-900">
            <input
              type="radio"
              name="price"
              checked={priceRange === null}
              onChange={() => setPriceRange(null)}
              className="accent-green-700 w-4 h-4"
            />
            All Prices
          </label>
          {priceRanges.map((r) => (
            <label
              key={r.label}
              className="flex items-center gap-2 cursor-pointer text-sm text-gray-600 hover:text-gray-900"
            >
              <input
                type="radio"
                name="price"
                checked={
                  priceRange !== null &&
                  priceRange.min === r.min &&
                  priceRange.max === r.max
                }
                onChange={() => setPriceRange({ min: r.min, max: r.max })}
                className="accent-green-700 w-4 h-4"
              />
              {r.label}
            </label>
          ))}
        </div>
      </div>

      {/* Rating Filter */}
      <div>
        <h3 className="font-bold text-gray-900 mb-3 text-lg">Ratings</h3>
        <div className="space-y-2">
          {ratingOptions.map((r) => (
            <label
              key={r.value}
              className="flex items-center gap-2 cursor-pointer text-sm text-gray-600 hover:text-gray-900"
            >
              <input
                type="radio"
                name="rating"
                checked={minRating === r.value}
                onChange={() => setMinRating(r.value)}
                className="accent-green-700 w-4 h-4"
              />
              {r.label}
            </label>
          ))}
        </div>
      </div>

      {closeMobile && (
        <button
          onClick={closeMobile}
          className="w-full bg-green-700 text-white py-2 rounded-lg font-medium sm:hidden"
        >
          Apply Filters
        </button>
      )}
    </div>
  );
}

export default function CategoryPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [selectedCat, setSelectedCat] = useState<string | null>(() => {
    return searchParams.get("cat") || null;
  });
  const [priceRange, setPriceRange] = useState<{
    min: number;
    max: number;
  } | null>(null);
  const [minRating, setMinRating] = useState(0);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (selectedCat && p.category !== selectedCat) return false;
      if (priceRange) {
        const num = parsePrice(p.price);
        if (num < priceRange.min || num > priceRange.max) return false;
      }
      if (minRating > 0 && p.rating < minRating) return false;
      return true;
    });
  }, [selectedCat, priceRange, minRating]);

  const clearFilters = () => {
    setSelectedCat(null);
    setPriceRange(null);
    setMinRating(0);
    router.replace("/category", { scroll: false });
  };

  const hasActiveFilters =
    selectedCat !== null || priceRange !== null || minRating > 0;

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[200px] sm:h-[300px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1589923188900-85dae523342b?w=1600&h=900&fit=crop"
          alt="Products"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-white text-center px-4">
            {selectedCat || "All Products"}
          </h1>
        </div>
      </section>

      <section className="container py-8">
        <div className="flex gap-8">
          {/* Sidebar - Desktop */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-bold text-gray-900 text-xl">Filters</h2>
                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="text-sm text-green-700 hover:underline"
                  >
                    Clear all
                  </button>
                )}
              </div>
              <FilterSidebar
                selectedCat={selectedCat}
                setSelectedCat={setSelectedCat}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                minRating={minRating}
                setMinRating={setMinRating}
              />
            </div>
          </aside>

          {/* Mobile Filter Toggle */}
          <div className="lg:hidden flex items-center justify-between w-full mb-4">
            <p className="text-gray-500 text-sm">
              {filtered.length} product{filtered.length !== 1 ? "s" : ""} found
            </p>
            <button
              onClick={() => setMobileFilterOpen(true)}
              className="flex items-center gap-1 border border-gray-300 rounded-lg px-3 py-1.5 text-sm font-medium text-gray-700"
            >
              Filters <DownOutlined className="text-xs" />
            </button>
          </div>

          {/* Mobile Filter Drawer */}
          {mobileFilterOpen && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div
                className="absolute inset-0 bg-black/40"
                onClick={() => setMobileFilterOpen(false)}
              />
              <div className="absolute left-0 top-0 bottom-0 w-80 bg-white p-6 overflow-y-auto shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-bold text-gray-900 text-xl">Filters</h2>
                  <button
                    onClick={() => setMobileFilterOpen(false)}
                    className="text-gray-500 text-2xl leading-none"
                  >
                    &times;
                  </button>
                </div>
                <FilterSidebar
                  selectedCat={selectedCat}
                  setSelectedCat={setSelectedCat}
                  priceRange={priceRange}
                  setPriceRange={setPriceRange}
                  minRating={minRating}
                  setMinRating={setMinRating}
                  closeMobile={() => setMobileFilterOpen(false)}
                />
              </div>
            </div>
          )}

          {/* Product Grid */}
          <div className="flex-1 min-w-0">
            {/* Desktop result count + clear */}
            <div className="hidden lg:flex items-center justify-between mb-6">
              <p className="text-gray-500 text-sm">
                {filtered.length} product{filtered.length !== 1 ? "s" : ""} found
              </p>
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-green-700 hover:underline"
                >
                  Clear all filters
                </button>
              )}
            </div>

            {/* Active filter chips */}
            {hasActiveFilters && (
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedCat && (
                  <span className="inline-flex items-center gap-1 bg-green-50 text-green-700 text-xs font-medium px-2.5 py-1 rounded-full">
                    {selectedCat}
                    <button
                      onClick={() => setSelectedCat(null)}
                      className="ml-1 hover:text-green-900"
                    >
                      &times;
                    </button>
                  </span>
                )}
                {priceRange && (
                  <span className="inline-flex items-center gap-1 bg-green-50 text-green-700 text-xs font-medium px-2.5 py-1 rounded-full">
                    {priceRange.max === Infinity
                      ? `₹${priceRange.min}+`
                      : `₹${priceRange.min} - ₹${priceRange.max}`}
                    <button onClick={() => setPriceRange(null)} className="ml-1 hover:text-green-900">
                      &times;
                    </button>
                  </span>
                )}
                {minRating > 0 && (
                  <span className="inline-flex items-center gap-1 bg-green-50 text-green-700 text-xs font-medium px-2.5 py-1 rounded-full">
                    {minRating}★ & above
                    <button onClick={() => setMinRating(0)} className="ml-1 hover:text-green-900">
                      &times;
                    </button>
                  </span>
                )}
              </div>
            )}

            {filtered.length === 0 ? (
              <div className="text-center py-20 text-gray-400">
                <p className="text-lg">No products match your filters</p>
                <button
                  onClick={clearFilters}
                  className="mt-4 text-green-700 font-medium hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4">
                {filtered.map((p) => (
                  <div
                    key={p.id}
                    className="h-[340px] sm:h-[380px] lg:h-[420px]"
                  >
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
          </div>
        </div>
      </section>
    </div>
  );
}
