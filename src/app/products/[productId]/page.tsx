"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import AddToCartButton from "@/app/components/AddToCartButton"

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

  useEffect(() => {
    async function fetchProduct() {
      const res = await fetch(
        `https://fakestoreapi.com/products/${productId}`
      )
      const data = await res.json()
      setProduct(data)
      setLoading(false)
    }

    if (productId) fetchProduct()
  }, [productId])

  if (loading) return <p>Loading product...</p>
  if (!product) return <p>Product not found.</p>

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

        <p className="text-blue-600 text-2xl font-bold mb-6">
          ${product.price}
        </p>

        {/* 🛒 ADD TO CART */}
        <AddToCartButton product={product} />
      </div>
    </div>
  )
}