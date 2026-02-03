import logo from "C:/Users/Zaid Chikte/Desktop/Ahaan Hande/frontend/src/assets/logo1.jpg"
import { Link } from "react-router-dom";
import FeatureCarousel from "../components/FeatureCarousel";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-emerald-50 to-white min-h-screen">
      
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
            Fresh Fruit Export <span className="text-emerald-600">Worldwide</span> 🍎
          </h1>
          <p className="mt-5 text-gray-600 text-lg">
            Supplying premium quality fruits globally with fast logistics,
            quality assurance, and trusted partnerships.
          </p>
          <div className="mt-8 flex gap-4">
            <button className="bg-emerald-600 text-white px-6 py-3 rounded-xl hover:bg-emerald-700 transition">
              <Link className="hover:text-emerald-400 hover:underline transition" to="/products">Explore Products</Link>
            </button>
            <button className="border border-emerald-600 text-emerald-600 px-6 py-3 rounded-xl hover:bg-emerald-50 ">
              <Link className="hover:text-emerald-400 hover:underline transition" to="/contact">Get a Quote</Link>
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src={logo}
            alt="Fruits"
            className="rounded-2xl shadow-xl w-full max-w-md"
          />
        </div>
      </section>

      {/* Features */}
      <FeatureCarousel />

      {/* CTA */}
      <section className="py-16 bg-emerald-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to export with confidence?</h2>
        <p className="mb-6">Get in touch today for pricing & partnerships.</p>
        <Link to="/contact">
        <button className="bg-white text-emerald-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition">
          Contact Us
        </button>
        </Link>
      </section>

    </div>
  );
}