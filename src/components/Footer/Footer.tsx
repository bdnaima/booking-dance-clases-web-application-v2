import { FaInstagram, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-2xl font-bold">Dance Academy</h2>

          <p className="mt-4 text-gray-400">
            Celebrating dance, culture and community.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Explore</h3>

          <ul className="space-y-2 text-gray-400">
            <li>
              <Link to="/classes" className="hover:text-white transition">
                Classes
              </Link>
            </li>
            <li>
              <Link to="/events" className="hover:text-white transition">
                Events
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white transition">
                About
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Follow us</h3>

          <div className="flex gap-4 text-2xl">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="hover:text-purple-400 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="hover:text-purple-400 transition"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 py-4 text-center text-gray-400">
        © 2026 Dance Academy
      </div>
    </footer>
  );
};

export default Footer;
