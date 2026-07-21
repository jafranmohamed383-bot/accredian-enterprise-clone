export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid gap-10 md:grid-cols-4">

        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold text-blue-500">
            Accredian
          </h2>

          <p className="mt-4 text-gray-400 leading-7">
            Empowering organizations with enterprise learning
            solutions that help teams grow with future-ready skills.
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-xl font-semibold mb-5">
            Company
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li className="hover:text-white cursor-pointer transition">Home</li>
            <li className="hover:text-white cursor-pointer transition">Enterprise</li>
            <li className="hover:text-white cursor-pointer transition">Programs</li>
            <li className="hover:text-white cursor-pointer transition">About</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-xl font-semibold mb-5">
            Resources
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li className="hover:text-white cursor-pointer transition">Blog</li>
            <li className="hover:text-white cursor-pointer transition">FAQs</li>
            <li className="hover:text-white cursor-pointer transition">Support</li>
            <li className="hover:text-white cursor-pointer transition">Privacy Policy</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-5">
            Contact
          </h3>

          <p className="text-gray-400">
            📧 info@accredian.com
          </p>

          <p className="mt-3 text-gray-400">
            📞 +91 98765 43210
          </p>

          <button className="mt-6 bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all duration-300 text-white px-6 py-3 rounded-lg shadow-md">
            Get Started
          </button>
        </div>

      </div>

      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500">
        © 2026 Accredian Enterprise Clone. All Rights Reserved.
      </div>
    </footer>
  );
}