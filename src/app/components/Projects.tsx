import Link from "next/link";
import { Card } from "./Card";
import Heading from "./Heading";



const cardData = [
  {
    id: 1,
    title:"Responsive Hero Section",
    image: "/project1.png",
    description:
      "This is responsive hero section, created using HTML and Tailwindcss.",
    link: "https://responsive-navbar-pink-nine.vercel.app/",
    tags: ["HTML", "CSS", "Typescript","JavaScript"]
  },
  {
    id: 2,
    title:"Responsive Hero Section",

    image: "/project2.png",
    description:
      "This is responsive hero section, created using HTML and Tailwindcss.",
    link: "https://responsive-navbar-pink-nine.vercel.app/",
    tags: ["HTML", "CSS", "Typescript","Next Js"]

  },
  {
    id: 3,
    title:"Responsive Hero Section",

    image: "/project3.png",
    description:
      "This is responsive hero section, created using HTML and Tailwindcss.",
    link: "https://hackthon-e-commerce-three.vercel.app/",
    tags: ["HTML", "CSS", "Typescript","Tailwindcss"]

  },
  {
    id: 4,
    title:"Responsive Hero Section",

    image: "/project4.png",
    description:
      "This is responsive hero section, created using HTML and Tailwindcss.",
    link: "https://responsive-navbar-pink-nine.vercel.app/",
    tags: ["HTML", "CSS", "Typescript","Wordpress"]

  },
  {
    id: 5,
    title:"Responsive Hero Section",

    image: "/project4.png",
    description:
      "This is responsive hero section, created using HTML and Tailwindcss.",
    link: "https://responsive-navbar-pink-nine.vercel.app/",
    tags: ["HTML", "CSS", "Typescript","Wordpress"]

  },
  {
    id: 6,
    title:"Responsive Hero Section",

    image: "/project4.png",
    description:
      "This is responsive hero section, created using HTML and Tailwindcss.",
    link: "https://responsive-navbar-pink-nine.vercel.app/",
    tags: ["HTML", "CSS", "Typescript","Wordpress"]

  },

];

const Projects = () => {
  return (
    <section className="projectsSection wrapper" id="projects">
       <Heading title="My Projects"/>
        <div className="container">
        {
            cardData.map((item, index)=>{
                return (
                  <Link key={index} href={item.link} data-aos="zoom-in-up">
                    <Card description={item.description} image={item.image} tags={item.tags} title={item.title} />
                  </Link>
                )
            })
        }

        </div>
    </section>
  )
}

export default Projects