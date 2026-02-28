"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

type Product = {
  id: number
  title: string
  price: number
  image: string
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("https://fakestoreapi.com/products")
        if (!res.ok) throw new Error()
        const data = await res.json()
        setProducts(data)
      } catch {
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">All Products</h1>

      {loading && <p>Loading products...</p>}
      {error && <p className="text-red-500">Failed to load products.</p>}

      <div className="grid md:grid-cols-3 gap-8">
        {products.map(product => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="border p-4 rounded-lg shadow hover:shadow-lg transition"
          >
            <Image
              src={product.image}
              alt={product.title}
              width={200}
              height={200}
              className="mx-auto object-contain h-40"
            />

            <h2 className="mt-4 font-semibold">
              {product.title}
            </h2>

            <p className="text-blue-600 font-bold mt-2">
              ${product.price}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}