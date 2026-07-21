export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        <div>
          <h2 className="text-2xl font-bold text-blue-400">
            Accredian
          </h2>

          <p className="mt-4 text-gray-400">
            Building future-ready organizations through
            enterprise learning solutions.
          </p>
        </div>

        <div>
          <h3 className="font-bold mb-4">
            Quick Links
          </h3>

          <p className="text-gray-400">Home</p>
          <p className="text-gray-400">Enterprise</p>
          <p className="text-gray-400">Programs</p>
          <p className="text-gray-400">Contact</p>
        </div>

        <div>
          <h3 className="font-bold mb-4">
            Contact Us
          </h3>

          <p className="text-gray-400">
            Email: info@accredian.com
          </p>

          <p className="text-gray-400">
            Phone: +91 00000 00000
          </p>
        </div>

      </div>

      <div className="text-center text-gray-500 mt-10">
        © 2026 Accredian Enterprise Clone
      </div>
    </footer>
  );
}