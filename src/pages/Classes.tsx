import DanceClasses from "../components/UI/DanceClasses";

const Classes = () => {
  return (
    <main>
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="uppercase tracking-[5px] text-purple-600 font-semibold">
            Dance Academy
          </p>

          <h1 className="mt-4 text-5xl font-bold text-gray-900">
            Explore Our Classes
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-500">
            Find a class that matches your style, level and passion for dance.
          </p>
        </div>
      </section>

      <DanceClasses />
    </main>
  );
};

export default Classes;
