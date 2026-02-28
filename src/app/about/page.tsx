export const metadata = {
  title: "About Us - Ecom",
}

export default function AboutPage() {
  return (
    <section className="max-w-4xl mx-auto py-16">
      <h1 className="text-4xl font-bold mb-6 text-center">
        About Ecom
      </h1>

      <p className="text-gray-700 leading-7 mb-6 text-lg">
        Ecom is a modern ecommerce platform built using Next.js App Router.
        Our mission is to provide high-quality products with a fast, seamless,
        and optimized shopping experience.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mt-12">
        <div className="bg-white shadow rounded-xl p-6 text-center">
          <h3 className="font-semibold text-gray-900 text-xl mb-3"> Fast Delivery</h3>
          <p className="text-gray-600">
            We ensure quick shipping and reliable service.
          </p>
        </div>

        <div className="bg-white shadow rounded-xl p-6 text-center">
          <h3 className="font-semibold text-gray-900 text-xl mb-3"> Secure Payment</h3>
          <p className="text-gray-600">
            Your transactions are encrypted and safe.
          </p>
        </div>

        <div className="bg-white shadow rounded-xl p-6 text-center">
          <h3 className="font-semibold text-gray-900 text-xl mb-3"> Quality Products</h3>
          <p className="text-gray-600">
            We carefully select premium items for our customers.
          </p>
        </div>
      </div>
    </section>
  )
}