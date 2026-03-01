"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import AddToCartButton from "@/app/components/AddToCartButton"

type Product = {
  id: number
  title: string
  price: number
  image: string
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const searchParams = useSearchParams()
  const query = searchParams.get("query") || ""

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("https://fakestoreapi.com/products")
        const data = await res.json()
        setProducts(data)
      } catch (error) {
        console.error("Failed to fetch products")
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  )

  if (loading) return <p>Loading products...</p>

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">All Products</h1>

      {filteredProducts.length === 0 && (
        <p className="text-red-500">No products found.</p>
      )}

      <div className="grid md:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="border p-4 rounded-lg shadow"
          >
            <Link href={`/products/${product.id}`}>
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
            </Link>

            <p className="text-blue-600 font-bold mt-2">
              ${product.price}
            </p>

            <div className="mt-4">
              <AddToCartButton product={product} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}