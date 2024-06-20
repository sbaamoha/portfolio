import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "../public/constants";
import { CgMediaLive } from "react-icons/cg";
import { AiFillGithub } from "react-icons/ai";

import AOS from "aos";
import "aos/dist/aos.css";

const Portfolio: React.FC = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id="projects">
      <h2 className="capitalize text-4xl text-center">projects</h2>
      <div className="pt-12 grid grid-cols-1 lg:grid-cols-3 gap-6 px-6 lg:px-12">
        {projects.map((project) => (
          <div className="rounded-lg shadow-lg" key={project.id}>
            <Image
              data-aos="fade-right"
              data-aos-delay="100"
              data-aos-duration="1000"
              className="rounded-lg cursor-pointer"
              src={project.img}
              alt={project.title}
              width={500}
              height={50}
            />
            <div className="p-4">
              {/* <Link href={project?.live}> */}
              <h2 className="capitalize mb-6 cursor-pointer text-2xl">
                {project.title}{" "}
              </h2>
              {/* </Link> */}
              <ul className="mb-4 text-base font-normal text-gray-700 dark:text-gray-300">
                {project.description.map((item, idx) => (
                  <li key={idx}>- {item}</li>
                ))}
              </ul>
              <div className="flex gap-2 uppercase pt-6">
                {Boolean(project?.live) && (
                  <Link href={project?.live || ""} passHref legacyBehavior>
                    <a
                      target="_blank"
                      className="flex items-center gap-2 p-2 shadow-lg hover:bg-secondary-color hover:text-white transition-all rounded-full"
                    >
                      <CgMediaLive /> live
                    </a>
                  </Link>
                )}
                {Boolean(project?.github) && (
                  <Link href={project?.github || ""} passHref legacyBehavior>
                    <a
                      target="_blank"
                      className="flex items-center gap-2 p-2 shadow-lg hover:bg-secondary-color hover:text-white transition-all rounded-full"
                    >
                      <AiFillGithub /> github
                    </a>
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
