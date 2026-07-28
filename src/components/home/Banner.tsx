import Image from "next/image";

export default function Banner() {
  return (
    <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:gap-6 lg:gap-8">
      <div className="h-[32.5rem] w-[30rem] rounded-2xl overflow-hidden relative group">
        <div
          className="absolute inset-0 bg-contain bg-center bg-green-700 bg-no-repeat transition-transform duration-300 group-hover:scale-110"
          style={{
            backgroundImage: "url('/images/hero.webp')",
            backgroundSize: "140%",
          }}
        />

        <div className="relative z-10 pb-10 flex flex-col items-center justify-end h-full">
          <h1 className="text-white text-2xl">
            Get Up to <span className="text-yellow-300">50%*</span> Off
          </h1>
        </div>
      </div>

      <div className="h-[32.5rem] w-[30rem] rounded-2xl overflow-hidden relative group">
        <div
          className="absolute inset-0 bg-contain bg-center bg-green-700 bg-no-repeat transition-transform duration-300 group-hover:scale-110"
          style={{
            backgroundImage: "url('/images/hero.webp')",
            backgroundSize: "140%",
          }}
        />

        <div className="relative z-10 pb-10 flex flex-col items-center justify-end h-full">
          <h1 className="text-white text-2xl">
            Get Up to <span className="text-yellow-300">50%*</span> Off
          </h1>
        </div>
      </div>

      <div className="h-[32.5rem] w-[30rem] rounded-2xl overflow-hidden relative group">
        <div
          className="absolute inset-0 bg-contain bg-center bg-green-700 bg-no-repeat transition-transform duration-300 group-hover:scale-110"
          style={{
            backgroundImage: "url('/images/hero.webp')",
            backgroundSize: "140%",
          }}
        />

        <div className="relative z-10 pb-10 flex flex-col items-center justify-end h-full">
          <h1 className="text-white text-2xl">
            Get Up to <span className="text-yellow-300">50%*</span> Off
          </h1>
        </div>
      </div>
    </div>
  );
}

export function Categories() {
  return (
    <section className="py-10">
      <div className="container">
        <h2 className="mb-6 text-2xl font-bold text-gray-800">
          Top Categories
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8">
          {categories.map((category) => (
            <div
              key={category.name}
              className="flex cursor-pointer flex-col items-center rounded-xl bg-white p-4 shadow-sm transition hover:shadow-md"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl">
                {category.icon}
              </div>
              <span className="mt-2 text-center text-sm font-medium text-gray-700">
                {category.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const categories = [
  { name: "Fruits and Vegetables", icon: "🍎" },
  { name: "Food Products", icon: "🥫" },
  { name: "Millets", icon: "🌾" },
  { name: "Fertilizers", icon: "🧪" },
  { name: "Pesticides", icon: "🧴" },
  { name: "Seed's", icon: "🌱" },
  { name: "Combo Packs", icon: "📦" },
  { name: "Gardening", icon: "🧑‍🌾" },
];
