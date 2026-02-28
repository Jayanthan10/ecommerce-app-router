"use client"
import Image from "next/image"
import { useCart } from "../context/CartContext"

export default function CartPage() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    totalPrice,
  } = useCart()

  return (
    <div className="min-h-screen">
      <h2 className="text-3xl font-bold mb-8 text-center">Your Cart</h2>

      {cart.length === 0 && (
        <div className="text-center text-gray-500 text-lg">
          Your cart is empty.
        </div>
      )}

      <div className="space-y-6">
        {cart.map(item => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-white p-6 rounded-xl shadow-md"
          >
            {/* Left Section */}
            <div className="flex items-center gap-6">
              {item.image && (
                <Image
                  src={item.image}
                  alt={item.title}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              )}

              <div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-600">${item.price}</p>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => decreaseQuantity(item.id)}
                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
              >
                −
              </button>

              <span className="font-semibold text-lg">
                {item.quantity}
              </span>

              <button
                onClick={() => increaseQuantity(item.id)}
                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
              >
                +
              </button>

              <button
                onClick={() => removeFromCart(item.id)}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Total Section */}
      {cart.length > 0 && (
        <div className="mt-10 text-right text-2xl font-bold">
          Total: ${totalPrice.toFixed(2)}
        </div>
      )}
    </div>
  )
}