import { notFound } from "next/navigation";
import type { Metadata } from "next";
import products from "@/data/products";
import { allHomeProducts } from "@/data/homeProducts";
import ProductDetailClient from "./ProductDetailClient";

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
    <ProductDetailClient
      product={product}
      isInStock={isInStock}
      rating={rating}
      reviews={reviews}
      related={related}
      description={generateDescription(
        product.title,
        product.label,
        product.category
      )}
    />
  );
}
