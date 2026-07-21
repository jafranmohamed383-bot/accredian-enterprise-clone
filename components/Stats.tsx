export default function Stats() {
  const stats = [
    {
      number: "10K+",
      title: "Learners Trained",
    },
    {
      number: "200+",
      title: "Enterprise Partners",
    },
    {
      number: "95%",
      title: "Success Rate",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">

        {stats.map((item) => (
          <div
            key={item.title}
            className="p-8 text-center rounded-xl shadow-md bg-white"
          >
            <h2 className="text-4xl font-bold text-blue-600">
              {item.number}
            </h2>

            <p className="mt-3 text-gray-600">
              {item.title}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}