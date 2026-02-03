import { Link } from "react-router-dom";
import logo from "C:/Users/Zaid Chikte/Desktop/Ahaan Hande/frontend/src/assets/logo1.jpg";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <nav className="navbar">
          <div className="logo">
            <Link to="/">
            <img src={logo}
            alt="Fruit Export Logo"
            className="cursor-pointer h-10" />
            </Link>
          </div>
        </nav>

        <div className="flex gap-12 font-medium text-gray-700">
          <Link className="hover:text-emerald-600 transition" to="/">Home</Link>
          <Link className="hover:text-emerald-600 transition" to="/products">Our Products</Link>
          <Link className="hover:text-emerald-600 transition" to="/contact">Contact us</Link>
          <Link className="hover:text-emerald-600 transition" to="/about">About us</Link>
        </div>

        <Link
          to="/contact"
          className="bg-emerald-600 text-white px-5 py-2 rounded-lg hover:bg-emerald-700 transition"
        >
          Get a Quote
        </Link>
      </div>
    </nav>
  );
}