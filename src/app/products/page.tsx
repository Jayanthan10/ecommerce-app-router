import Image from "next/image"
import Link from "next/link"

export const dynamic = "force-dynamic"

type Product = {
  id: number
  title: string
  price: number
  image: string
}

async function getProducts(): Promise<Product[]> {
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      cache: "no-store",
    })

    if (!res.ok) {
      return []
    }

    return await res.json()
  } catch {
    return []
  }
}

export default async function ProductsPage() {
  const products = await getProducts()

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">All Products</h1>

      {products.length === 0 && (
        <p className="text-red-500">
          Unable to load products at the moment.
        </p>
      )}

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