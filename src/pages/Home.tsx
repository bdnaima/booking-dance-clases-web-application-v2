import { Link } from "react-router-dom";

import hero from "../assets/images/hero_img.webp";
import Stats from "../components/UI/Stats";
import DanceClasses from "../components/UI/DanceClasses";

const Home = () => {
  return (
    <>
      <section
        className="relative h-[85vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${hero})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E103D]/95 via-[#4C1D95]/70 to-transparent" />

        <div className="relative max-w-7xl mx-auto h-full flex items-center px-6">
          <div className="max-w-xl text-white">
            <p className="uppercase tracking-[6px] text-purple-300 font-semibold">
              Dance Academy
            </p>

            <h1 className="mt-4 text-6xl font-bold leading-tight">
              For the love of
              <span className="block text-amber-700">Dance</span>
            </h1>

            <p className="mt-6 text-lg text-gray-200">
              Discover dance classes, workshops and events. Whether you love
              Hip-Hop, Bollywood, Ballet, Contemporary or Salsa, there's a place
              for you.
            </p>

            <div className="mt-10 flex gap-4">
              <Link
                to="/classes"
                className="rounded-full bg-amber-700 px-8 py-3 font-semibold text-white hover:bg-amber-600 transition"
              >
                Join a Class
              </Link>

              <Link
                to="/classes"
                className="rounded-full border border-white px-8 py-3 hover:bg-white hover:text-gray-900 transition"
              >
                Explore Classes
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Stats />
      <DanceClasses />
    </>
  );
};

export default Home;
