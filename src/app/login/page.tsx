"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [submitted, setSubmitted] = useState(false);

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    router.replace("/"); // Redirect to home page after successful login
  };

  return (
    <div>
      {/* <section className="relative h-[250px] sm:h-[350px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&h=900&fit=crop"
          alt="Login"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-white text-center px-4">
            Login
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
                Welcome back!
              </h3>
              <p className="text-text-body mb-6">
                You have successfully logged in.
              </p>
              <Link
                href="/"
                className="w-full bg-primary text-white font-medium py-3 rounded-lg hover:bg-primary-dark transition-colors text-center"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <>
              <h2 className="text-2xl sm:text-3xl font-bold text-text-dark mb-2">
                Welcome Back
              </h2>
              <p className="text-text-body mb-8">
                Login to your mahaagromart account
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
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
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Your email"
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
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Your password"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 text-sm text-text-body cursor-pointer">
                    <input type="checkbox" className="accent-primary w-4 h-4" />
                    Remember me
                  </label>
                  <Link
                    href="#"
                    className="text-sm text-primary hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white font-medium py-3 rounded-lg hover:bg-primary-dark transition-colors"
                >
                  Sign In
                </button>
              </form>

              <p className="mt-6 text-center text-sm text-text-body">
                Don&apos;t have an account?{" "}
                <Link
                  href="/register"
                  className="text-primary font-medium hover:underline"
                >
                  Register
                </Link>
              </p>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
