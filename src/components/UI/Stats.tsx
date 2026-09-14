import {
  FaUsers,
  FaCalendarAlt,
  FaChalkboardTeacher,
  FaAward,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaChalkboardTeacher />,
    value: "5+",
    label: "Professional Instructors",
  },
  {
    icon: <FaCalendarAlt />,
    value: "5+",
    label: "Classes Every Week",
  },
  {
    icon: <FaUsers />,
    value: "50+",
    label: "Students",
  },
  {
    icon: <FaAward />,
    value: "10+",
    label: "Years Experience",
  },
];

export default function Stats() {
  return (
    <div className="relative z-20 max-w-6xl mx-auto -mt-20 px-6">
      <div className="bg-white rounded-3xl shadow-2xl grid grid-cols-2 md:grid-cols-4 gap-8 p-8">
        {stats.map((item) => (
          <div key={item.label} className="text-center">
            <div className="text-3xl text-purple-600 mb-3 flex justify-center">
              {item.icon}
            </div>

            <h3 className="text-3xl font-bold">{item.value}</h3>

            <p className="text-gray-500 text-sm">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
