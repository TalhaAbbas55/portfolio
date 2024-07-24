import React from "react";
import { projects } from "../constants";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Projects
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap3 text-slate-500">
        <p>
          Here are some of the projects that I have worked on. I have learned a
          lot from these projects and I am always looking to learn more.
        </p>
      </div>

      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project, i) => (
          <div className="lg:w-[400px] w-full">
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front flex justify-center items-center rounded-xl">
                <img
                  src={project.iconUrl}
                  alt={"Project Icon"}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-500">{project.description}</p>
              <div className="mt-5 flex items-center gap-2 font-poppins">
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noreferrer noopener" // means that the page being linked to should not have an opener property and should not be able to access the window object of the linking page
                  className="font-semibold text-blue-600"
                >
                  Live Link
                </Link>
                <img src={arrow} className="w-4 h-4 object-contain" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className="border-slate-200" />
      <CTA />
      <Footer />
    </section>
  );
};

export default Projects;
