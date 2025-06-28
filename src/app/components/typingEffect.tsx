"use client"
import { useEffect, useRef } from "react"
import Typed from "typed.js"


export default function TypingEffect() {

const typedRef = useRef(null);
useEffect(()=>{
    const typed = new Typed(typedRef.current,{
        strings: ["Frontend Developer", "React Enthusiast", "Next.js Expert", "JavaScript Lover","Python Developer"],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true,
    })
    return () => {
        typed.destroy();
    }
},[])

  return (
    <h2 className="typing-effect">
     I am <span ref={typedRef} />.
    </h2>
  )
}
