import {React, useState} from "react";
import { content } from "../Content";
import { createElement  } from "react";
import programming from "../assets/images/Skills/programming.svg"



const Skills = () => {
  const { skills } = content;




  return (
    <section className="min-h-fit bg-bg_light_primary " id="skills">
      
      <div className="md:container px-5 py-14 ">
        <h2 className="md:text-3xl text-2xl" data-aos="fade-down">{skills.title}</h2>
        <h4 className="text-gray" data-aos="fade-down">{skills.subtitle}</h4>
        <div className="flex justify-center items-center">


        <img src={programming} alt="" className="md:w-[500px] sm:w-[250px]" /> 
        </div>
        <br />
        <div className="flex flex-wrap gap-4 justify-center items-center">
          
          {skills.skills_content.map((skill, i) => (
            <div
              key={i}
              data-aos="fade-down"
              data-aos-delay = {i*300}
              className="bg-white sm:cursor-pointer relative group w-full flex items-center gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200 "
            >
              <div>
                <img
                  src={skill.logo}
                  alt="..."
                  className="w-10 group-hover:scale-125 duration-200"
                />
              </div>
              <div>
                <h6>{skill.name}</h6>
               
                <div className="text-xl absolute top-3 right-3 ">
                 
                </div>
              </div>
            </div>
          ))}
       
        </div>
      </div>
    </section>
  );
};

export default Skills;
