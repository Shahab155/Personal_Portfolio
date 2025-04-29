"use client"
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

const Home = () => {
  useEffect(() => {
    try {
      AOS.init({
        easing: "ease-out-back",
        duration: 1200,
        delay: 0,
        mirror: true,
        anchorPlacement: "bottom-bottom",
        offset: 160,
      });
      AOS.refresh();
    } catch (error) {
      console.error("AOS initialization error:", error);
    }
  }, []);

  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />  
    </div>
  );
};

export default Home;
