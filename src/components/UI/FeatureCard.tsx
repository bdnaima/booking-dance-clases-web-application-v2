import { Link } from "react-router-dom";
import { FaClock, FaUser } from "react-icons/fa";

interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
  level: string;
  instructor: string;
  schedule: string;
  price: string;
  link: string;
}

const FeatureCard = ({
  title,
  description,
  image,
  level,
  instructor,
  schedule,
  price,
  link,
}: FeatureCardProps) => {
  return (
    <div className="group overflow-hidden rounded-3xl bg-white shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-6">
        <span className="inline-block rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700">
          {level}
        </span>

        <h3 className="mt-4 text-2xl font-bold text-gray-900">{title}</h3>

        <p className="mt-3 text-gray-500">{description}</p>

        <div className="mt-6 space-y-3 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <FaUser className="text-purple-600" />
            {instructor}
          </div>

          <div className="flex items-center gap-2">
            <FaClock className="text-purple-600" />
            {schedule}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between">
          <span className="text-xl font-bold text-purple-700">{price}</span>

          <Link
            to={link}
            className="rounded-full bg-purple-600 px-5 py-2 text-white transition hover:bg-purple-700"
          >
            View Class
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
