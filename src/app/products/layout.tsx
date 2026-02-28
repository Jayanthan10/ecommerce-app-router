export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Products Section</h1>
      {children}
    </div>
  )
}