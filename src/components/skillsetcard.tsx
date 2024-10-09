import React from "react";

const SkillsetCard = () => {
  const skills = {
    "Front-End Development": [
      "Angular ",
      "React JS",
      "JavaScript",
      "JQuery",
      "Bootstrap",
      "HTML5",
      "CSS3",
      "Angular Material",
      "NextJS",
      "VueJS",
    ],
    "Back-End Development": ["Java", "Spring Boot", "Python", "C++"],
    "State Management": ["NGRX", "RXJS"],
    "Testing & Automation": [
      "Selenium",
      "Serenity",
      "Unit Testing",
      "TDD (Test-Driven Development)",
    ],
    "DevOps & CI/CD": ["Jenkins", "Git", "Maven"],
    Database: ["SQL", "PostgreSQL", "Oracle PL/SQL"],
    "Other Tools": [
      "Webpack",
      "Angular CLI",
      "Office365",
      "Jira",
      "Tailwind CSS",
      "Sass",
    ],
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6 border border-gray-300">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
        Skill Set
      </h2>
      {Object.entries(skills).map(([category, skillList]) => (
        <div key={category} className="mb-4">
          <h3 className="text-md font-semibold text-gray-800 border-b-2 border-blue-500 pb-1 mb-2">
            {category}
          </h3>
          <ul className="list-disc list-inside text-sm">
            {skillList.map((skill, index) => (
              <li
                key={index}
                className="text-gray-600 hover:text-blue-500 transition duration-200">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SkillsetCard;
