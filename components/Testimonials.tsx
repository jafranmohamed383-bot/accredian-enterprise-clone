export default function Testimonials() {
  const reviews = [
    {
      name: "HR Manager",
      company: "Enterprise Company",
      text: "The learning programs helped our employees improve their skills.",
    },
    {
      name: "Team Lead",
      company: "Technology Company",
      text: "A great platform for building future-ready teams.",
    },
    {
      name: "Business Head",
      company: "Corporate Partner",
      text: "The training solutions matched our business requirements.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12">
        What Our Clients Say
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        {reviews.map((review) => (
          <div
            key={review.name}
            className="bg-gray-50 p-8 rounded-2xl shadow-md"
          >
            <p className="text-gray-600 mb-6">
              "{review.text}"
            </p>

            <h3 className="font-bold">
              {review.name}
            </h3>

            <p className="text-sm text-gray-500">
              {review.company}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}