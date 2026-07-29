

import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import products from "@/data/products";
import {
  allHomeProducts,
} from "@/data/homeProducts";
import ProductCard from "@/components/home/ProductCard";

interface Props {
  params: Promise<{ id: string }>;
}

function findProduct(id: number) {
  const fromProducts = products.find((p) => p.id === id);
  if (fromProducts) return fromProducts;

  const fromHome = allHomeProducts.find((p) => p.id === id);
  if (fromHome) {
    return {
      id: fromHome.id,
      title: fromHome.title,
      price: fromHome.price,
      oldPrice: fromHome.oldPrice,
      image: fromHome.image,
      category: fromHome.category,
      label: fromHome.label,
      discount: fromHome.discount,
      rating: 0,
      reviews: 0,
      color: fromHome.color,
    };
  }

  return null;
}

function generateDescription(title: string, label: string, category: string) {
  return `Premium quality ${title.toLowerCase()} — ${label.toLowerCase()}. A top choice from our ${category} collection, carefully sourced to deliver the best value and freshness.`;
}

export async function generateStaticParams() {
  const allIds = [
    ...products.map((p) => p.id),
    ...allHomeProducts.map((p) => p.id),
  ];
  return [...new Set(allIds)].map((id) => ({ id: String(id) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = findProduct(Number(id));
  if (!product) return { title: "Product Not Found" };
  return {
    title: `${product.title} — MahaAgroMart`,
    description: generateDescription(
      product.title,
      product.label,
      product.category
    ),
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params;
  const product = findProduct(Number(id));

  if (!product) notFound();

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const isInStock = "inStock" in product ? product.inStock : true;
  const rating = "rating" in product ? product.rating : 0;
  const reviews = "reviews" in product ? product.reviews : 0;

  return (
    <div>
      <section className="container py-8">
        <nav className="text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-green-700">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/category" className="hover:text-green-700">
            Products
          </Link>
          <span className="mx-2">/</span>
          <Link
            href={`/category?cat=${encodeURIComponent(product.category)}`}
            className="hover:text-green-700"
          >
            {product.category}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-600">{product.title}</span>
        </nav>

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
            <span className="bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full w-fit mb-3">
              {product.category}
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              {product.title}
            </h1>
            <p className="text-gray-600 mb-6">
              {generateDescription(
                product.title,
                product.label,
                product.category
              )}
            </p>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-green-600 font-bold text-2xl">
                {product.price}
              </span>
              {product.oldPrice && (
                <span className="text-gray-400 line-through text-lg">
                  {product.oldPrice}
                </span>
              )}
              {product.discount && (
                <span className="bg-red-50 text-red-500 text-xs font-medium px-2 py-1 rounded">
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
                          ? "text-yellow-400"
                          : "text-gray-200"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-yellow-500 font-medium">{rating}</span>
                <span className="text-gray-400">({reviews} Reviews)</span>
              </div>
            )}

            <div className="flex items-center gap-2 mb-6">
              <span
                className={`w-2.5 h-2.5 rounded-full ${
                  isInStock ? "bg-green-500" : "bg-red-500"
                }`}
              />
              <span
                className={`text-sm font-medium ${
                  isInStock ? "text-green-600" : "text-red-500"
                }`}
              >
                {isInStock ? "In Stock" : "Out of Stock"}
              </span>
            </div>

            <div className="flex gap-3">
              <button className="flex-1 bg-green-700 hover:bg-green-800 text-white font-medium py-3 px-6 rounded-xl transition-colors">
                Add to Cart
              </button>
              <button className="flex-1 border border-green-700 text-green-700 hover:bg-green-50 font-medium py-3 px-6 rounded-xl transition-colors">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="container pb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Related Products
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {related.map((p) => (
              <div key={p.id} className="">
                <ProductCard
                  id={p.id}
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
        </section>
      )}
    </div>
  );
}
