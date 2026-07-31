"use client";

import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { CloseOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons";

export default function CartDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { items, removeFromCart, updateQuantity, totalItems, totalPrice } =
    useCart();
  const router = useRouter();

  const handleCheckout = () => {
    onClose();
    router.push("/checkout");
  };

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-50 transition-opacity"
          onClick={onClose}
        />
      )}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-white z-50 shadow-2xl transform transition-transform duration-300 flex flex-col ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <h2 className="text-lg font-bold text-text-dark">
            Cart ({totalItems})
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-text-body text-xl"
          >
            <CloseOutlined />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
          {items.length === 0 ? (
            <p className="text-center text-gray-400 mt-20">
              Your cart is empty
            </p>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex gap-3 bg-gray-50 rounded-xl p-3"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-medium text-text-dark truncate">
                    {item.title}
                  </h3>
                  <p className="text-primary-light font-bold text-sm mt-1">
                    {item.price}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-7 h-7 flex items-center justify-center rounded border border-gray-300 text-gray-500 hover:bg-gray-100"
                    >
                      <MinusOutlined className="text-xs" />
                    </button>
                    <span className="w-6 text-center text-sm font-medium">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-7 h-7 flex items-center justify-center rounded border border-gray-300 text-gray-500 hover:bg-gray-100"
                    >
                      <PlusOutlined className="text-xs" />
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-gray-400 hover:text-danger self-start"
                >
                  <CloseOutlined />
                </button>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t px-5 py-4 space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">Subtotal</span>
              <span className="font-bold text-text-dark">{totalPrice}</span>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full bg-primary hover:bg-green-800 text-white font-medium py-3 rounded-xl transition-colors"
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
