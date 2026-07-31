"use client";

import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  const inputClass =
    "w-full border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all";

  return (
    <div>
      {/* <section className="relative h-[250px] sm:h-[350px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=1600&h=900&fit=crop"
          alt="Register"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-white text-center px-4">
            Register
          </h1>
        </div>
      </section> */}

      <section className="container py-12 sm:py-16">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg border border-gray-200 p-6 sm:p-8">
          {submitted ? (
            <div className="flex flex-col items-center justify-center text-center py-10">
              <div className="w-16 h-16 bg-primary-bg text-primary rounded-full flex items-center justify-center text-3xl mb-4">
                ✓
              </div>
              <h3 className="text-xl font-bold text-text-dark mb-2">
                Account Created!
              </h3>
              <p className="text-text-body mb-6">
                Your registration was successful. Please login to continue.
              </p>
              <Link
                href="/login"
                className="w-full bg-primary text-white font-medium py-3 rounded-lg hover:bg-primary-dark transition-colors text-center"
              >
                Login
              </Link>
            </div>
          ) : (
            <>
              <h2 className="text-2xl sm:text-3xl font-bold text-text-dark mb-2">
                Create Account
              </h2>
              <p className="text-text-body mb-8">
                Join mahaagromart today
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-text-dark mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputClass}
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-dark mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className={inputClass}
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-dark mb-1">
                    Phone <span className="text-gray-400 font-normal">(optional)</span>
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className={inputClass}
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-dark mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    required
                    value={form.password}
                    onChange={(e) =>
                      setForm({ ...form, password: e.target.value })
                    }
                    className={inputClass}
                    placeholder="Create a password"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-dark mb-1">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    required
                    value={form.confirmPassword}
                    onChange={(e) =>
                      setForm({ ...form, confirmPassword: e.target.value })
                    }
                    className={inputClass}
                    placeholder="Re-enter your password"
                  />
                </div>

                {error && (
                  <p className="text-danger text-sm">{error}</p>
                )}

                <button
                  type="submit"
                  className="w-full bg-primary text-white font-medium py-3 rounded-lg hover:bg-primary-dark transition-colors"
                >
                  Register
                </button>
              </form>

              <p className="mt-6 text-center text-sm text-text-body">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-primary font-medium hover:underline"
                >
                  Login
                </Link>
              </p>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
