import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
const Contact = () => {
  return (
    <main className="min-h-screen bg-gray-50 py-20">
      <section className="max-w-5xl mx-auto px-6 text-center">
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <FaEnvelope className="mx-auto mb-4 text-3xl text-purple-600" />
            <h2 className="text-xl font-bold text-gray-900">Email</h2>
            <a
              href="mailto:hello@danceacademy.com"
              className="mt-2 block text-gray-500 hover:text-purple-600 transition"
            >
              hello@danceacademy.com
            </a>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <FaPhone className="mx-auto mb-4 text-3xl text-purple-600" />
            <h2 className="text-xl font-bold text-gray-900">Phone</h2>
            <a
              href="tel:+46701234567"
              className="mt-2 block text-gray-500 hover:text-purple-600 transition"
            >
              +46 70 123 45 67
            </a>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <FaMapMarkerAlt className="mx-auto mb-4 text-3xl text-purple-600" />
            <h2 className="text-xl font-bold text-gray-900">Location</h2>
            <p className="mt-2 text-gray-500">Malmö, Sweden</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
