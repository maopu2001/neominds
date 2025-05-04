import React from "react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About NeoMinds</h1>

        <div className="prose prose-lg">
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
            dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed
            auctor neque eu tellus rhoncus ut eleifend nibh porttitor.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Vision</h2>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed non
            mauris vitae erat consequat auctor eu in elit.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Team</h2>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            commodo cursus magna, vel scelerisque nisl consectetur et. Cras
            mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus
            ac cursus commodo.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Get in Touch</h2>
          <p className="mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras justo
            odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non
            mi porta gravida at eget metus.
          </p>

          <div className="mt-6">
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
