"use client";
import {
  EnvironmentFilled,
  FacebookFilled,
  InstagramFilled,
  MailOutlined,
  SearchOutlined,
  UserOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
  DownOutlined,
  FilterOutlined,
  MenuOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import Image from "next/image";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import CartDrawer from "@/components/CartDrawer";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "B2B", href: "/b2b" },
  {label: "Contact Us", href: "/contact" },
];

const categoryList = [
  { name: "Fruits & Vegetables", icon: "🍎" },
  { name: "Food Products", icon: "🥫" },
  { name: "Millets", icon: "🌾" },
  { name: "Fertilizers", icon: "🧪" },
  { name: "Pesticides", icon: "🧴" },
  { name: "Seeds", icon: "🌱" },
  { name: "Combo Packs", icon: "📦" },
  { name: "Gardening", icon: "🧑‍🌾" },
  { name: "Dairy & Eggs", icon: "🥛" },
  { name: "Oils", icon: "🫒" },
  { name: "Dry Fruits", icon: "🥜" },
  { name: "Grains & Rice", icon: "🌾" },
  { name: "Animal Feed", icon: "🐄" },
  { name: "Agro Engineering", icon: "🔧" },
  { name: "Noga", icon: "🌿" },
];

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [searchText, setSearchText] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems } = useCart();

  const handleSearch = (query?: string) => {
    const q = query || searchText.trim();
    if (q) {
      router.push(`/search?q=${encodeURIComponent(q)}`);
      setDropdownOpen(false);
    }
  };

  const handleCategorySelect = (category: string) => {
    router.push(`/category?cat=${encodeURIComponent(category)}`);
    setDropdownOpen(false);
  };

  return (
    <div>
      <div className="bg-primary-dark">
        <div className="container flex justify-between items-center py-3">
          <div>
            <EnvironmentFilled style={{ fontSize: 16, color: "white" }} />
            <span className=" text-base text-white ml-2">Location</span>
            <MailOutlined
              style={{ fontSize: 16, color: "white", marginLeft: 20 }}
            />
            <span className=" text-base text-white ml-2">
              info@mahaagromart.com
            </span>
          </div>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookFilled style={{ fontSize: 18, color: "white" }} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramFilled style={{ fontSize: 18, color: "white" }} />
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex items-center justify-between gap-6 px-4 py-4">
        <div>
          <Image
            src="/logo.webp"
            alt="MahaAgroMart Logo"
            width={120}
            height={60}
          />
        </div>
        {/* Category dropdown */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            onBlur={() => setTimeout(() => setDropdownOpen(false), 200)}
            className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            <FilterOutlined />
            <span>All Categories</span>
            <DownOutlined className="text-xs" />
          </button>
          {dropdownOpen && (
            <div className="absolute top-full mt-2 left-0 w-64 bg-white border border-gray-200 rounded-xl shadow-lg z-50 max-h-80 overflow-y-auto">
              {categoryList.map((cat) => (
                <button
                  key={cat.name}
                  type="button"
                  onClick={() => handleCategorySelect(cat.name)}
                  className="flex items-center gap-3 w-full px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                >
                  <span className="text-lg">{cat.icon}</span>
                  <span>{cat.name}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Search bar */}
        <div className="flex flex-1 max-w-2xl items-center overflow-hidden rounded-full border border-gray-200">
          <input
            type="text"
            placeholder="Search ...."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            className="flex-1 bg-white px-5 py-3 text-sm text-gray-700 placeholder-gray-400 outline-none"
          />
          <button
            type="button"
            onClick={()=>handleSearch()}
            className="flex items-center gap-2 bg-accent-light px-6 py-3 text-sm font-bold text-black hover:bg-accent"
          >
            SEARCH
            <SearchOutlined />
          </button>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-5 text-gray-800">
          <button type="button" aria-label="Account" className="text-lg">
            <UserOutlined />
          </button>
          <button type="button" aria-label="Wishlist" className="text-lg">
            <HeartOutlined />
          </button>
          <button
            type="button"
            aria-label="Cart"
            className="relative text-lg"
            onClick={() => setCartOpen(true)}
          >
            <ShoppingCartOutlined />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-danger text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {totalItems > 9 ? "9+" : totalItems}
              </span>
            )}
          </button>
        </div>
      </div>
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />

      <nav className="w-full">
        <div className="container flex items-center justify-between h-16 border border-gray-400 rounded-md mt-2 bg-gray-100">
          <ul className="hidden md:flex items-center gap-8 ml-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`text-md font-bold transition-colors ${
                    pathname === item.href
                      ? "text-accent border-b-2 border-accent pb-1"
                      : "text-gray-800 hover:text-accent"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="flex md:hidden items-center gap-2 ml-4 px-3 py-2 text-gray-800 hover:text-accent transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <CloseOutlined style={{ fontSize: 20 }} /> : <MenuOutlined style={{ fontSize: 20 }} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden container bg-gray-50 border border-gray-300 rounded-md mt-1 p-4 shadow-lg">
            <ul className="flex flex-col gap-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-2 text-sm font-bold rounded-md transition-colors ${
                      pathname === item.href
                        ? "text-accent bg-accent/10"
                        : "text-gray-800 hover:text-accent hover:bg-gray-100"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
