const stats = [
  { value: "8+", label: "Active Listings" },
  { value: "500+", label: "Happy Farmers" },
  { value: "50+", label: "Product Categories" },
  { value: "24/7", label: "Customer Support" },
];

const features = [
  {
    icon: "🤝",
    title: "Bulk Procurement",
    desc: "Source agricultural inputs at competitive prices with dedicated account management for businesses, SHGs, and FPOs.",
  },
  {
    icon: "✅",
    title: "Quality Assured",
    desc: "Every product undergoes rigorous quality checks to ensure you receive only the best agricultural inputs.",
  },
  {
    icon: "🚚",
    title: "Pan-Maharashtra Delivery",
    desc: "Reliable logistics network ensuring timely delivery across Maharashtra with real-time tracking.",
  },
  {
    icon: "💰",
    title: "Competitive Pricing",
    desc: "Get the best market rates through direct partnerships with manufacturers and farmers.",
  },
];

const steps = [
  {
    step: "01",
    title: "Register Your Business",
    desc: "Create your B2B account and complete your business profile to get started.",
  },
  {
    step: "02",
    title: "Browse Products",
    desc: "Explore our extensive catalog of agricultural products with detailed specifications.",
  },
  {
    step: "03",
    title: "Place Bulk Orders",
    desc: "Add products to your cart and place bulk orders with special B2B pricing.",
  },
  {
    step: "04",
    title: "Get Delivery",
    desc: "Receive your order at your doorstep with our reliable delivery network.",
  },
];

export default function B2BPage() {
  return (
    <div>
      <section className="flex flex-col items-center justify-center h-[300px] sm:h-[400px] bg-gradient-to-r from-primary-light to-primary text-white">
        <h1 className="text-4xl sm:text-6xl font-bold text-center px-4">
          B2B Marketplace
        </h1>
        <p className="text-base sm:text-lg mt-3 text-center px-4 max-w-2xl">
          Discover premium agricultural products and connect with trusted suppliers across Maharashtra
        </p>
      </section>

      <section className="container py-12 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center justify-center bg-white text-primary-light shadow-xl rounded-xl py-6 sm:py-8 px-4"
            >
              <h2 className="text-3xl sm:text-4xl font-bold">{s.value}</h2>
              <p className="text-sm sm:text-base text-gray-600 mt-1 text-center">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-12 sm:py-16">
        <div className="container">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-dark text-center mb-10">
            Why Choose Our B2B Platform
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <span className="text-3xl mb-4 block">{f.icon}</span>
                <h3 className="text-lg font-bold text-text-dark mb-2">{f.title}</h3>
                <p className="text-sm text-text-body leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-12 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-text-dark text-center mb-10">
          How It Works
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.step} className="relative text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                {s.step}
              </div>
              <h3 className="text-lg font-bold text-text-dark mb-2">{s.title}</h3>
              <p className="text-sm text-text-body leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primary-dark py-12 sm:py-16">
        <div className="container text-center text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Start Sourcing?
          </h2>
          <p className="text-base sm:text-lg text-green-100 mb-8 max-w-xl mx-auto">
            Join hundreds of businesses already using Maha Agro Mart for their agricultural procurement
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+918888842300"
              className="bg-accent-light text-black font-bold px-8 py-3 rounded-full hover:bg-accent transition-colors"
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
