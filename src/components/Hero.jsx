import React from 'react'
import { content } from "../Content";
const Hero = () => {
  const { hero } = content;

  return (
    <section id="home" className="overflow-hidden">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10"
        >
          <h1 className="sm:rotate-90 text-2xl md:text-4xl absolute sm:top-[30%] sm:right-[-10%] text-[#EAF2FA]">
            {hero.firstName}{" "}
            <span className="text-dark_primary">{hero.LastName}</span>
          </h1>
        </div>

  
        <div className="pb-16 px-6 pt-5" >
          <h2>{hero.title}</h2>
          <br />
          <div className="flex justify-end">
            <button className="btn"><a href="https://drive.google.com/file/d/1trM2VUzMuCQO04-Ak6t2LyT7efwd4l-j/view?usp=drive_link" >Cv</a></button>
          </div>
          <div className="flex flex-col gap-10 mt-10">
            {hero.hero_content.map((content, i) => (
              <div
                key={i}
                // data-aos="fade-down"
                data-aos-delay={i * 300}
                className={`flex items-center w-80 gap-5
            ${i === 1 && " flex-row-reverse text-right"}  `}
              >
                <h3>{content.count}</h3>
                <p>{content.text}</p>
                <a className='text-2xl text-blue-500' href="https://www.linkedin.com/in/rohit-kumar-454591233/">{content.linkedin } </a>
                <a className='text-2xl text-blue-500' href="https://leetcode.com/Rohit_kumar11/">{content.leetcode } </a>
                <a className='text-2xl text-blue-500' href="https://github.com/Rohit112003">{content.github } </a>
              </div>
            ))}
          </div>
        </div>

        
        <div className="md:h-[35rem] h-96 ">
          <img 
            src={hero.image}
            data-aos="slide-up"
            alt="..."
            className="h-full object-cover w-[300px] md:w-[500px]  "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
