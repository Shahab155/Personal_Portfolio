import { FaHtml5, FaCss3, FaJs, FaReact  } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import Heading from "./Heading";

const mySkill = [
  {name:"HTML",description:"Hypertext Markup languague", icon:<FaHtml5 />,style:{color:"#E34F26",fontSize:"30px"}},
  {name:"CSS",description:"Cascading Style Sheets",icon:< FaCss3  />,style:{color:"#1572B6",fontSize:"30px"}},
  {name:"JavaScript",description: "A versatile programming language",icon:< FaJs />,style:{color:"#F7DF1E",fontSize:"30px"}},
  {name:"Typescript",description:"A superset of JavaScript with static types.",icon:< SiTypescript />,style:{color:"#3178C6",fontSize:"30px"}},
  {name:"React.js",description:"A javaScript library for creating user interfaces.",icon:<SiTailwindcss />,style:{color:"#38B2AC",fontSize:"30px"}},
  {name:"Next.js",description:"A versatile programming language known for its readability.",icon:< FaReact  />,style:{color:"#61DAFB",fontSize:"30px"}},
  {name:"Tailwindcss",description:"A utility-first CSS framework for creating custom designs quickly.",icon:<SiNextdotjs />,style:{color:"#61DAFB",fontSize:"30px"}},

]

 const Skills = () => {
  return (
    <section className="wrapper skillSection" id="skills"> 
       <Heading title="My Skills"/>
        <div className='container'>
        {mySkill.map((item,index)=>{
          return (
            <div key={index} className="skill" > 
            <div>
             <span style={item.style}>{item.icon}</span>
            <h3>{item.name}</h3>
            </div>
            <p>
              {item.description}
            </p>
             <button>Lean More</button>
            </div>

          )
        })}
        </div>
    </section>
   
  )
}

export default Skills