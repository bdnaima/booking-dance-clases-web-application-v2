import { Link, useParams } from "react-router-dom";

const ClassDetails = () => {
  const { danceStyle } = useParams();

  const classInfo = {
    ballet: {
      level: "Advanced",
      instructor: "Emma Lewis",
      schedule: "Saturday • 10:00 AM",
      price: "$25 / class",
    },
    bollywood: {
      level: "Beginner",
      instructor: "Priya Sharma",
      schedule: "Tue & Thu • 6:30 PM",
      price: "$20 / class",
    },
    hiphop: {
      level: "Intermediate",
      instructor: "Alex Carter",
      schedule: "Mon & Wed • 7:00 PM",
      price: "$18 / class",
    },
    salsa: {
      level: "All Levels",
      instructor: "Carlos Ruiz",
      schedule: "Friday • 7:30 PM",
      price: "$22 / class",
    },
  };

  const info = classInfo[danceStyle as keyof typeof classInfo];

  return (
    <main className="min-h-screen bg-gray-50 py-20">
      <section className="max-w-5xl mx-auto px-6 text-center">
        <p className="uppercase tracking-[5px] text-purple-600 font-semibold">
          Dance Class
        </p>

        <h1 className="mt-4 text-5xl font-bold text-gray-900 capitalize">
          {danceStyle}
        </h1>

        <Link
          to="/classes"
          className="inline-block mb-8 text-purple-600 font-semibold hover:text-purple-800 transition"
        >
          ← Back to Classes
        </Link>

        <div className="mt-10 max-w-2xl mx-auto rounded-3xl bg-white p-8 shadow-lg">
          <p className="text-lg text-gray-600">
            Join our {danceStyle} class and develop your skills in a welcoming
            environment. Our classes are suitable for dancers who want to learn,
            improve and enjoy the experience of dancing.
          </p>
          <div className="mt-6 border-t pt-6 text-left space-y-3 text-gray-600">
            <p>
              <strong>Level:</strong> {info.level}
            </p>
            <p>
              <strong>Instructor:</strong> {info.instructor}
            </p>
            <p>
              <strong>Schedule:</strong> {info.schedule}
            </p>
            <p>
              <strong>Price:</strong> {info.price}
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-block rounded-full bg-amber-700 px-8 py-3 font-semibold text-white hover:bg-amber-600 transition"
            >
              Join This Class
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ClassDetails;
