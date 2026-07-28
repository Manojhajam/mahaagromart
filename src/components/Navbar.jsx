"use client";
import {
  EnvironmentFilled,
  FacebookFilled,
  InstagramFilled,
  MailOutlined,
} from "@ant-design/icons";

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
        <div className="flex justify-between items-center max-w-[1480px] px-4 py-3 mx-auto ">
          <div>
            <EnvironmentFilled style={{ fontSize: 16, color: "white" }} />
            <span className=" text-base text-white ml-2">Location</span>
            <MailOutlined style={{ fontSize: 16, color: "white", marginLeft: 20 }} />
            <span className=" text-base text-white ml-2">info@mahaagromart.com</span>
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
    <nav className="w-full border-b border-gray-200 bg-white">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between h-16 px-4">
        <span className="text-xl font-bold text-green-600">MahaAgroMart</span>
        <ul className="flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? "text-green-600 border-b-2 border-green-600 pb-1"
                    : "text-gray-600 hover:text-green-600"
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
