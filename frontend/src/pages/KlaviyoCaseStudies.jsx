import React from "react";

export default function KlaviyoCaseStudies() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
        Klaviyo Case Studies
      </h1>
      <p className="text-gray-600 mb-8">
        Real results from ecommerce brands. Below is a Loom placeholder—swap it
        with your video URL when ready.
      </p>

      <div className="aspect-video w-full rounded-xl overflow-hidden bg-gray-100 border">
        {/* Loom placeholder – replace src later */}
        <iframe
          title="Klaviyo case studies"
          className="w-full h-full"
          src="https://www.loom.com/embed/placeholder"
          allowFullScreen
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-10">
        <div className="p-5 border rounded-lg">
          <h3 className="font-semibold mb-1">Welcome Flow Revamp</h3>
          <p className="text-sm text-gray-600">
            +60% open rate, +25% revenue per recipient after redesign and
            segmentation.
          </p>
        </div>
        <div className="p-5 border rounded-lg">
          <h3 className="font-semibold mb-1">Holiday 3-Email Sprint</h3>
          <p className="text-sm text-gray-600">
            $30,000 ✅ generated with Early Access → Live → Last Chance.
          </p>
        </div>
      </div>
    </section>
  );
}