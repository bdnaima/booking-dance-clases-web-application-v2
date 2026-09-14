import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1E103D]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-white">
          Dance Academy
        </Link>

        <div className="hidden md:flex items-center gap-8 text-gray-600">
          <Link to="/classes" className="text-white">
            Classes
          </Link>

          <Link to="/events" className="text-white">
            Events
          </Link>

          <Link to="/about" className="text-white">
            About
          </Link>
        </div>

        <Link
          to="/contact"
          className="bg-amber-700 text-white px-6 py-2 rounded-full hover:bg-amber-600 transition"
        >
          Join Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
