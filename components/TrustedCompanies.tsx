export default function TrustedCompanies() {
  const companies = [
    "Google",
    "Microsoft",
    "Amazon",
    "Infosys",
    "TCS",
    "Wipro",
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold mb-4">
          Trusted by Leading Companies
        </h2>

        <p className="text-gray-600 mb-10">
          Organizations trust us for enterprise learning solutions.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {companies.map((company) => (
            <div
              key={company}
              className="bg-white rounded-xl shadow p-5 font-semibold"
            >
              {company}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}