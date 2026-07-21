export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white py-14">
      <div className="max-w-6xl mx-auto px-6 grid gap-10 md:grid-cols-4">

        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold text-blue-400">
            Accredian
          </h2>

          <p className="mt-4 text-gray-400 leading-relaxed">
            Empowering organizations with future-ready
            enterprise learning solutions and skill development
            programs.
          </p>
        </div>


        {/* Company */}
        <div>
          <h3 className="font-bold text-lg mb-5">
            Company
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li className="hover:text-white cursor-pointer">
              About
            </li>
            <li className="hover:text-white cursor-pointer">
              Enterprise
            </li>
            <li className="hover:text-white cursor-pointer">
              Programs
            </li>
            <li className="hover:text-white cursor-pointer">
              Careers
            </li>
          </ul>
        </div>


        {/* Resources */}
        <div>
          <h3 className="font-bold text-lg mb-5">
            Resources
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li className="hover:text-white cursor-pointer">
              Learning
            </li>
            <li className="hover:text-white cursor-pointer">
              FAQs
            </li>
            <li className="hover:text-white cursor-pointer">
              Support
            </li>
          </ul>
        </div>


        {/* Contact */}
        <div>
          <h3 className="font-bold text-lg mb-5">
            Contact
          </h3>

          <p className="text-gray-400">
            Email: info@accredian.com
          </p>

          <p className="text-gray-400 mt-3">
            Phone: +91 00000 00000
          </p>

          <button className="mt-5 bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>

      </div>


      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500">
        © 2026 Accredian Enterprise Clone. All rights reserved.
      </div>

    </footer>
  );
}