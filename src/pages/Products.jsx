import fruits from "../data/fruitsData";
import { Link } from "react-router-dom";

export default function Products() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      {fruits.map((fruit) => (
        <div key={fruit.id} className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden">
          <img src={fruit.image} alt={fruit.name} className="h-48 w-full object-cover" />
          <div className="p-4 text-center">
            <h3 className="font-semibold text-lg">{fruit.name}</h3>
            <Link to={`/products/${fruit.id}`} className="text-emerald-600 hover:underline">
              View Details →
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}