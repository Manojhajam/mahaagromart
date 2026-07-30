"use client";

import { PhoneOutlined, MailOutlined, EnvironmentOutlined, ClockCircleOutlined } from "@ant-design/icons";
import { useState } from "react";

const contactInfo = [
  {
    icon: <PhoneOutlined style={{ fontSize: 24 }} />,
    label: "Phone",
    value: "+91 88888-42-300",
    href: "tel:+918888842300",
  },
  {
    icon: <MailOutlined style={{ fontSize: 24 }} />,
    label: "Email",
    value: "info@mahaagromart.com",
    href: "mailto:info@mahaagromart.com",
  },
  {
    icon: <EnvironmentOutlined style={{ fontSize: 24 }} />,
    label: "Address",
    value: "The MAIDC Ltd, Krushi Udyog Bhavan, Aarey Milk Colony, Goregaon (E), Mumbai - 400065",
  },
  {
    icon: <ClockCircleOutlined style={{ fontSize: 24 }} />,
    label: "Working Hours",
    value: "Mon - Fri, 9:30 AM - 5:30 PM",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <section className="relative h-[250px] sm:h-[350px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&h=900&fit=crop"
          alt="Contact"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-white text-center px-4">
            Contact Us
          </h1>
        </div>
      </section>

      <section className="container py-12 sm:py-16">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-text-dark mb-4">
              Get In Touch
            </h2>
            <p className="text-text-body mb-8 max-w-md">
              Have questions or want to collaborate? Reach out to us. Our team is here to help.
            </p>

            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex gap-4">
                  <div className="text-primary-light shrink-0 mt-1">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-dark">{item.label}</h3>
                    {"href" in item ? (
                      <a href={item.href} className="text-text-body hover:text-primary transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-text-body">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 sm:p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-10 text-center">
                <div className="w-16 h-16 bg-primary-bg text-primary rounded-full flex items-center justify-center text-3xl mb-4">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-text-dark mb-2">Message Sent!</h3>
                <p className="text-text-body">Thank you for reaching out. We&apos;ll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-text-dark mb-1">Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-dark mb-1">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-dark mb-1">Subject</label>
                  <input
                    type="text"
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-dark mb-1">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    placeholder="Your message"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white font-medium py-3 rounded-lg hover:bg-primary-dark transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
