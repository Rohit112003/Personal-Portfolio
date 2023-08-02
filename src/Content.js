// import images
import Hero_person from "./assets/images/Hero/mantable.svg";

import java from "./assets/images/Skills/java.png";
import ethereum from "./assets/images/Skills/ethereum (1).png";
import reactjs from "./assets/images/Skills/react.png";
import blockchain from "./assets/images/Skills/blockchain (1).png";
import nodejs from "./assets/images/Skills/node.png";
import express from "./assets/images/Skills/express.png";
import js from "./assets/images/Skills/js.png"
import tailwind from "./assets/images/Skills/tailwind.png"
import next from "./assets/images/Skills/next.png"

import services_logo2 from "./assets/images/Services/logo2.png";
import Netflix from "./assets/images/Projects/netflix.png";
import blockchains from "./assets/images/Projects/ngo.png";
import statics from "./assets/images/Projects/static.png";
// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "I'm Developer",
    firstName: "Rohit",
    LastName: "Kumar",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "2+",
        text: "Years of Experinse in Web development",
      },
      {
        count: "15+",
        text: "Projects Worked in my career",
      },
      {
        linkedin:"linkedin",
        leetcode:"Leetcode",
        github:"github"

      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "java",
      
        logo: java,
      },
      {
        name: "Node js",
      
        logo: nodejs,
      },
      {
        name: "Express",
      
        logo: express,
      },
      {
        name: "React js",
      
        logo: reactjs,
      },
      {
        name: "Ethereum",
        logo: ethereum,
      },
      {
        name: "BlockChain",
        logo: blockchain,
      },
      {
        name: "javaScript",
        logo: js,
      },
      {
        name: "Tailwind",
        logo: tailwind,
      },
      {
        name: "Next",
        logo: next,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Java",
        para: "A competitive coder specializing in Java, excelling in algorithmic problem-solving and data structures. Utilizes Java's power and efficiency to tackle coding challenges with precision and speed.",
        logo: java,
      },
      {
        title: "ui / ux DESIGNING",
        para: "An adept UI/UX developer, skilled in crafting captivating user experiences through intuitive designs. Combines creativity with user-centric approaches to build visually appealing and functional interfaces that leave lasting impressions.",
        logo: services_logo2,
      },
      {
        title: "BlockChain Developing",
        para: "A blockchain developer, well-versed in the intricacies of distributed ledger technology and smart contracts, with a passion for creating secure and decentralized solutions to revolutionize industries.",
        logo: blockchain,
      },
      
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    
    project_content: [
      {
        title: "Netflix with Tailwind",
        image: Netflix,
        link:"https://github.com/Rohit112003/netflix_clone_with_tailwind"
      },
      {
        title: "BlockChain",
        image: blockchains,
        link:"https://github.com/Rohit112003/BlockChain-CamPaign"
      },
      {
        title: "Static-Tailwind",
        image: statics,
        link:"https://github.com/Rohit112003/static_tailwind_website",
      },
    ],
  },
  
  
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "rohitk79739@gmail.com",
        icon: GrMail,
        link: "rohitk79739@gmail.com",
      },
      {
        text: "+91 8235939539",
        icon: MdCall,
        link: "",
      },
      
    ],
  },
  
};
