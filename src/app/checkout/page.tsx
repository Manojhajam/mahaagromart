"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";

export default function CheckoutPage() {
  const router = useRouter();
  const { items, totalItems, totalPrice, clearCart } = useCart();
  const [placed, setPlaced] = useState(false);
  const [payment, setPayment] = useState("COD");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const updateField = (field: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setPlaced(true);
    clearCart();
  };

  if (placed) {
    return (
      <section className="container py-16 flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
          <svg
            className="w-8 h-8 text-primary-light"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-text-dark mb-3">
          Order Placed Successfully!
        </h1>
        <p className="text-text-body mb-8 max-w-md">
          Thank you for your purchase. Our team will contact you shortly to
          confirm your order details.
        </p>
        <button
          onClick={() => router.push("/")}
          className="bg-primary hover:bg-green-800 text-white font-medium py-3 px-8 rounded-xl transition-colors"
        >
          Continue Shopping
        </button>
      </section>
    );
  }

  if (items.length === 0) {
    return (
      <section className="container py-16 flex flex-col items-center text-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-text-dark mb-4">
          Checkout
        </h1>
        <p className="text-text-body mb-8">Your cart is empty.</p>
        <button
          onClick={() => router.push("/category")}
          className="bg-primary hover:bg-green-800 text-white font-medium py-3 px-8 rounded-xl transition-colors"
        >
          Browse Products
        </button>
      </section>
    );
  }

  const inputClass =
    "w-full border border-gray-300 rounded-xl px-4 py-3 text-sm text-text-dark placeholder-gray-400 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors";

  return (
    <section className="container py-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-text-dark mb-8">
        Checkout
      </h1>

      <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h2 className="text-lg font-bold text-text-dark mb-4">
              Shipping Details
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                required
                type="text"
                placeholder="Full Name"
                value={form.name}
                onChange={(e) => updateField("name", e.target.value)}
                className={inputClass}
              />
              <input
                required
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={(e) => updateField("email", e.target.value)}
                className={inputClass}
              />
              <input
                required
                type="tel"
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) => updateField("phone", e.target.value)}
                className={inputClass}
              />
              <input
                required
                type="text"
                placeholder="City"
                value={form.city}
                onChange={(e) => updateField("city", e.target.value)}
                className={inputClass}
              />
              <input
                required
                type="text"
                placeholder="State"
                value={form.state}
                onChange={(e) => updateField("state", e.target.value)}
                className={inputClass}
              />
              <input
                required
                type="text"
                pattern="[0-9]{6}"
                title="6-digit PIN code"
                placeholder="PIN Code"
                value={form.pincode}
                onChange={(e) => updateField("pincode", e.target.value)}
                className={inputClass}
              />
            </div>
            <textarea
              required
              placeholder="Full Address"
              rows={3}
              value={form.address}
              onChange={(e) => updateField("address", e.target.value)}
              className={`${inputClass} mt-4 resize-none`}
            />
          </div>

          <div>
            <h2 className="text-lg font-bold text-text-dark mb-4">
              Payment Method
            </h2>
            <div className="space-y-3">
              <label className="flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-3 cursor-pointer hover:bg-primary-bg transition-colors">
                <input
                  type="radio"
                  name="payment"
                  checked={payment === "COD"}
                  onChange={() => setPayment("COD")}
                  className="accent-primary w-4 h-4"
                />
                <span className="text-sm font-medium text-text-dark">
                  Cash on Delivery
                </span>
              </label>
              <label className="flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-3 cursor-pointer hover:bg-primary-bg transition-colors">
                <input
                  type="radio"
                  name="payment"
                  checked={payment === "UPI"}
                  onChange={() => setPayment("UPI")}
                  className="accent-primary w-4 h-4"
                />
                <span className="text-sm font-medium text-text-dark">UPI</span>
              </label>
              <label className="flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-3 cursor-pointer hover:bg-primary-bg transition-colors">
                <input
                  type="radio"
                  name="payment"
                  checked={payment === "Card"}
                  onChange={() => setPayment("Card")}
                  className="accent-primary w-4 h-4"
                />
                <span className="text-sm font-medium text-text-dark">
                  Credit / Debit Card
                </span>
              </label>
            </div>
          </div>
        </div>

        <div>
          <div className="lg:sticky lg:top-4 bg-gray-50 rounded-2xl p-5">
            <h2 className="text-lg font-bold text-text-dark mb-4">
              Order Summary ({totalItems})
            </h2>
            <div className="space-y-4 max-h-80 overflow-y-auto">
              {items.map((item) => (
                <div key={item.id} className="flex gap-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium text-text-dark truncate">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-400">Qty: {item.quantity}</p>
                    <p className="text-primary-light font-bold text-sm mt-1">
                      {item.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-gray-200 mt-4 pt-4 space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Subtotal</span>
                <span className="font-bold text-text-dark">{totalPrice}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Delivery</span>
                <span className="font-medium text-primary-light">FREE</span>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-2">
                <span className="font-bold text-text-dark">Total</span>
                <span className="font-bold text-primary-light text-lg">
                  {totalPrice}
                </span>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-primary hover:bg-green-800 text-white font-medium py-3 rounded-xl transition-colors mt-4"
            >
              Place Order
            </button>
            <button
              type="button"
              onClick={() => router.back()}
              className="w-full text-center text-sm text-gray-500 hover:text-primary font-medium py-2 mt-2 transition-colors"
            >
              Back to Shopping
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
