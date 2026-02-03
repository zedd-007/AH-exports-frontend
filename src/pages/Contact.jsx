import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    try {
      const res = await fetch("http://localhost:5000/api/contact/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccess("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSuccess("❌ Something went wrong. Try again.");
      }
    } catch (error) {
      setSuccess("❌ Server not reachable.");
    }

    setLoading(false);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-emerald-50 to-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

        {/* LEFT INFO PANEL */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Let’s Talk Business 🌍
          </h1>

          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Whether you're looking for export pricing, seasonal availability,
            documentation support, or long-term partnerships — we’re here to help.
          </p>

          <div className="space-y-4 text-gray-700 text-lg">
            <p className="flex items-center gap-3">
              📍 <span><strong>Location:</strong> Navi Mumbai, Maharashtra, India</span>
            </p>
            <p className="flex items-center gap-3">
              📧 <span><strong>Email:</strong> 
              <a
                href="mailto:info@ahaanexport.com"
                className="text-emerald-600 hover:underline ml-1"
              >
                info@ahaanexport.com
              </a></span>
            </p>
            <p className="flex items-center gap-3">
              📞 <span><strong>Phone:</strong> (+91) 90043 42208</span>
            </p>
          </div>

          <div className="mt-10 flex gap-4">
            <span className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium">
              Export Certified
            </span>
            <span className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium">
              Global Logistics
            </span>
            <span className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium">
              Farm-to-Port Supply
            </span>
          </div>
        </div>

        {/* RIGHT FORM CARD */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-10 space-y-6 border border-emerald-100"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Send us a message ✉️
          </h2>

          <p className="text-gray-500 mb-4">
            Our export team usually replies within 24 hours.
          </p>

          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />

          <textarea
            rows="5"
            name="message"
            placeholder="Tell us what you’re looking for..."
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-emerald-600 text-white py-3 rounded-xl hover:bg-emerald-700 transition font-semibold shadow-md disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && (
            <p className="text-center text-sm mt-3 text-emerald-600 font-medium">
              {success}
            </p>
          )}

          <p className="text-center text-sm text-gray-500 mt-2">
            Or email us directly at{" "}
            <a
              href="mailto:info@ahaanexport.com"
              className="text-emerald-600 hover:underline font-medium"
            >
              info@ahaanexport.com
            </a>
          </p>
        </form>

      </div>
    </section>
  );
}