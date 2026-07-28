// app/page.tsx
import Image from "next/image";

export default function Banner() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50 to-white px-4 py-8 md:px-8 lg:px-16">
        <div className="mx-auto max-w-6xl">
          {/* Brand and Promo Row */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold text-green-700">NOGA</h1>
              <span className="text-2xl font-bold text-green-700">TOMATO</span>
              <span className="rounded-full bg-green-700 px-4 py-1 text-sm font-semibold text-white">
                KETCHUP
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm font-semibold text-green-700">
                Get Up to 30%* OFF
              </span>
              <button className="rounded-full bg-green-700 px-6 py-2 text-sm font-medium text-white shadow-md transition hover:bg-green-800">
                SHOP NOW
              </button>
            </div>
          </div>

          {/* Promotion Banner */}
          <div className="mt-6 flex flex-wrap items-center justify-between rounded-2xl bg-green-100 p-4 md:p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-700 text-2xl text-white">
                🌿
              </div>
              <div>
                <p className="text-sm font-medium text-green-800">
                  PROTECT YOUR PLANT WITH KRUSHI UDYOG
                </p>
                <p className="text-lg font-bold text-green-900">GET 50% OFF</p>
              </div>
            </div>
            <button className="rounded-full bg-green-700 px-8 py-2 text-sm font-medium text-white shadow-md transition hover:bg-green-800">
              Shop Now
            </button>
          </div>
        </div>
      </section>

      {/* Top Categories */}
      <section className="px-4 py-10 md:px-8 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-6 text-2xl font-bold text-gray-800">Top Categories</h2>
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
    </main>
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