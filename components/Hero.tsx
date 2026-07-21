import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-white py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>
          <span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full font-semibold text-sm">
            Enterprise Learning Solutions
          </span>

          <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-tight text-gray-900">
            Transform Your Workforce
            <span className="text-blue-600">
              {" "}With Future-Ready Skills
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Empower your employees with industry-focused learning
            programs designed to improve skills, productivity,
            leadership and business growth.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all duration-300 text-white px-8 py-3 rounded-lg shadow-md">
              Get Started
            </button>

            <button className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white hover:scale-105 transition-all duration-300 px-8 py-3 rounded-lg shadow-md">
              Learn More
            </button>
          </div>

          <div className="mt-10 flex gap-8">
            <div>
              <h3 className="text-2xl font-bold text-blue-600">500+</h3>
              <p className="text-gray-600">Enterprise Clients</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-blue-600">50K+</h3>
              <p className="text-gray-600">Professionals Trained</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-blue-600">95%</h3>
              <p className="text-gray-600">Success Rate</p>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="bg-white rounded-2xl shadow-xl border p-8 flex items-center justify-center">

          {/* Replace this placeholder with your image later */}
          <div className="text-center">
            <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center text-5xl mx-auto">
              🎓
            </div>

            <h3 className="mt-6 text-2xl font-bold text-gray-800">
              Enterprise Learning
            </h3>

            <p className="mt-3 text-gray-500">
              Upskill your workforce with modern,
              industry-ready learning programs.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}