import { Link } from "react-router-dom";

interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const FeatureCard = ({ title, description, image, link }: FeatureCardProps) => {
  return (
    <Link
      to={link}
      className="
        group
        overflow-hidden
        rounded-2xl
        bg-white
        shadow-md
        hover:shadow-xl
        transition
      "
    >
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="
            w-full
            h-64
            object-cover
            group-hover:scale-105
            transition
          "
        />
      </div>

      <div className="p-6">
        <h3
          className="
          text-xl
          font-bold
          text-gray-800
        "
        >
          {title}
        </h3>

        <p
          className="
          mt-2
          text-gray-500
        "
        >
          {description}
        </p>
      </div>
    </Link>
  );
};

export default FeatureCard;
