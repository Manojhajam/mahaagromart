"use client";

import { useRouter } from "next/navigation";
import { Image } from "antd";
import { Heart, Star } from "lucide-react";

interface ProductCardProps {
  id: number;
  title: string;
  price: string;
  oldPrice: string;
  image: string;
  color?: string;
  category?: string;
  label?: string;
  discount?: string;
  rating?: number;
  reviews?: number;
}

export default function ProductCard({
  id,
  title,
  price,
  oldPrice,
  image,
  color = "bg-gray-50",
  category,
  label,
  discount,
  rating,
  reviews,
}: ProductCardProps) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/product/${id}`)}
      className="bg-white rounded-2xl shadow-sm border border-gray-100 p-3 sm:p-5 flex flex-col relative h-full transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
    >
      {category && (
        <div className="flex items-start justify-between">
          <span className="bg-gray-200 text-text-body text-[10px] sm:text-xs font-medium px-2 sm:px-3 py-1 rounded-md">
            {category}
          </span>
          <Heart size={16} className="text-heart fill-heart sm:hidden" />
          <Heart
            size={20}
            className="text-heart fill-heart hidden sm:block"
          />
        </div>
      )}

      <div className="flex-1 flex items-center gap-2 sm:gap-3 my-3 sm:my-4">
        <div className={`flex-1 ${color} rounded-xl overflow-hidden`}>
          <Image
            src={image}
            alt={title}
            preview={false}
            className="w-full"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      </div>

      <h3 className="text-base sm:text-lg font-bold text-text-dark">{title}</h3>
      <div className="flex items-center gap-2 mt-1">
        <span className="text-primary-light font-bold text-base sm:text-lg">
          {price}
        </span>
        {discount && (
          <span className="bg-red-50 text-danger text-[10px] sm:text-xs font-medium px-1.5 sm:px-2 py-0.5 rounded">
            {discount}
          </span>
        )}
      </div>
      <div className="flex items-center gap-1 mt-2 text-gray-400 text-xs sm:text-sm">
        {rating ? (
          <>
            <Star
              size={12}
              className="fill-accent-light text-accent-light sm:hidden"
            />
            <Star
              size={14}
              className="fill-accent-light text-accent-light hidden sm:block"
            />
            <span className="text-accent font-medium">{rating}</span>
            <span>({reviews ?? 0} Reviews)</span>
          </>
        ) : (
          <>
            <Star size={12} className="fill-gray-300 text-gray-300 sm:hidden" />
            <Star
              size={14}
              className="fill-gray-300 text-gray-300 hidden sm:block"
            />
            <span>(0) Reviews</span>
          </>
        )}
      </div>
    </div>
  );
}
