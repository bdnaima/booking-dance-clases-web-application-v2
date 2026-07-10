import FeatureCard from "../components/UI/FeatureCard";

import dance from "../assets/images/dance-purple.jpg";
import dancer from "../assets/images/dancer.jpg";

const Home = () => {
  const features = [
    {
      title: "Dance Classes",
      description: "Find a class and start your dance journey.",
      image: dance,
      link: "/classes",
    },
    {
      title: "Events",
      description: "Discover upcoming performances and workshops.",
      image: dance,
      link: "/events",
    },
    {
      title: "Media",
      description: "Watch performances and dance videos.",
      image: dance,
      link: "/media",
    },
    {
      title: "Gallery",
      description: "Explore moments from our dance community.",
      image: dance,
      link: "/gallery",
    },
  ];

  return (
    <div>
      {/* HERO */}

      <section
        className="
relative
h-[70vh]
flex
items-center
"
      >
        <img
          src={dancer}
          alt="Bollywood dancer"
          className="
absolute
inset-0
w-full
h-full
object-cover
"
        />

        <div
          className="
absolute
inset-0
bg-black/40
"
        />

        <div
          className="
relative
max-w-7xl
mx-auto
px-6
text-white
"
        >
          <h1
            className="
text-5xl
md:text-7xl
font-bold
max-w-3xl
"
          >
            For the love of dance
          </h1>

          <p
            className="
mt-6
text-xl
max-w-xl
"
          >
            Discover Bollywood dance classes, events and a community that
            celebrates movement.
          </p>

          <div
            className="
mt-8
flex
gap-4
"
          >
            <button
              className="
bg-[#E59A23]
px-8
py-3
rounded-full
font-semibold
hover:bg-[#D97706]
transition
"
            >
              Join a class
            </button>

            <button
              className="
border
border-white
px-8
py-3
rounded-full
hover:bg-white
hover:text-gray-900
transition
"
            >
              Explore
            </button>
          </div>
        </div>
      </section>

      {/* INTRO */}

      <section
        className="
py-20
max-w-5xl
mx-auto
px-6
text-center
"
      >
        <h2
          className="
text-4xl
font-bold
text-gray-800
"
        >
          Dance. Culture. Community.
        </h2>

        <p
          className="
mt-6
text-gray-600
text-lg
"
        >
          Whether you are a beginner or experienced dancer, our academy offers
          classes and events for everyone.
        </p>
      </section>

      {/* FEATURES */}

      <section
        className="
bg-[#FFF7ED]
py-20
"
      >
        <div
          className="
max-w-7xl
mx-auto
px-6
grid
md:grid-cols-2
lg:grid-cols-4
gap-8
"
        >
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
