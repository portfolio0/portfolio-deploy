import { FaGraduationCap } from "react-icons/fa";

const educationData = [
  {
    degree: "MCA in Computer Science",
    institution: "Savitribai Phule Pune University",
    duration: "2024 – 2026",
    grade: "CGPA: 7.10 / 10",
    description: [
      "Specialized in MERN Stack Development",
      "Final Year Project: working on it",
    ],
  },
  {
    degree: "BCA in Computer Science",
    institution: "Punyashlok Ahilyadevi Holkar Solapur University",
    duration: "2021 – 2024",
    grade: "Percentage: 66.41%",
    description: [
      "Specialized in MERN Stack Development",

      "Final Year Project: Pet Adoption Website ",
      "Php,Html,Bootstrap,Javascript,Mysql",
    ],
  },
  {
    degree: "HSC - 12th Science",
    institution: "English School Junior College,Mangalwedha",
    duration: "2020 – 2021",
    grade: "Percentage: 81.67%",
    description: ["PCB Stream", "Maharashtra State Board"],
  },
  {
    degree: "SSC - 10th",
    institution: "English School,Mangalwedha",
    duration: "2019 – 2020",
    grade: "Percentage: 56.20%",
    description: ["Maharashtra State Board"],
  },
];

const Education = () => {
  return (
    <section className="py-16 px-4 md:px-20 bg-purple-500">
      <h2 className="text-3xl font-bold text-center mb-16 text-blue-600 dark:text-white">
        🎓 MY JOURNEY
      </h2>

      <div className="relative">
        {/* Vertical Line in Center */}
        <div className="absolute left-1/2 top-0 h-full w-1 bg-blue-500 transform -translate-x-1/2"></div>

        {/* Timeline Items */}
        {educationData.map((item, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div
              key={index}
              className={`mb-12 flex flex-col md:flex-row ${
                isLeft ? "md:justify-start" : "md:justify-end"
              } items-center w-full relative`}
            >
              {/* Card */}
              <div
                className={`w-full md:w-[40%] p-5 rounded-lg shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 ${
                  isLeft ? "md:mr-auto" : "md:ml-auto"
                }`}
              >
                <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300">
                  {item.degree}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {item.institution}
                </p>
                <p className="text-sm text-gray-500">{item.duration}</p>
                <p className="text-sm italic text-gray-500">{item.grade}</p>
                <ul className="list-disc ml-5 mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {item.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>

              {/* Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center z-10">
                <FaGraduationCap className="text-white text-sm" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Education;
