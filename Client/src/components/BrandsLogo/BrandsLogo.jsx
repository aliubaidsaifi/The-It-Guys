import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Brand1 from "../../assets/brands/1.svg";
import Brand2 from "../../assets/brands/2.svg";
import Brand3 from "../../assets/brands/3.svg";
import Brand4 from "../../assets/brands/4.svg";
import Brand5 from "../../assets/brands/5.svg";

const projectsData = [
  {
    name: "Project One",
    description: "Description for Project One goes here.",
    image: Brand1,
  },
  {
    name: "Project Two",
    description: "Description for Project Two goes here.",
    image: Brand2,
  },
  {
    name: "Project Three",
    description: "Description for Project Three goes here.",
    image: Brand3,
  },
  {
    name: "Project Four",
    description: "Description for Project Four goes here.",
    image: Brand4,
  },
  {
    name: "Project Five",
    description: "Description for Project Five goes here.",
    image: Brand5,
  },
];

const BrandsLogo = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-gray-100 dark:bg-black py-12 dark:text-white duration-300">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Introductory Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 items-center mb-12">
          {/* Left Section: Image */}
          <div
            data-aos="fade-right"
            className="w-full h-auto object-contain rounded-lg"
            style={{
              backgroundImage: `url('https://picsum.photos/1600/800')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "500px",
            }}
          ></div>

          {/* Right Section: Text */}
          <div
            data-aos="fade-left"
            className="w-full h-[500px] bg-white flex flex-col items-center justify-center space-y-4 p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-primary">
              Projects
            </h2>
            <h3 className="text-2xl text-gray-700 sm:text-3xl font-semibold">
              Work Across All Major Industries
            </h3>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400">
              Glance over some of our successful project <br /> executions in
              the last 20+ years.
            </p>
          </div>
        </div>

        {/* Projects Section */}
        <h1 className="text-center text-4xl sm:text-5xl font-semibold text-primary mb-10">
          Powering Next-Gen Companies
        </h1>
        <div className="py-6 flex flex-wrap items-center justify-evenly gap-6">
          {projectsData.map((project, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="flex flex-col items-center text-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition duration-300"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-24 h-24 mb-4"
              />
              <h2 className="font-semibold text-black dark:text-white mb-2">
                {project.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandsLogo;
