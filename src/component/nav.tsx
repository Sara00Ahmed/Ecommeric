"use client";
import Link from "next/link";
import { useState } from "react";
import Logo from "./logo";
const navItems = [
  { name: "Home", path: "/home" },
  { name: "About", path: "/about" },
  { name: "Category", path: "/category" },
  { name: "Products", path: "/products" },
  { name: "Account", path: "/account" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-sky-800 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        <Logo />
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center md:space-x-8 absolute md:static left-0 top-full w-full md:w-auto bg-blue-600 md:bg-transparent transition-all duration-300 ease-in-out`}
        >
          {navItems.map(({ name, path }, index) => (
            <li key={index} className="px-4 py-2 md:p-0 text-center">
              <Link
                href={path}
                className="block hover:text-gray-300 transition-colors duration-200"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
