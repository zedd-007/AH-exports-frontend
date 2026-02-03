import { useParams } from "react-router-dom";
import fruits from "../data/fruitsData";
import { Link } from "react-router-dom";

const FruitDetails = () => {
  const { id } = useParams();
  const fruit = fruits.find((f) => f.id === id);

  if (!fruit) return <div className="p-10">Fruit not found</div>;

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10">
      <img
        src={fruit.image}
        alt={fruit.name}
        className="rounded-xl shadow-lg w-full object-cover"
      />

      <div>
        <h1 className="text-4xl font-bold mb-4">{fruit.name}</h1>
        <p className="text-gray-600 mb-6">{fruit.description}</p>

        <div className="space-y-3 text-lg">
          <p><strong>Origin:</strong> {fruit.origin}</p>
          <p><strong>Season:</strong> {fruit.season}</p>
          <p><strong>Shelf Life:</strong> {fruit.shelfLife}</p>
          <p><strong>Packaging:</strong> {fruit.packaging}</p>
          <p><strong>Quality Standards:</strong> {fruit.quality}</p>
        </div>

        <Link to="/contact">
        <button className="mt-8 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
          Request Quote
        </button>
        </Link>
      </div>
    </div>
  );
};

export default FruitDetails;