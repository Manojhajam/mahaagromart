import { Image } from "antd";
import { Heart, Star } from "lucide-react";

const fruitProducts = [
  {
    title: "Fresh Apple",
    price: "₹120.00",
    oldPrice: "₹150.00",
    image:
      "https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?w=400&h=400&fit=crop",
    color: "bg-red-50",
    category: "Fruit",
    label: "FRESH APPLE",
    discount: "20% OFF",
  },
  {
    title: "Ripe Banana",
    price: "₹40.00",
    oldPrice: "₹50.00",
    image:
      "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=400&fit=crop",
    color: "bg-yellow-50",
    category: "Fruit",
    label: "RIPE BANANA",
    discount: "20% OFF",
  },
  {
    title: "Juicy Orange",
    price: "₹80.00",
    oldPrice: "₹100.00",
    image:
      "https://images.unsplash.com/photo-1547514701-42782101795e?w=400&h=400&fit=crop",
    color: "bg-orange-50",
    category: "Fruit",
    label: "JUICY ORANGE",
    discount: "20% OFF",
  },
  {
    title: "Sweet Mango",
    price: "₹90.00",
    oldPrice: "₹120.00",
    image:
      "https://images.unsplash.com/photo-1553279768-865429fa0078?w=400&h=400&fit=crop",
    color: "bg-yellow-50",
    category: "Fruit",
    label: "SWEET MANGO",
    discount: "25% OFF",
  },
  {
    title: "Fresh Grapes",
    price: "₹150.00",
    oldPrice: "₹180.00",
    image:
      "https://images.unsplash.com/photo-1596363505723-1942b9356e86?w=400&h=400&fit=crop",
    color: "bg-purple-50",
    category: "Fruit",
    label: "FRESH GRAPES",
    discount: "17% OFF",
  },
  {
    title: "Green Kiwi",
    price: "₹200.00",
    oldPrice: "₹250.00",
    image:
      "https://images.unsplash.com/photo-1614961230310-e4b24f88e89b?w=400&h=400&fit=crop",
    color: "bg-green-50",
    category: "Fruit",
    label: "GREEN KIWI",
    discount: "20% OFF",
  },
];

function FruitProductCard({
  title,
  price,
  oldPrice,
  image,
  color,
  category,
  label,
  discount,
}: (typeof fruitProducts)[number]) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-300 p-3 sm:p-5 flex flex-col relative h-full transition-transform duration-300 ease-in-out hover:scale-105">
      <div className="flex items-start justify-between">
        <span className="bg-gray-200 text-gray-600 text-[10px] sm:text-xs font-medium px-2 sm:px-3 py-1 rounded-md">
          {category}
        </span>
        <Heart size={16} className="text-red-400 fill-red-400 sm:hidden" />
        <Heart
          size={20}
          className="text-red-400 fill-red-400 hidden sm:block"
        />
      </div>

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

      <h3 className="text-base sm:text-lg font-bold text-gray-900">{title}</h3>
      <div className="flex items-center gap-2 mt-1">
        <span className="text-green-600 font-bold text-base sm:text-lg">
          {price}
        </span>
        <span className="bg-red-50 text-red-500 text-[10px] sm:text-xs font-medium px-1.5 sm:px-2 py-0.5 rounded">
          {discount}
        </span>
      </div>
      <div className="flex items-center gap-1 mt-2 text-gray-400 text-xs sm:text-sm">
        <Star size={12} className="fill-gray-300 text-gray-300 sm:hidden" />
        <Star
          size={14}
          className="fill-gray-300 text-gray-300 hidden sm:block"
        />
        <span>(0) Reviews</span>
      </div>
    </div>
  );
}

export default function FruitProduct() {
  return (
    <section className="py-10">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Fruit Products</h2>
      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4 pb-2">
        {fruitProducts.map((p) => (
          <div
            key={p.title}
            className="w-[calc(100%-8px)] sm:w-[calc(50%-11px)] md:w-[calc(40%-12px)] lg:w-[calc(20%-13px)] h-[360px] sm:h-[400px] lg:h-[440px] snap-start shrink-0"
          >
            <FruitProductCard {...p} />
          </div>
        ))}
      </div>
    </section>
  );
}
