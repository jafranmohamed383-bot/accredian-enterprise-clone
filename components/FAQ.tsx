export default function FAQ() {
  const faqs = [
    {
      question: "What is Accredian Enterprise?",
      answer:
        "Accredian Enterprise provides customized learning solutions for organizations.",
    },
    {
      question: "Who can use enterprise programs?",
      answer:
        "Companies can use these programs to train and upskill their employees.",
    },
    {
      question: "Are programs industry focused?",
      answer:
        "Yes, programs are designed according to current industry requirements.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12">
        Frequently Asked Questions
      </h2>

      <div className="max-w-4xl mx-auto px-6 space-y-5">
        {faqs.map((faq) => (
          <div
            key={faq.question}
            className="bg-white p-6 rounded-xl shadow"
          >
            <h3 className="font-bold text-lg">
              {faq.question}
            </h3>

            <p className="mt-3 text-gray-600">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}