export default function Services() {
  const services = [
    {
      title: "Leadership Programs",
      desc: "Develop leadership skills with expert-designed learning paths.",
    },
    {
      title: "Technical Upskilling",
      desc: "Build future-ready technical skills for your workforce.",
    },
    {
      title: "Custom Enterprise Training",
      desc: "Customized solutions based on your organization's needs.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12">
        Our Enterprise Solutions
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-full mb-5"></div>

            <h3 className="text-xl font-bold mb-3">
              {service.title}
            </h3>

            <p className="text-gray-600">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}