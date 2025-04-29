"use client"
import { useRouter } from "next/navigation";
import { FaLinkedin, FaGithub  } from "react-icons/fa";
export default function Footer() {
  const router = useRouter()
  return (
    <>
      <footer>
        <div className="footerContainer">
           <div className='socialIcons'>
            
            <FaLinkedin className="icon" style={{color:"#0077B5"}} onClick={()=>{router.push("https://www.linkedin.com/in/shahab-ud-din-7547762b9/")}}/>
            <FaGithub  className="icon"  style={{color:"white"}} onClick={()=>{router.push("https://github.com/Shahab155?tab=repositories")}} />

            </div> 
            <p>
           Copyright &#169; shahab portfolio.com | All right reseved
           </p> 
        </div>
      </footer>
    </>
  );
}
