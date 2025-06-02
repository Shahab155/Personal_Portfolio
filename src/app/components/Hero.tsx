"use client"
import {useRouter} from "next/navigation"
import TypingEffect from "./typingEffect"
import Image from "next/image"

const Hero = () => {
    const router = useRouter()
  return (
    <section className="heroSection wrapper">
    <div className="leftSection">
     <p>Hi, I am <span className="gradient-text">Shahab</span>
      </p> 
      <div>I am a passionate, <TypingEffect/></div>
      <div>
        <span id="element"></span>

      </div>
      <div className="btnContainer">
      <button className="btn" onClick={()=>{router.push('https://resume-project-inky.vercel.app/')}}>Download Resume</button>
      <button className="btn" onClick={()=>{router.push('https://github.com/Shahab155')}}>Visit Github</button>
      </div>
     
    </div>
    
    <div className="rightSection">
      <Image src="/images/profile/profile.png"  alt="Personal Image" width={300} height={300} />
    </div>
  </section>

  )
}

export default Hero;