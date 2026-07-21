export default function Hero() {
  return (
    <section className="bg-blue-50 py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        <div>
          <h1 className="text-5xl font-bold leading-tight">
            Transform Your Workforce
            <span className="text-blue-600">
              {" "}With Future-Ready Skills
            </span>
          </h1>

          <p className="mt-5 text-gray-600 text-lg">
            Empower your employees with industry-focused learning
            programs designed for enterprise growth.
          </p>

          <button className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-lg">
            Get Started
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-lg h-72 flex items-center justify-center">
          <p className="text-gray-500">
            Enterprise Learning Image
          </p>
        </div>

      </div>
    </section>
  );
}