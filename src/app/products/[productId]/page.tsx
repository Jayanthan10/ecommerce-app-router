import Image from "next/image"
import AddToCartButton from "@/app/components/AddToCartButton"

type Product = {
  id: number
  title: string
  price: number
  image: string
  description: string
}

type Props = {
  params: {
    productId: string
  }
}

async function getProduct(id: number): Promise<Product> {
  const res = await fetch(
    `https://fakestoreapi.com/products/${id}`,
    {
      next: { revalidate: 60 },
    }
  )

  if (!res.ok) {
    throw new Error("Failed to fetch product")
  }

  return res.json()
}

export default async function ProductDetail({ params }: Props) {
  const product = await getProduct(Number(params.productId))

  const cartProduct = {
    id: product.id,
    title: product.title,
    price: product.price,
    image: product.image,
  }

  return (
    <div className="grid md:grid-cols-2 gap-10">

      <Image
        src={product.image}
        alt={product.title}
        width={400}
        height={400}
        className="object-contain"
      />

      <div>
        <h1 className="text-3xl font-bold">
          {product.title}
        </h1>

        <p className="text-gray-600 mt-4">
          {product.description}
        </p>

        <p className="text-blue-600 text-2xl mt-4 font-bold">
          ${product.price}
        </p>

        <div className="mt-6">
          <AddToCartButton product={cartProduct} />
        </div>
      </div>

    </div>
  )
}