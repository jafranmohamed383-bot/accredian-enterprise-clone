"use client";

import { useState } from "react";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is Accredian Enterprise?",
      answer:
        "Accredian Enterprise provides customized learning solutions for organizations.",
    },
    {
      question: "Who can use enterprise programs?",
      answer:
        "Organizations can use these programs to upskill their employees.",
    },
    {
      question: "Are programs industry focused?",
      answer:
        "Yes, programs are designed based on current industry requirements.",
    },
    {
      question: "How can we contact Accredian?",
      answer:
        "You can contact us through the contact form available on this page.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="bg-white rounded-xl shadow p-5"
            >
              <button
                className="w-full flex justify-between items-center text-left font-semibold"
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
              >
                {faq.question}

                <span className="text-blue-600 text-xl">
                  {open === index ? "-" : "+"}
                </span>
              </button>

              {open === index && (
                <p className="mt-4 text-gray-600">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}