"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Team", path: "/team" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 w-full bg-background shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          NeoMinds
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`hover:text-blue-600 transition duration-300 ${
                pathname === link.path
                  ? "text-blue-600 font-medium"
                  : "text-gray-600"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-blue-600 text-background px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
