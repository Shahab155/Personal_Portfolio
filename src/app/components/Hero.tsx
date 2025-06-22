"use client"
import {useRouter} from "next/navigation"
import TypingEffect from "./typingEffect"
import Image from "next/image"

const Hero = () => {
    const router = useRouter()
  return (
    <section className="heroSection wrapper">
    <div className="leftSection">
     <h1>I am a passionate
      </h1> 
      <div className="typing-effect"> <TypingEffect/></div>
      <p> I am a proficient Frontend Developer who is also adept at HTML, CSS and JavaScript programming languages.
       I use React.js, Next.js and Tailwind CSS to create modern, responsive and user-friendly interfaces.
      Clean code, component-based architecture, and improved performance are the key factors I focus on.
      I am learning and maintaining the latest frontend trends, practices.
</p>
      <div>
  
      </div>
      <div className="btnContainer">
      <button className="btn" onClick={()=>{router.push('https://resume-project-inky.vercel.app/')}}>Download Resume</button>
      <button className="btn" onClick={()=>{router.push('https://github.com/Shahab155')}}>Visit Github</button>
      </div>
     
    </div>
    
    <div className="rightSection">
      <Image src="/images/profile/profile.png"  alt="Personal Image" width={350} height={350} />
    </div>
  </section>

  )
}

export default Hero;