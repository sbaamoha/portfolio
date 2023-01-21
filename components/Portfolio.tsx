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
      <h2 className="uppercase text-4xl text-center">
        my <span className="text-secondary-color">projects</span>
      </h2>
      <div className="pt-12 grid grid-cols-1 lg:grid-cols-3 gap-6 px-6 lg:px-12">
        {projects.map((project) => (
          <div className="rounded-lg shadow-lg" key={project.id}>
            <Link href={project.live}>
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
            </Link>
            <div className="p-4">
              <Link href={project.live}>
                <h2 className="uppercase cursor-pointer text-2xl">
                  {project.title}{" "}
                </h2>
              </Link>
              <p className="capitalize">{project.desc} </p>
              <div className="flex gap-2 uppercase pt-6">
                <Link
                  className="flex items-center gap-2 p-2 shadow-lg hover:bg-secondary-color hover:text-white transition-all rounded-full"
                  href={project.live}
                >
                  <CgMediaLive /> live
                </Link>
                <Link
                  className="flex items-center gap-2 p-2 shadow-lg hover:bg-secondary-color hover:text-white transition-all rounded-full"
                  href={project.github}
                >
                  <AiFillGithub /> github
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
