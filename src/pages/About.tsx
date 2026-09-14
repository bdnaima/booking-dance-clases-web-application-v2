const About = () => {
  return (
    <main className="min-h-screen bg-gray-50 py-20">
      <section className="max-w-5xl mx-auto px-6 pt-12 pb-20">
        <p className="uppercase tracking-[5px] text-purple-600 font-semibold">
          About Us
        </p>

        <h1 className="mt-4 text-5xl font-bold text-gray-900">
          Dance With Passion
        </h1>

        <p className="mt-6 text-lg text-gray-500 leading-relaxed">
          Dance Academy is a welcoming space for people who love to move, learn
          and express themselves through dance. From Bollywood and Hip-Hop to
          Ballet and Salsa, our classes are designed for dancers of different
          ages and experience levels.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className="rounded-3xl bg-white p-10 shadow-lg">
          <p className="uppercase tracking-[5px] text-purple-600 font-semibold">
            Our Story
          </p>

          <h2 className="mt-4 text-3xl font-bold text-gray-900">
            A Place to Learn, Move and Connect
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-gray-500">
            Dance Academy was created for people who want to discover the joy of
            dance in a welcoming and supportive environment. We believe dance is
            not only about technique, but also about confidence, creativity and
            connecting with others.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-3xl bg-white p-8 text-center shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-bold text-gray-900">Passion</h3>
            <p className="mt-4 text-gray-500">
              We believe dance should be joyful, inspiring and full of energy.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 text-center shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-bold text-gray-900">Community</h3>
            <p className="mt-4 text-gray-500">
              We create a welcoming space where dancers can learn and grow
              together.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 text-center shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-bold text-gray-900">Creativity</h3>
            <p className="mt-4 text-gray-500">
              We encourage dancers to express themselves and discover their own
              style.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
