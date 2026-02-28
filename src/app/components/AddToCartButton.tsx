"use client"

import { useCart, Product } from "@/app/context/CartContext"

export default function AddToCartButton({
  product,
}: {
  product: Product
}) {
  const { addToCart } = useCart()

  return (
    <button
      onClick={() => addToCart(product)}
      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
    >
      Add to Cart
    </button>
  )
}