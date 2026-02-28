import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-[70vh]">
      <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
        Welcome to Ecom
      </h1>

      <p className="text-gray-600 text-lg mb-10 max-w-xl">
        Premium products. Best prices. Fast delivery.
      </p>

      <Link
        href="/products"
        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg transition shadow-md hover:shadow-lg"
      >
        Shop Now
      </Link>
    </section>
  );
}
