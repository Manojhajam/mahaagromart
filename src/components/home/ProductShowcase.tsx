import ProductCard from "./ProductCard";
import {
  fruitProducts,
  foodProducts,
  pesticideProducts,
  gardeningProducts,
  onSaleProducts,
  nogaProducts,
  animalFeedProducts,
  agroEngineeringProducts,
  type HomeProduct,
} from "@/data/homeProducts";
import SomeMore from "./SomeMore";

function ProductRow({ title, items }: { title: string; items: HomeProduct[] }) {
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
      <SomeMore images={["/img/1.png", "/img/2.png", "/img/3.png"]} />
      <ProductRow title="Food Products" items={foodProducts} />
      <ProductRow title="Pesticides" items={pesticideProducts} />
      <ProductRow title="Gardening" items={gardeningProducts} />
      <ProductRow title="On Sale" items={onSaleProducts} />
      <ProductRow title="Noga Brand" items={nogaProducts} />
      <ProductRow title="Animal Feed" items={animalFeedProducts} />
      <ProductRow title="Agro Engineering" items={agroEngineeringProducts} />
    </div>
  );
}
