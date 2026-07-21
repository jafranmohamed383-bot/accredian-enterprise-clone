export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <div>
          <span className="text-blue-600 font-semibold">
            Enterprise Learning Solutions
          </span>

          <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-tight">
            Transform Your Workforce
            <span className="text-blue-600">
              {" "}With Future-Ready Skills
            </span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            Empower your employees with industry-focused learning
            programs designed to improve skills, productivity and
            business growth.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
              Get Started
            </button>

            <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition">
              Learn More
            </button>
          </div>
        </div>


        <div className="bg-white rounded-2xl shadow-xl h-80 flex items-center justify-center border">

          <div className="text-center">
            <div className="h-24 w-24 bg-blue-100 rounded-full mx-auto mb-5 flex items-center justify-center">
              🎓
            </div>

            <p className="text-gray-500 font-medium">
              Enterprise Learning Image
            </p>

            <p className="text-sm text-gray-400 mt-2">
              Upskill your teams with modern programs
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}