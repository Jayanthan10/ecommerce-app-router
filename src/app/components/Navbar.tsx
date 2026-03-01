"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCart } from "@/app/context/CartContext";
import { ShoppingCart } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { totalItems } = useCart();

  const isProductsPage = pathname === "/products";

  const [search, setSearch] = useState("");

  // Keep search value after refresh
  useEffect(() => {
    const query = searchParams.get("query");
    if (query) setSearch(query);
  }, [searchParams]);

  const linkStyle = (path: string) =>
    `transition font-medium ${
      pathname.startsWith(path)
        ? "text-blue-400"
        : "text-gray-200 hover:text-white"
    }`;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/products?query=${search}`);
  };

  return (
    <nav className="bg-black sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center gap-8">
        {/* LEFT - LOGO */}
        <Link href="/" className="text-2xl font-bold text-white">
          Ecom
        </Link>

        {/* CENTER - SEARCH */}
        {isProductsPage && (
          <form onSubmit={handleSearch} className="flex flex-1 max-w-xl">
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 px-4 py-2 bg-white text-black rounded-l-md outline-none"
            />
            <button
              type="submit"
              className="bg-blue-600 px-6 py-2 rounded-r-md text-white"
            >
              Search
            </button>
          </form>
        )}

        {/* RIGHT - LINKS */}
        <div className="flex gap-8 items-center text-sm ml-auto">
          <Link href="/products" className={linkStyle("/products")}>
            Products
          </Link>
          <Link href="/about" className={linkStyle("/about")}>
            About
          </Link>
          <Link href="/contact" className={linkStyle("/contact")}>
            Contact
          </Link>

          <Link
            href="/cart"
            className="relative text-gray-200 hover:text-white"
          >
            <ShoppingCart size={22} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-3 bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
