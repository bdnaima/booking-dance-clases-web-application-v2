import FeatureCard from "./FeatureCard";

import hiphop from "../../assets/images/hiphop.jpg";
import ballet from "../../assets/images/ballet.jpg";
import salsa from "../../assets/images/salsa.jpg";
import bollywood from "../../assets/images/bollywood.jpg";

const classes = [
  {
    title: "Ballet",
    description: "Develop strength, balance and graceful technique.",
    image: ballet,
    level: "Advanced",
    instructor: "Emma Lewis",
    schedule: "Saturday • 10:00 AM",
    price: "$25 / class",
    link: "/classes/ballet",
  },
  {
    title: "Bollywood",
    description: "Expressive routines combining traditional and modern moves.",
    image: bollywood,
    level: "Beginner",
    instructor: "Priya Sharma",
    schedule: "Tue & Thu • 6:30 PM",
    price: "$20 / class",
    link: "/classes/bollywood",
  },
  {
    title: "Hip-Hop",
    description: "High-energy choreography with modern street dance styles.",
    image: hiphop,
    level: "Intermediate",
    instructor: "Alex Carter",
    schedule: "Mon & Wed • 7:00 PM",
    price: "$18 / class",
    link: "/classes/hiphop",
  },
  {
    title: "Salsa",
    description: "Partner dancing with fun rhythms for every skill level.",
    image: salsa,
    level: "All Levels",
    instructor: "Carlos Ruiz",
    schedule: "Friday • 7:30 PM",
    price: "$22 / class",
    link: "/classes/salsa",
  },
];

const FeaturedClasses = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <p className="uppercase tracking-[5px] text-purple-600 font-semibold">
            Featured Classes
          </p>

          <h2 className="mt-4 text-5xl font-bold text-gray-900">
            Find Your Perfect Dance Style
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-500">
            Whether you're taking your first steps or refining your skills,
            explore classes taught by experienced instructors in a welcoming
            community.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {classes.map((danceClass) => (
            <FeatureCard key={danceClass.title} {...danceClass} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedClasses;
