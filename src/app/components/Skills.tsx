import Link from "next/link";
import { FaHtml5, FaCss3, FaJs, FaReact  } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import Heading from "./Heading";

const mySkill = [
  {name:"HTML",icon:<FaHtml5 />,style:{color:"#E34F26",fontSize:"80px"}},
  {name:"CSS",icon:< FaCss3  />,style:{color:"#1572B6",fontSize:"80px"}},
  {name:"JavaScript",icon:< FaJs />,style:{color:"#F7DF1E",fontSize:"80px"}},
  {name:"Typescript",icon:< SiTypescript />,style:{color:"#3178C6",fontSize:"80px"}},
  {name:"HTML",icon:<SiTailwindcss />,style:{color:"#38B2AC",fontSize:"80px"}},
  {name:"HTML",icon:< FaReact  />,style:{color:"#61DAFB",fontSize:"80px"}},
  {name:"Next Js",icon:<SiNextdotjs />,style:{color:"#61DAFB",fontSize:"80px"}},

]

 const Skills = () => {
  return (
    <section className="wrapper skillSection" id="skills"> 
       <Heading title="My Skills"/>
        <div className='container'>
        {mySkill.map((item,index)=>{
          return (
            <div key={index} className="skill" data-aos="zoom-in-up" > 
             <span style={item.style}>{item.icon}</span>
             
            </div>

          )
        })}
        </div>
    </section>
   
  )
}

export default Skills