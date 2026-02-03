import { Link } from "react-router-dom";
import dgft from "../assets/certificates/IMG_1787.jpeg";
import fssai from "../assets/certificates/IMG_1784.jpeg";
import apeda from "../assets/certificates/IMG_1789.jpeg";
import gst from "../assets/certificates/IMG_1785.jpeg";
import hdfc from "../assets/certificates/IMG_1788.jpeg";


const Footer = () => {
  return (
    <footer className="bg-emerald-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-3">AH Exports</h2>
          <p className="text-sm text-emerald-100">
            Premium fresh fruits exported worldwide with quality assurance and cold-chain logistics.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-emerald-300">Home</Link></li>
            <li><Link to="/products" className="hover:text-emerald-300">Products</Link></li>
            <li><Link to="/about" className="hover:text-emerald-300">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-emerald-300">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <p className="text-sm">Navi Mumbai, India</p>
          <p className="text-sm">info@ahaexport.com</p>
          <p className="text-sm">+91 90043 42208</p>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="font-semibold mb-3">Certifications</h3>
          <div className="flex flex-wrap gap-3 items-center">
            <img src={dgft} alt="DGFT" className="h-9 bg-white p-1 rounded shadow" />
            <img src={fssai} alt="FSSAI" className="h-9 bg-white p-1 rounded shadow" />
            <img src={apeda} alt="APEDA" className="h-9 bg-white p-1 rounded shadow" />
            <img src={gst} alt="Global GAP" className="h-9 bg-white p-1 rounded shadow" />
          </div>
          <h3 className="font-semibold mb-3">Bank</h3>
          <div className="flex flex-wrap gap-3 items-center">
            <img src={hdfc} alt="HDFC Bank" className="h-9 bg-white p-1 rounded shadow" />
          </div>
        </div>

      </div>

      <div className="text-center text-sm text-emerald-200 mt-8 border-t border-emerald-700 pt-4">
        © {new Date().getFullYear()} AH Exports. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;