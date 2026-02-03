import { useEffect, useState } from "react";
import fruits from "../data/fruitsData";
import { Link } from "react-router-dom";

export default function FruitCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % fruits.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative max-w-6xl mx-auto overflow-hidden py-12">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {fruits.map((fruit) => (
          <div key={fruit.id} className="min-w-full px-6">
            <div className="bg-white rounded-3xl shadow-xl grid md:grid-cols-2 gap-8 p-8 items-center hover:shadow-2xl transition">
              <img
                src={fruit.image}
                alt={fruit.name}
                className="rounded-2xl w-full h-72 object-cover"
              />

              <div>
                <h2 className="text-3xl font-bold mb-4">{fruit.name}</h2>
                <p className="text-gray-600 mb-6">{fruit.shortDesc}</p>

                <Link
                  to={`/products/${fruit.id}`}
                  className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-xl hover:bg-emerald-700 transition"
                >
                  View Details →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {fruits.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition ${
              index === i ? "bg-emerald-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}