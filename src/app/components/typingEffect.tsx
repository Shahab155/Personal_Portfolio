"use client"
import { useEffect, useRef } from "react"
import Typed from "typed.js"


export default function TypingEffect() {

const typedRef = useRef(null);
useEffect(()=>{
    const typed = new Typed(typedRef.current,{
        strings: ["Web Developer", "React Enthusiast", "Next.js Expert", "JavaScript Lover"],
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
    <h2 className="typing purple">
      <span ref={typedRef} />.
    </h2>
  )
}
