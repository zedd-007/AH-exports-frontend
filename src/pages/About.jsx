import React from "react";
import owner from "../../assets/owner.jpeg";

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-50 to-lime-50 py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              About us
            </h1>
            <p className="text-gray-600 leading-relaxed mb-6">
              We are a professionally managed business engaged in the trading and export of fresh fruits, catering to both domestic and international markets.
              <p>Led by Ahaan Hande (Proprietor), the business is backed by over 5 years of practical experience in the fresh produce industry. With direct involvement in farming and sourcing, we work closely with growers to ensure consistent quality, freshness, and reliable supply.
              </p>
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our line of business includes the trading and export of premium fruits such as Alphonso (Hapus) Mangoes, Pomegranates, Grapes, Oranges, Dragon Fruit, and Apples. Each product is carefully selected, graded, and packed to meet market and export standards.            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              In addition to business operations, the proprietor is currently pursuing an LL.B., bringing added strength in areas such as compliance, documentation, contracts, and regulatory understanding—an important advantage in domestic and international trade.
            </p>
            <p className="text-gray-600 leading-relaxed">
              At Ahaan Hande, we are committed to quality, transparency, and long-term partnerships, aiming to deliver fresh produce that meets the expectations of global buyers.
            </p>
          </div>

          <img
            src={owner}
            alt="Export logistics"
            className="rounded-2xl shadow-xl w-full"
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "10+", label: "Countries Served" },
            { value: "500+", label: "Happy Clients" },
            { value: "1M+", label: "Tons Exported" },
            { value: "24/7", label: "Logistics Support" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-emerald-50 rounded-2xl p-6 text-center shadow-md 
                        transition-all duration-300 ease-in-out 
                        hover:-translate-y-2 hover:shadow-xl hover:bg-emerald-100 cursor-pointer"
            >
              <h3 className="text-3xl font-bold text-emerald-700">{item.value}</h3>
              <p className="text-gray-600 mt-2">{item.label}</p>
            </div>
          ))}
        </div>

      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              ["🌱 Freshness First", "Direct-from-farm sourcing and cold-chain delivery."],
              ["🚢 Global Standards", "Compliance with international export certifications."],
              ["🤝 Trust & Transparency", "Long-term partnerships built on integrity."],
            ].map(([title, desc]) => (
              <div
                key={title}
                className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-3">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-emerald-600 py-16 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Partner with a Trusted Exporter
        </h2>
        <p className="mb-6 text-emerald-100">
          Let’s grow your business with fresh, reliable produce exports.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-emerald-700 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default About;