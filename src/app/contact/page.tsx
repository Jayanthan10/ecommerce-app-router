export default function ContactPage() {
  return (
    <section className="max-w-3xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Contact Us
      </h1>

      <p className="text-gray-700 text-lg mb-10 text-center">
        We'd love to hear from you. Feel free to reach out to us using the
        information below.
      </p>

      <div className="bg-white shadow-md rounded-xl p-8 space-y-6">

        <div>
          <h3 className="font-semibold text-gray-900 text-xl mb-2"> Email</h3>
          <p className="text-gray-600">support@Ecom.com</p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900 text-xl mb-2"> Phone</h3>
          <p className="text-gray-600">+91 98765 43210</p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900 text-xl mb-2"> Address</h3>
          <p className="text-gray-600">
            123 Tech Street, Bangalore, India
          </p>
        </div>

      </div>
    </section>
  )
}