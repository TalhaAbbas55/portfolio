import React from "react";
import { skills, experiences } from "../constants";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import CTA from "../components/CTA";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Talha Abbas
        </span>
      </h1>
      <a data-tooltip-id="my-tooltip" data-tooltip-content="Hello world!">
        ◕‿‿◕
      </a>

      <Tooltip id="my-tooltip" />
      <div className="mt-5 flex flex-col gap3 text-slate-500">
        <p>
          Software Engineer based in Pakistan specialized in technical education
          through hands on learning and building applications{" "}
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill, i) => (
            <>
              <div
                key={i}
                className="block-container w-20 h-20 cursor-pointer"
                data-tooltip-id={`tooltip-${i}`}
                data-tooltip-content={skill.name}
              >
                <div className="btn-back rounded-xl" />
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
              <Tooltip id={`tooltip-${i}`} />
            </>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text"> Work Experience</h3>
        <div className="mt-5 flex flex-col gap3 text-slate-500">
          <p>
            I have worked with all sorts of companies from startups to large
            corporations. leveling up my skills and teaming up with smart
            people. Here is the rundown:
          </p>
        </div>

        <div className="mt-12 flex ">
          <VerticalTimeline>
            {experiences.map((experience, k) => (
              <VerticalTimelineElement
                key={k}
                date={experience.date}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
                iconStyle={{
                  background: experience.iconBg,
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p
                    className="text-black-500 font-medium font-base"
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>
                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, i) => (
                    <li
                      key={`${experience.title}-${i}`}
                      className="text-black-500/50 font-normal pl-1 text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className="border-slate-500" />
      <CTA />
    </section>
  );
};

export default About;
