const services = [
  {
    title: "B2B Procurement",
    desc: "Bulk procurement solutions for businesses, SHGs, and FPOs. Access quality agricultural inputs at competitive prices with dedicated account management.",
    icon: "🤝",
  },
  {
    title: "Quality Assurance",
    desc: "Rigorous quality checks on all products. We ensure every item meets high standards before reaching your doorstep.",
    icon: "✅",
  },
  {
    title: "Farmer Support",
    desc: "Dedicated support for farmers including guidance on product usage, best practices, and access to expert advice for better yields.",
    icon: "👨‍🌾",
  },
  {
    title: "Logistics & Delivery",
    desc: "Reliable delivery network across Maharashtra. Timely shipments with real-time tracking and careful handling of all products.",
    icon: "🚚",
  },
  {
    title: "Technical Support",
    desc: "Expert technical assistance for agricultural machinery, irrigation systems, and modern farming equipment.",
    icon: "🔧",
  },
  {
    title: "Seller Partnership",
    desc: "Robust platform for sellers and manufacturers to reach farmers directly. Easy onboarding, transparent policies, and timely payments.",
    icon: "📦",
  },
  {
    title: "Seed & Fertilizer Advisory",
    desc: "Expert recommendations on seeds, fertilizers, and pesticides tailored to your soil type, crop, and regional conditions.",
    icon: "🌱",
  },
  {
    title: "Training & Workshops",
    desc: "Regular training sessions, workshops, and knowledge-sharing initiatives on modern farming techniques and sustainable practices.",
    icon: "📚",
  },
];

export default function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[300px] sm:h-[400px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1589923188900-85dae523342b?w=1600&h=900&fit=crop"
          alt="Services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-white text-center px-4">
            Our Services
          </h1>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            What We Offer
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive agricultural services designed to support farmers, businesses, and partners across Maharashtra.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md hover:border-green-200 transition-all duration-300"
            >
              <span className="text-3xl mb-4 block">{s.icon}</span>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {s.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-900 py-16">
        <div className="container text-center text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Need Help Choosing a Service?
          </h2>
          <p className="text-green-100 mb-8 max-w-xl mx-auto">
            Our team is here to help you find the right solution for your agricultural needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+918888842300"
              className="bg-yellow-400 text-black font-bold px-8 py-3 rounded-full hover:bg-yellow-500 transition-colors"
            >
              Call +91 88888-42-300
            </a>
            <a
              href="mailto:info@mahaagromart.com"
              className="border border-white text-white font-medium px-8 py-3 rounded-full hover:bg-white/10 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
