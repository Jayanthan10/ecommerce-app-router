import Image from "next/image"
import Link from "next/link"

type Product = {
  id: number
  title: string
  price: number
  image: string
}

async function getProducts(): Promise<Product[]> {
  const res = await fetch("https://fakestoreapi.com/products", {
    next: { revalidate: 60 }, // Production-safe ISR
  })

  if (!res.ok) {
    throw new Error("Failed to fetch products")
  }

  return res.json()
}

export default async function ProductsPage() {
  const products = await getProducts()

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">All Products</h1>

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

            <h2 className="mt-4 font-semibold line-clamp-2">
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