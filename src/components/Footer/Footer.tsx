import { FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-2xl font-bold">Dance Academy</h2>

          <p className="mt-4 text-gray-400">
            Celebrating Bollywood dance, culture and community.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Explore</h3>

          <ul className="space-y-2 text-gray-400">
            <li>Classes</li>
            <li>Events</li>
            <li>Gallery</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Follow us</h3>

          <div className="flex gap-4 text-2xl">
            <FaInstagram />
            <FaFacebook />
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
