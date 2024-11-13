import { useEffect } from "react";

import AOS from "aos";
import Image from "next/image";
const Header: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Easing for the animation
      once: true, // Animation happens only once as you scroll
    });
  }, []);

  return (
    <section id="about" className="px-3 py-12">
      <div
        data-aos="fade-right"
        className="container mx-auto flex flex-col md:flex-row items-center"
      >
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/assets/profile.jpeg"
            alt="Profile"
            width={800}
            height={600}
            // className="w-[80%] h-[80%] object-cover rounded-full shadow-md"
            className="w-5/6 h-5/6 object-cover rounded-full shadow-md"
          />
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-12 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            About Me
          </h2>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
            Hello! I&lsquo;m <strong>Mohamed</strong>, a professional software
            developer with a knack for creating elegant solutions in the least
            amount of time.
          </p>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
            With over two years of experience in software development, I am a
            dedicated professional known for crafting efficient solutions with
            precision and speed. I thrive on tackling complex challenges and
            excel in creating innovative solutions. My expertise spans across
            front-end and back-end development, allowing me to approach every
            project with a holistic perspective.
          </p>

          <h3 className="mt-6 text-2xl font-semibold text-gray-900 dark:text-gray-100">
            Skills & Interests
          </h3>
          <ul className="mt-4 text-lg text-gray-700 dark:text-gray-300">
            <li>- Front-end Development (React.js, Next.js, TypeScript)</li>
            <li>- Back-end Development (Node.js, Django)</li>
            <li>- API Integration & Development</li>
            <li>- Open-source Contributions</li>
            <li>- Continuous Learning & Improvement</li>
            <li>- Docker & DevOps</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Header;
