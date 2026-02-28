import { ProductsService } from "@/app/services/products-service"
import ProductList from "@/app/components/ProductList"

type Product = {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

type Props = {
  searchParams: Promise<{
    title?: string
  }>
}

export default async function Products({ searchParams }: Props) {
  const { title } = await searchParams

  const products: Product[] =
    await ProductsService.getProducts()

  const filteredProducts = title
    ? products.filter(product =>
        product.title
          .toLowerCase()
          .includes(title.toLowerCase())
      )
    : products

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">
        All Products
      </h2>

      <ProductList products={filteredProducts} />
    </div>
  )
}