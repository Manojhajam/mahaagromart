"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [submitted, setSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    router.replace("/"); // Redirect to home page after successful login
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Left illustration panel */}
        <div className="hidden md:flex items-center justify-center bg-gradient-to-br from-emerald-50 to-teal-50 p-8">
          <LoginIllustration />
        </div>

        {/* Right form panel */}
        <div className="p-8 sm:p-12 flex flex-col justify-center">
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
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                Welcome Back
              </h2>
              <p className="text-gray-500 mb-8">
                Log in to continue your journey
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="flex items-center gap-1.5 text-sm font-semibold text-gray-800 mb-1.5">
                    <MailIcon className="w-4 h-4 text-emerald-600" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="w-full border border-gray-200 bg-gray-50 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-1.5 text-sm font-semibold text-gray-800 mb-1.5">
                    <LockIcon className="w-4 h-4 text-emerald-600" />
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      value={form.password}
                      onChange={(e) =>
                        setForm({ ...form, password: e.target.value })
                      }
                      className="w-full border border-gray-200 bg-gray-50 rounded-lg px-4 py-3 pr-11 text-sm outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      placeholder="Enter your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((v) => !v)}
                      className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      <EyeIcon className="w-5 h-5" open={showPassword} />
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold py-3 rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-colors flex items-center justify-center gap-2 shadow-sm shadow-emerald-200"
                >
                  Log In
                  <ArrowRightIcon className="w-4 h-4" />
                </button>

                <div className="text-center">
                  <Link
                    href="#"
                    className="text-sm text-emerald-600 hover:underline"
                  >
                    Forgot your password?
                  </Link>
                </div>

                <div className="relative py-2">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200" />
                  </div>
                  <div className="relative flex justify-center">
                    <span className="bg-white px-3 text-xs font-medium tracking-wide text-gray-400">
                      NEW HERE?
                    </span>
                  </div>
                </div>

                <Link
                  href="/register"
                  className="block w-full text-center border border-gray-200 rounded-lg py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Create your account
                </Link>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M3 6.5C3 5.67 3.67 5 4.5 5h15c.83 0 1.5.67 1.5 1.5v11c0 .83-.67 1.5-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5v-11Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path d="m4 6.5 8 6.5 8-6.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function LockIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="4.5" y="10.5" width="15" height="9.5" rx="1.8" stroke="currentColor" strokeWidth="1.7" />
      <path d="M7.5 10.5V7.8a4.5 4.5 0 0 1 9 0v2.7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function EyeIcon({ className, open }: { className?: string; open: boolean }) {
  if (open) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <path
          d="M3 12s3.5-6.5 9-6.5S21 12 21 12s-3.5 6.5-9 6.5S3 12 3 12Z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <circle cx="12" cy="12" r="2.6" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M3 12s3.5-6.5 9-6.5S21 12 21 12s-3.5 6.5-9 6.5S3 12 3 12Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="12" r="2.6" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 4l16 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M4 12h16M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// A simple original illustration in the spirit of the reference image:
// a phone with a login form, framed by leafy plants, evoking a
// green, agriculture-friendly brand feel — built as inline SVG so it
// ships with zero external image dependencies.
function LoginIllustration() {
  return (
    <svg viewBox="0 0 360 420" className="w-full max-w-sm" fill="none">
      {/* leaves - left */}
      <g opacity="0.9">
        <path d="M40 380c-10-60 10-120 60-150-20 50-20 110 10 150H40Z" fill="#34D399" />
        <path d="M20 340c-6-40 8-80 40-100-14 34-14 74 6 100H20Z" fill="#10B981" />
      </g>
      {/* leaves - right */}
      <g opacity="0.9">
        <path d="M320 380c10-60-10-120-60-150 20 50 20 110-10 150h70Z" fill="#34D399" />
        <path d="M340 340c6-40-8-80-40-100 14 34 14 74-6 100h46Z" fill="#10B981" />
      </g>
      {/* sun */}
      <circle cx="300" cy="70" r="24" fill="#FBBF24" />
      {(() => {
        const rays = [];
        for (let i = 0; i < 8; i++) {
          const angle = (i * Math.PI) / 4;
          const x1 = 300 + Math.cos(angle) * 32;
          const y1 = 70 + Math.sin(angle) * 32;
          const x2 = 300 + Math.cos(angle) * 42;
          const y2 = 70 + Math.sin(angle) * 42;
          rays.push(
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#FBBF24"
              strokeWidth="4"
              strokeLinecap="round"
            />
          );
        }
        return rays;
      })()}

      {/* phone */}
      <rect x="110" y="60" width="140" height="300" rx="24" fill="#0F172A" />
      <rect x="120" y="78" width="120" height="264" rx="10" fill="#ffffff" />

      {/* screen content */}
      <text x="180" y="130" textAnchor="middle" fontSize="18" fontWeight="700" fill="#10B981" fontFamily="sans-serif">
        Login
      </text>
      <rect x="134" y="150" width="92" height="22" rx="6" fill="#D1FAE5" />
      <text x="180" y="165" textAnchor="middle" fontSize="9" fontWeight="600" fill="#059669" fontFamily="sans-serif">
        EMAIL ID
      </text>
      <rect x="134" y="182" width="92" height="22" rx="6" fill="#D1FAE5" />
      <text x="180" y="197" textAnchor="middle" fontSize="9" fontWeight="600" fill="#059669" fontFamily="sans-serif">
        PASSWORD
      </text>
      <rect x="134" y="214" width="92" height="24" rx="12" fill="#059669" />
      <text x="180" y="230" textAnchor="middle" fontSize="10" fontWeight="700" fill="#ffffff" fontFamily="sans-serif">
        Log In
      </text>

      {/* small check badges */}
      <circle cx="122" cy="150" r="10" fill="#059669" />
      <path d="M117 150l3.5 3.5L128 146" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="122" cy="182" r="10" fill="#059669" />
      <path d="M117 182l3.5 3.5L128 178" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />

      {/* people */}
      <g>
        {/* person left */}
        <circle cx="70" cy="230" r="14" fill="#F4C7A1" />
        <path d="M50 320c0-30 8-60 20-70 12 10 20 40 20 70H50Z" fill="#3F6B4A" />
        <path d="M84 245c14 8 22 20 26 34" stroke="#3F6B4A" strokeWidth="8" strokeLinecap="round" fill="none" />
      </g>
      <g>
        {/* person right */}
        <circle cx="290" cy="230" r="14" fill="#E9AF86" />
        <path d="M270 320c0-30 8-60 20-70 12 10 20 40 20 70h-40Z" fill="#D9A441" />
        <path d="M276 245c-14 8-22 20-26 34" stroke="#D9A441" strokeWidth="8" strokeLinecap="round" fill="none" />
      </g>

      {/* ground dots */}
      <circle cx="70" cy="390" r="4" fill="#A7F3D0" />
      <circle cx="290" cy="390" r="4" fill="#A7F3D0" />
    </svg>
  );
}