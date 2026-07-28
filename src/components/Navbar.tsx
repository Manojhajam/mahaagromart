"use client";
import {
  EnvironmentFilled,
  FacebookFilled,
  InstagramFilled,
  MailOutlined,
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
        <div className="flex justify-between items-center max-w-[1480px] px-4 py-3 mx-auto ">
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

      <div className="max-w-[1480px] mx-auto px-2">
        <Image
          src="/logo.webp"
          alt="MahaAgroMart Logo"
          width={120}
          height={60}
        />
      </div>

      <nav className="w-full">
        <div className="max-w-[1480px] mx-auto flex items-center justify-between h-16 px-2 border-2 border-gray-400 rounded-md mt-2 bg-gray-100">
          <ul className="flex items-center gap-8 ml-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`text-sm font-bold transition-colors ${
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
