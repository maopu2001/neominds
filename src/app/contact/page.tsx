import React from "react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>

        <div className="prose prose-lg">
          <p className="mb-4">
            Have questions or want to learn more about NeoMinds? We&apos;d love
            to hear from you! Fill out the form below or reach out to us using
            the contact information provided.
          </p>

          <form className="mt-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <div className="space-y-3">
              <p>
                <strong>Email:</strong> neominds.bd@gmail.com
              </p>
              <p>
                <strong>Phone:</strong> +8801521712539
              </p>
              <p>
                <strong>Address:</strong> Rangamati
              </p>
            </div>
          </div>

          <div className="mt-8">
            <Link
              href="/"
              className="text-blue-600 hover:text-blue-800 transition duration-300"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
