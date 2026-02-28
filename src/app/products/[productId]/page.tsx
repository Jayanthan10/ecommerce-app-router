"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"

type Product = {
  id: number
  title: string
  price: number
  description: string
  image: string
}

export default function ProductDetailPage() {
  const params = useParams()
  const productId = params.productId as string

  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(
          `https://fakestoreapi.com/products/${productId}`
        )

        if (!res.ok) throw new Error()

        const data = await res.json()
        setProduct(data)
      } catch {
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    if (productId) fetchProduct()
  }, [productId])

  if (loading) return <p>Loading product...</p>
  if (error || !product)
    return <p className="text-red-500">Failed to load product.</p>

  return (
    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
      <Image
        src={product.image}
        alt={product.title}
        width={400}
        height={400}
        className="object-contain"
      />

      <div>
        <h1 className="text-3xl font-bold mb-4">
          {product.title}
        </h1>

        <p className="text-gray-600 mb-6">
          {product.description}
        </p>

        <p className="text-blue-600 text-2xl font-bold">
          ${product.price}
        </p>
      </div>
    </div>
  )
}