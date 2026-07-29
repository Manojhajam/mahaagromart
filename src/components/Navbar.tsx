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
} from "@ant-design/icons";
import Image from "next/image";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div>
      <div className="bg-green-900">
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
        <button
          type="button"
          className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          <FilterOutlined />
          <span>All Categories</span>
          <DownOutlined className="text-xs" />
        </button>

        {/* Search bar */}
        <div className="flex flex-1 max-w-2xl items-center overflow-hidden rounded-full border border-gray-200">
          <input
            type="text"
            placeholder="Search ...."
            className="flex-1 bg-white px-5 py-3 text-sm text-gray-700 placeholder-gray-400 outline-none"
          />
          <button
            type="button"
            className="flex items-center gap-2 bg-yellow-400 px-6 py-3 text-sm font-bold text-black hover:bg-yellow-500"
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
          <button type="button" aria-label="Cart" className="text-lg">
            <ShoppingCartOutlined />
          </button>
        </div>
      </div>

      <nav className="w-full">
        <div className="container flex items-center justify-between h-16 border-2 border-gray-400 rounded-md mt-2 bg-gray-100">
          <ul className="flex items-center gap-8 ml-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`text-md font-bold transition-colors ${
                    pathname === item.href
                      ? "text-yellow-500 border-b-2 border-yellow-500 pb-1"
                      : "text-gray-800 hover:text-yellow-500"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
