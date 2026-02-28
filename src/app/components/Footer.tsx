"use client"

import Link from "next/link"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      
      {/* Back To Top */}
      <div
        onClick={scrollToTop}
        className="bg-gray-800 text-center py-3 cursor-pointer hover:bg-gray-700 transition"
      >
        Back to Top ↑
      </div>

      {/* Navigation Section */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">

        {/* Column 1 */}
        <div>
          <h3 className="font-semibold mb-4 text-white">Shop</h3>
          <ul className="space-y-2">
            <li><Link href="/products" className="hover:text-white">All Products</Link></li>
            <li><Link href="/cart" className="hover:text-white">Cart</Link></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-semibold mb-4 text-white">Company</h3>
          <ul className="space-y-2">
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-semibold mb-4 text-white">Support</h3>
          <ul className="space-y-2">
            <li><Link href="/products" className="hover:text-white">Browse Products</Link></li>
            <li><Link href="/contact" className="hover:text-white">Help Center</Link></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="font-semibold mb-4 text-white">Account</h3>
          <ul className="space-y-2">
            <li><Link href="/cart" className="hover:text-white">View Cart</Link></li>
            <li><Link href="/" className="hover:text-white">Home</Link></li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} e-Commerce App. All rights reserved.
      </div>

    </footer>
  )
}