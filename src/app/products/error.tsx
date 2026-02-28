"use client"

import { useEffect } from "react"

export default function ProductsError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {

  useEffect(() => {
    console.error("Products Error:", error)
  }, [error])

  return (
    <div className="text-center py-16">
      <h2 className="text-2xl font-bold text-red-600 mb-4">
        Failed to load products
      </h2>

      <p className="text-gray-600 mb-6">
        Please check your connection or try again.
      </p>

      <button
        onClick={() => reset()}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
      >
        Retry
      </button>
    </div>
  )
}