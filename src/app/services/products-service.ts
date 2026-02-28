import { ServiceBase } from "./service-base"

export class ProductsService extends ServiceBase {

  static async getProducts() {
    const response = await fetch(this.getUrl("/products"), {
      cache: "no-store",
    })

    if (!response.ok) {
      throw new Error("Failed to fetch products")
    }

    return await response.json()
  }

  static async getProductById(id: number) {

    if (!id) {
      throw new Error("Invalid product ID")
    }

    const response = await fetch(
      this.getUrl(`/products/${id}`),
      {
        cache: "no-store", 
      }
    )

    if (!response.ok) {
      throw new Error(`Product with ID ${id} not found`)
    }

    return await response.json()
  }
}