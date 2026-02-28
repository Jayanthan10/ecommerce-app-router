"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useCart } from "@/app/context/CartContext"
import { ShoppingCart } from "lucide-react"

export default function Navbar() {
  const pathname = usePathname()
  const { totalItems } = useCart()

  const linkStyle = (path: string) =>
    `transition font-medium ${
      pathname.startsWith(path)
        ? "text-blue-400"
        : "text-gray-200 hover:text-white"
    }`

  return (
    <nav className="bg-black sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">

        <Link href="/" className="text-2xl font-bold text-white tracking-wide">
          Ecom
        </Link>

        <div className="flex gap-10 items-center text-sm">
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
            className="relative text-gray-200 hover:text-white transition"
          >
            <ShoppingCart size={22} />

            {totalItems > 0 && (
              <span className="absolute -top-2 -right-3 bg-blue-600 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                {totalItems}
              </span>
            )}
          </Link>
        </div>

      </div>
    </nav>
  )
}