import ProductCard from "./ProductCard";

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

const foodProducts = [
  {
    title: "Kala Tikha Masala",
    price: "₹85.00",
    oldPrice: "₹100.00",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=400&fit=crop",
    color: "bg-orange-100",
    category: "Food Products",
    label: "KALA TIKHA MASALA",
    discount: "15% OFF",
  },
  {
    title: "Kanda Lasun Masala",
    price: "₹85.00",
    oldPrice: "₹90.00",
    image:
      "https://images.unsplash.com/photo-1596097635121-14b456b4db5b?w=400&h=400&fit=crop",
    color: "bg-red-100",
    category: "Food Products",
    label: "KANDA LASUN MASALA",
    discount: "6% OFF",
  },
  {
    title: "Chilly Powder",
    price: "₹1699.00",
    oldPrice: "₹1700.00",
    image:
      "https://images.unsplash.com/photo-1587049352847-81a56d773cae?w=400&h=400&fit=crop",
    color: "bg-red-50",
    category: "Food Products",
    label: "CHILLY POWDER",
    discount: "1% OFF",
  },
  {
    title: "Turmeric Powder",
    price: "₹15.00",
    oldPrice: "₹18.00",
    image:
      "https://images.unsplash.com/photo-1615485500834-bc10199a727e?w=400&h=400&fit=crop",
    color: "bg-yellow-100",
    category: "Food Products",
    label: "TURMERIC POWDER",
    discount: "17% OFF",
  },
  {
    title: "Coriander Powder",
    price: "₹25.00",
    oldPrice: "₹30.00",
    image:
      "https://images.unsplash.com/photo-1599901860904-7e6fec3e0b50?w=400&h=400&fit=crop",
    color: "bg-green-50",
    category: "Food Products",
    label: "CORIANDER POWDER",
    discount: "17% OFF",
  },
  {
    title: "Cumin Seeds",
    price: "₹45.00",
    oldPrice: "₹55.00",
    image:
      "https://images.unsplash.com/photo-1589217119732-f9d9e3e1c7c6?w=400&h=400&fit=crop",
    color: "bg-amber-50",
    category: "Food Products",
    label: "CUMIN SEEDS",
    discount: "18% OFF",
  },
];

function ProductRow({ title, items }: { title: string; items: typeof fruitProducts }) {
  return (
    <section className="py-10">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4 pb-2">
        {items.map((p) => (
          <div
            key={p.title}
            className="w-[calc(100%-8px)] sm:w-[calc(50%-11px)] md:w-[calc(40%-12px)] lg:w-[calc(20%-13px)] h-[360px] sm:h-[400px] lg:h-[440px] snap-start shrink-0"
          >
            <ProductCard {...p} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default function ProductShowcase() {
  return (
    <div>
      <ProductRow title="Fruit Products" items={fruitProducts} />
      <ProductRow title="Food Products" items={foodProducts} />
    </div>
  );
}
