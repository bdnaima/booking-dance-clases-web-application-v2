import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="
      sticky top-0 z-50
      bg-white/90 backdrop-blur-md
      border-b border-gray-100
    "
    >
      <div
        className="
        max-w-7xl mx-auto
        px-6 py-4
        flex items-center justify-between
      "
      >
        <Link to="/" className="text-2xl font-bold text-purple-700">
          Dance Academy
        </Link>

        <div
          className="
          hidden md:flex
          items-center gap-8
          text-gray-600
        "
        >
          <Link to="/classes">Classes</Link>

          <Link to="/events">Events</Link>

          <Link to="/gallery">Gallery</Link>

          <Link to="/about">About</Link>
        </div>

        <button
          className="
            bg-purple-600
            text-white
            px-6 py-2
            rounded-full
            hover:bg-purple-700
            transition
          "
        >
          Join Us
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
