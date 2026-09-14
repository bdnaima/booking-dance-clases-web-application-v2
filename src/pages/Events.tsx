const Events = () => {
  return (
    <main className="min-h-screen bg-gray-50 py-20">
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Event 1 */}
          <div className="rounded-3xl bg-white p-8 shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
            <span className="inline-block rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700">
              October 12, 2026
            </span>

            <h2 className="mt-3 text-2xl font-bold text-gray-900">
              Fall Dance Workshop
            </h2>

            <p className="mt-4 text-gray-500">
              A fun workshop where dancers can learn new choreography and enjoy
              dancing together.
            </p>

            <p className="mt-6 text-sm text-gray-600">Saturday • 11:00 AM</p>
          </div>
          {/* Event 2 */}
          <div className="rounded-3xl bg-white p-8 shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
            <span className="inline-block rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700">
              October 24, 2026
            </span>

            <h2 className="mt-3 text-2xl font-bold text-gray-900">
              Bollywood Night
            </h2>

            <p className="mt-4 text-gray-500">
              An evening of Bollywood music, energetic choreography and dancing
              for all experience levels.
            </p>

            <p className="mt-6 text-sm text-gray-600">Saturday • 7:00 PM</p>
          </div>
          {/* Event 3 */}
          <div className="rounded-3xl bg-white p-8 shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
            <span className="inline-block rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700">
              November 14, 2026
            </span>

            <h2 className="mt-3 text-2xl font-bold text-gray-900">
              Dance Showcase
            </h2>

            <p className="mt-4 text-gray-500">
              Celebrate our dancers with an evening of performances, music and
              unforgettable moments.
            </p>

            <p className="mt-6 text-sm text-gray-600">Saturday • 6:00 PM</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Events;
