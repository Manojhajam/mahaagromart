import { Fragment } from "react";
import { Heart, Star } from "lucide-react";

// ---- Mock data (swap image fields with your real asset paths) ----

const countdown = [
  { value: "06", label: "Days" },
  { value: "22", label: "Hours" },
  { value: "39", label: "Minutes" },
  { value: "01", label: "Seconds" },
];

const labeledProducts = [
  {
    label: "KALA TIKHA MASAL",
    title: "Kala tikha gara...",
    oldPrice: "₹86.00",
    price: "₹85.00",
    color: "bg-orange-100",
    emoji: "🌶️",
  },
  {
    label: "KANDA LASUN MASALA",
    title: "Kanda Lasun...",
    oldPrice: "₹90.00",
    price: "₹85.00",
    color: "bg-red-100",
    emoji: "🧅",
  },
  {
    label: "CHILLY POWDER",
    title: "Chilliy Powder ...",
    oldPrice: "₹1700.00",
    price: "₹1699.00",
    color: "bg-red-50",
    emoji: "🌶️",
  },
];

const plainProducts = [
  {
    title: "Maize",
    oldPrice: "₹1920.00",
    price: "₹1920.00",
    color: "bg-amber-100",
    emoji: "🌽",
  },
  {
    title: "Turmeric Powder",
    oldPrice: "₹15.00",
    price: "₹15.00",
    color: "bg-yellow-100",
    emoji: "🟡",
  },
  {
    title: "Kanda Lasun...",
    oldPrice: "₹85.00",
    price: "₹85.00",
    color: "bg-orange-100",
    emoji: "🧄",
  },
];

function CountdownBox({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-danger text-white rounded-lg px-3.5 py-2 min-w-[64px] text-center shadow-sm">
      <div className="text-lg font-bold leading-tight">{value}</div>
      <div className="text-[9px] tracking-wide uppercase opacity-90 leading-tight">
        {label}
      </div>
    </div>
  );
}

function LabeledProductCard({
  label,
  title,
  oldPrice,
  price,
  color,
  emoji,
}: (typeof labeledProducts)[number]) {
  return (
    <div className="bg-white rounded-xl p-3 flex gap-3 items-center relative shadow-sm">
      <div
        className={`w-16 h-16 rounded-lg ${color} flex items-center justify-center text-2xl shrink-0`}
      >
        {emoji}
      </div>
      <div className="bg-danger text-white text-[9px] font-semibold rounded-md w-5 h-16 flex items-center justify-center shrink-0">
        <span className="[writing-mode:vertical-rl] rotate-180 tracking-wide whitespace-nowrap">
          {label}
        </span>
      </div>
      <div className="flex-1 min-w-0 pr-5">
        <h3 className="font-semibold text-sm text-text-dark truncate">
          {title}
        </h3>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-gray-400 line-through text-xs">{oldPrice}</span>
          <span className="text-primary-light font-semibold text-sm">{price}</span>
        </div>
        <div className="flex items-center gap-1 mt-1 text-gray-400 text-xs">
          <Star size={12} className="fill-gray-300 text-gray-300" />
          <span>0 Rating</span>
        </div>
      </div>
      <Heart
        size={16}
        className="absolute top-3 right-3 text-heart fill-heart"
      />
    </div>
  );
}

function PlainProductCard({
  title,
  oldPrice,
  price,
  color,
  emoji,
}: (typeof plainProducts)[number]) {
  return (
    <div className="bg-white rounded-xl p-3 flex gap-3 items-center relative shadow-sm">
      <div
        className={`w-20 h-16 rounded-lg ${color} flex items-center justify-center text-2xl shrink-0`}
      >
        {emoji}
      </div>
      <div className="flex-1 min-w-0 pr-5">
        <h3 className="font-semibold text-sm text-text-dark truncate">
          {title}
        </h3>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-gray-400 line-through text-xs">{oldPrice}</span>
          <span className="text-primary-light font-semibold text-sm">{price}</span>
        </div>
        <div className="flex items-center gap-1 mt-1 text-gray-400 text-xs">
          <Star size={12} className="fill-gray-300 text-gray-300" />
          <span>0 Rating</span>
        </div>
      </div>
      <Heart
        size={16}
        className="absolute top-3 right-3 text-heart fill-heart"
      />
    </div>
  );
}

export default function DealOfTheWeek() {
  return (
    <div className="container rounded-xl border-4 border-danger overflow-hidden bg-white mb-10">
      {/* Header */}
      <div className="bg-[#FBF6EA] px-4 py-5 flex items-center justify-between flex-wrap gap-4">
        <h2 className="text-2xl font-extrabold text-text-dark">
          Deal of the Week
        </h2>
        <div className="flex gap-2">
          {countdown.map((c) => (
            <CountdownBox key={c.label} value={c.value} label={c.label} />
          ))}
        </div>
      </div>

      {/* Body */}
      <div className="bg-[#E9F5E9] p-4 sm:p-6 grid grid-cols-12 gap-5 items-stretch">
        {/* Left: hero image */}
        <div className="col-span-12 md:col-span-12 xl:col-span-3 relative rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-100 to-emerald-200 min-h-[200px] sm:min-h-[280px] md:min-h-[360px] flex items-end justify-center">
          {/* Replace this block with: <img src="/images/woman.webp" className="absolute inset-0 w-full h-full object-cover" /> */}
          <div className="absolute inset-0 flex items-center justify-center text-8xl">
            🧺
          </div>
        </div>

        {/* Middle: featured product */}
        <div className="col-span-12 md:col-span-12 xl:col-span-3 bg-white rounded-2xl shadow-sm p-5 flex flex-col relative min-h-[200px] sm:min-h-[280px] md:min-h-[360px]">
          <div className="flex items-start justify-between">
            <span className="bg-gray-100 text-text-body text-xs font-medium px-3 py-1 rounded-md">
              Food
            </span>
            <Heart size={20} className="text-heart fill-heart" />
          </div>

          <div className="flex-1 flex items-center gap-3 my-4">
            <div className="flex-1 aspect-square bg-orange-50 rounded-xl flex items-center justify-center text-6xl">
              {/* Replace with: <img src="/images/hero.webp" className="w-full h-full object-contain" /> */}
              🧆
            </div>
            <div className="bg-danger text-white text-[10px] font-semibold rounded-lg w-7 h-40 flex items-center justify-center">
              <span className="[writing-mode:vertical-rl] rotate-180 tracking-wide whitespace-nowrap">
                SHAHI GARAM MASAL
              </span>
            </div>
          </div>

          <h3 className="text-lg font-bold text-text-dark">Shahi Gram Masala</h3>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-primary-light font-bold text-lg">₹124.00</span>
            <span className="bg-red-50 text-danger text-xs font-medium px-2 py-0.5 rounded">
              1% OFF
            </span>
          </div>
          <div className="flex items-center gap-1 mt-2 text-gray-400 text-sm">
            <Star size={14} className="fill-gray-300 text-gray-300" />
            <span>(0) Reviews</span>
          </div>
        </div>

        {/* Right: product grid */}
        <div className="col-span-12 md:col-span-12 xl:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 auto-rows-fr h-full">
          {labeledProducts.map((p, i) => (
            <Fragment key={p.title}>
              <LabeledProductCard {...p} />
              <PlainProductCard {...plainProducts[i]} />
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
