"use client";
import { PhoneOutlined, MailOutlined } from "@ant-design/icons";

const objectives = [
  {
    title: "Accessibility",
    desc: "Ensure easy access to diverse agricultural inputs for farmers across Maharashtra.",
  },
  {
    title: "Empowerment",
    desc: "Provide resources and knowledge to optimize yields and adopt modern practices.",
  },
  {
    title: "Innovation",
    desc: "Integrate technological advancements to enhance efficiency and productivity.",
  },
  {
    title: "Sustainability",
    desc: "Promote sustainable farming methods for environmental conservation.",
  },
  {
    title: "Community Support",
    desc: "Foster a supportive ecosystem for socio-economic well-being.",
  },
];

const values = [
  { title: "Commitment", desc: "Serving farmers with integrity, dedication, and transparency." },
  { title: "Quality", desc: "Providing high-quality agricultural products and services." },
  { title: "Collaboration", desc: "Building partnerships for a robust agricultural ecosystem." },
  { title: "Innovation", desc: "Embracing technology for continuous improvement." },
  { title: "Sustainability", desc: "Encouraging environmentally responsible farming." },
  { title: "Community", desc: "Supporting the socio-economic growth of farmers." },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[300px] sm:h-[400px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1600&h=900&fit=crop"
          alt="Farmland"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-white text-center px-4">
            About Maha Agro Mart
          </h1>
        </div>
      </section>

      {/* Our Story */}
      <section className="container py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-text-dark mb-6">
              Our Story
            </h2>
            <p className="text-text-body leading-relaxed mb-4">
              Maha Agro Mart is proud to actively support and collaborate with Self Help Groups (SHGs), Farmer Producer Organizations (FPOs), and individual farmers across Maharashtra. We recognize the crucial role these groups play in the agricultural landscape and strive to be a valuable partner in their success.
            </p>
            <p className="text-text-body leading-relaxed mb-4">
              Our commitment to empowering these groups and individual farmers extends beyond just providing access to high-quality agricultural products. We offer dedicated support, resources, and knowledge-sharing initiatives to help them optimize their farming practices, improve yields, and enhance overall agricultural productivity.
            </p>
            <p className="text-text-body leading-relaxed">
              By fostering collaborations with SHGs and FPOs, we aim to create a network of mutual support, enabling these entities to leverage our platform for their procurement needs and benefit from our expertise in sustainable agricultural practices.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?w=400&h=500&fit=crop"
                alt="Farmers working"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden mt-8">
              <img
                src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=400&h=500&fit=crop"
                alt="Sustainable farming"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-primary-dark py-16">
        <div className="container grid md:grid-cols-2 gap-10">
          <div className="bg-white/10 backdrop-blur rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Vision</h3>
            <p className="leading-relaxed text-green-100">
              Empowering Maharashtra&apos;s farming community by leveraging technology and innovation for sustainable agricultural growth, ensuring prosperity and resilience in the agricultural landscape.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Mission</h3>
            <p className="leading-relaxed text-green-100">
              To be the leading e-commerce platform providing seamless access to high-quality agricultural products and services to farmers across Maharashtra.
            </p>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="container py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-text-dark mb-10 text-center">
          Our Objectives
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {objectives.map((obj) => (
            <div
              key={obj.title}
              className="bg-primary-bg rounded-xl p-6 border border-green-100"
            >
              <h3 className="text-lg font-bold text-green-800 mb-2">
                {obj.title}
              </h3>
              <p className="text-text-body text-sm leading-relaxed">
                {obj.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-dark mb-10 text-center">
            Our Values
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
              >
                <h3 className="text-lg font-bold text-primary mb-2">
                  {v.title}
                </h3>
                <p className="text-text-body text-sm leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="container py-16 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-text-dark mb-6">
          Get In Touch
        </h2>
        <p className="text-text-body mb-8">
          Have questions or want to collaborate? Reach out to us.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-700">
          <a
            href="tel:+918888842300"
            className="flex items-center gap-2 text-primary hover:text-primary-light font-medium"
          >
            <PhoneOutlined />
            +91 88888-42-300
          </a>
          <a
            href="mailto:info@mahaagromart.com"
            className="flex items-center gap-2 text-primary hover:text-primary-light font-medium"
          >
            <MailOutlined />
            info@mahaagromart.com
          </a>
        </div>
      </section>
    </div>
  );
}
