"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/home/ProductCard";

interface ProductData {
  id: number;
  title: string;
  price: string;
  oldPrice: string;
  image: string;
  category: string;
  label: string;
  discount: string;
  rating?: number;
  reviews?: number;
}

export default function ProductDetailClient({
  product,
  isInStock,
  rating,
  reviews,
  related,
  description,
}: {
  product: ProductData;
  isInStock: boolean;
  rating: number;
  reviews: number;
  related: ProductData[];
  description: string;
}) {
  const { addToCart } = useCart();
  const router = useRouter();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const handleBuyNow = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
    router.push("/checkout");
  }

  return (
    <div>
      <section className="container py-8">
        {/* <nav className="text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/category" className="hover:text-primary">
            Products
          </Link>
          <span className="mx-2">/</span>
          <Link
            href={`/category?cat=${encodeURIComponent(product.category)}`}
            className="hover:text-primary"
          >
            {product.category}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-text-body">{product.title}</span>
        </nav> */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-gray-50 rounded-2xl overflow-hidden">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover"
              style={{ maxHeight: 500 }}
            />
          </div>

          <div className="flex flex-col justify-center">
            <span className="bg-green-100 text-primary text-xs font-medium px-3 py-1 rounded-full w-fit mb-3">
              {product.category}
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-text-dark mb-4">
              {product.title}
            </h1>
            <p className="text-text-body mb-6">{description}</p>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-primary-light font-bold text-2xl">
                {product.price}
              </span>
              {product.oldPrice && (
                <span className="text-gray-400 line-through text-lg">
                  {product.oldPrice}
                </span>
              )}
              {product.discount && (
                <span className="bg-red-50 text-danger text-xs font-medium px-2 py-1 rounded">
                  {product.discount}
                </span>
              )}
            </div>

            {rating > 0 && (
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className={`w-5 h-5 ${
                        star <= Math.round(rating)
                          ? "text-accent-light"
                          : "text-gray-200"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-accent font-medium">{rating}</span>
                <span className="text-gray-400">({reviews} Reviews)</span>
              </div>
            )}

            <div className="flex items-center gap-2 mb-6">
              <span
                className={`w-2.5 h-2.5 rounded-full ${
                  isInStock ? "bg-green-500" : "bg-danger"
                }`}
              />
              <span
                className={`text-sm font-medium ${
                  isInStock ? "text-primary-light" : "text-danger"
                }`}
              >
                {isInStock ? "In Stock" : "Out of Stock"}
              </span>
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleAddToCart}
                className={`flex-1 font-medium py-3 px-6 rounded-xl transition-colors ${
                  added
                    ? "bg-primary-light text-white"
                    : "bg-primary hover:bg-green-800 text-white"
                }`}
              >
                {added ? "Added ✓" : "Add to Cart"}
              </button>
              <button
                onClick={handleBuyNow}
                className="flex-1 border border-primary text-primary hover:bg-primary-bg font-medium py-3 px-6 rounded-xl transition-colors"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="container pb-10">
          <h2 className="text-xl font-bold text-text-dark mb-6">
            Related Products
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {related.map((p) => (
              <div key={p.id}>
                <ProductCard
                  id={p.id}
                  title={p.title}
                  price={p.price}
                  oldPrice={p.oldPrice}
                  image={p.image}
                  category={p.category}
                  label={p.label}
                  discount={p.discount}
                  rating={p.rating ?? 0}
                  reviews={p.reviews ?? 0}
                />
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
