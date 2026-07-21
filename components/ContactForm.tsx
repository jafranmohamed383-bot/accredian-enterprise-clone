"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      setMessage(data.message);

      setForm({
        name: "",
        email: "",
        company: "",
      });
    } catch {
      setMessage("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section className="py-24 px-6 bg-blue-50">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">

        <h2 className="text-4xl font-bold text-center">
          Contact Us
        </h2>

        <p className="text-center text-gray-600 mt-3 mb-8">
          Tell us about your organization and we'll get in touch.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={form.company}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 hover:scale-[1.02] transition-all duration-300 text-white py-3 rounded-lg shadow-md disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>

        </form>

        {message && (
          <p className="mt-6 text-center text-green-600 font-semibold">
            {message}
          </p>
        )}

      </div>
    </section>
  );
}