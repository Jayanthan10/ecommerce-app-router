import "./globals.css"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { CartProvider } from "./context/CartContext"
import { Suspense } from "react"

export const metadata = {
  title: "Ecom-AR",
  description: "Modern Ecommerce App",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800 antialiased">
        <CartProvider>

          {/* 🔥 Wrap Navbar in Suspense here */}
          <Suspense fallback={null}>
            <Navbar />
          </Suspense>

          <main className="min-h-screen max-w-7xl mx-auto px-6 py-12">
            {children}
          </main>

          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}