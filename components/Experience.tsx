import React from "react";
import { experiences } from "../public/constants/projects";

const Experience = () => {
  return (
    <div id="experience" className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold mb-6 text-gray-900 text-center dark:text-gray-100">
        Experience
      </h2>
      <div className="relative border-l border-gray-200 dark:border-gray-700">
        {experiences.map((experience, index) => (
          <div key={index} className="mb-8 ml-4">
            <div className="absolute w-3 h-3 bg-blue-500 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-800"></div>
            <div className="ml-6">
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {experience.date}
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {experience.title}
              </h3>
              <h4 className="text-md font-medium text-gray-600 dark:text-gray-400">
                {experience.company}
              </h4>
              <ul className="mb-4 text-base font-normal text-gray-700 dark:text-gray-300">
                {experience.description.map((item, idx) => (
                  <li key={idx}>- {item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
