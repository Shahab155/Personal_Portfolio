import Link from "next/link";
import { Card } from "./Card";
import Heading from "./Heading";

const cardData = [
  {
    id: 1,
    title:"E-Commerce Website",
    image: "/images/projects/project1.png",
    description:
      "E-commerce website, created using React.js and Tailwindcss.",
    link: "https://ecommerce-website-snowy-nu.vercel.app/",
    tags: ["React.Js","Tailwindcss","Vite","Typescript"]
  },
  {
    id: 2,
    title:"Dynamic Resume Builder",

    image: "/images/projects/project2.png",
    description:
      "Dynamic Resume builder, created using HTML, CSS and Typescript",
    link: "https://resume-project-inky.vercel.app/",
    tags: ["HTML", "CSS", "Typescript"]

  },
  {
    id: 3,
    title:"E-Commerce Website",

    image: "/images/projects/project3.png",
    description:
      "This is E-commerce website created using Tailwindcss and Next.Js.",
    link: "https://hackthon-e-commerce-three.vercel.app/",
    tags: ["Next.Js", "Typescript","Tailwindcss"]

  },
  {
    id: 4,
    title:"Tic Tac Toe",

    image: "/images/projects/project4.png",
    description:
      "A simple fun game, created using HTML, CSS, Typescript",
    link: "https://tic-tac-toe-game-teal-five.vercel.app/",
    tags: ["HTML", "CSS", "Javascript"]

  },
  {
    id: 5,
    title:"Figma Portfolio",

    image: "/images/projects/project5.png",
    description:
      "This is portfolio, created using Tailwindcss and NextJs.",
    link: "https://next-js-tailwindcss-assignment-wepf.vercel.app/",
    tags: ["Tailwindcss","Next.Js","Typescript"]

  },
  {
    id: 6,
    title:"PanaCloud Website",

    image: "/images/projects/project6.png",
    description:
      "PanaCloud website, created using Next.Js and custom Css.",
    link: "https://next-js-css-assignment-c6ry.vercel.app/",
    tags: ["CSS","Next.Js","Typescript"]

  },

];

const Projects = () => {
  return (
    <section className="projectsSection wrapper" id="projects">
      <Heading title="My Projects" />
      <div className="container">
        {cardData.map((item, index) => {
          return (
            <Link
              key={index}
              href={item.link}
              data-aos="zoom-out"
              target="_blank"
            >
              <Card
                description={item.description}
                image={item.image}
                title={item.title}
                tags={item.tags}
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
