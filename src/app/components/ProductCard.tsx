"use client"

import Image from "next/image"
import Link from "next/link"
import AddToCartButton from "./AddToCartButton"
import { Product } from "@/app/context/CartContext"

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
      <Link href={`/products/${product.id}`}>
        <Image
          src={product.image}
          alt={product.title}
          width={200}
          height={200}
          className="mx-auto object-contain h-40"
        />
        <h3 className="mt-4 font-semibold text-gray-900 line-clamp-2 hover:text-blue-600 transition-colors duration-200">
          {product.title}
        </h3>
      </Link>

      <p className="text-blue-600 font-bold mt-2">
        ${product.price}
      </p>

      <AddToCartButton product={product} />
    </div>
  )
}