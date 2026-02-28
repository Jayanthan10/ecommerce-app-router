"use client"
import { useCart } from "../context/CartContext"

export default function CartItem({ item }: any) {
  const { removeFromCart } = useCart()

  return (
    <div className="flex justify-between bg-white p-4 rounded shadow mb-4">
      <span>{item.title}</span>
      <button
        onClick={() => removeFromCart(item.id)}
        className="text-red-500"
      >
        Remove
      </button>
    </div>
  )
}