import Image from "next/image"
import { notFound } from "next/navigation"

export const dynamic = "force-dynamic"

type Product = {
  id: number
  title: string
  price: number
  description: string
  image: string
}

async function getProduct(id: string): Promise<Product | null> {
  try {
    const res = await fetch(
      `https://fakestoreapi.com/products/${id}`,
      { cache: "no-store" }
    )

    if (!res.ok) return null

    const text = await res.text()
    if (!text) return null

    const data = JSON.parse(text)
    if (!data?.id) return null

    return data
  } catch {
    return null
  }
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ productId: string }>
}) {
  // ✅ IMPORTANT: unwrap params
  const { productId } = await params

  const product = await getProduct(productId)

  if (!product) return notFound()

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