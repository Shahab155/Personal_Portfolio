"use client"
import { IoClose, IoMenu } from "react-icons/io5";
import { useState } from "react";



 const Navbar = () => {

const [navList,setNavList] = useState(false)
const navHandler = () => {
  setNavList(!navList)
}

  return (
    <header>
      <div className="navContainer">
      <nav>
      <div className="logo">Shahab's Portfolio</div>
      <div className="right">
      <ul >
          <li><a > Home </a></li>
          <li><a href="#about"> About </a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills </a></li>
          <li><a href="#contact"> Contact </a></li>
        </ul>
      </div>
      <div className='menuToggle hidden' onClick={navHandler}>
       {navList ? <IoClose size={28} /> : <IoMenu size={28} />}
      </div>
     
    </nav>
      </div>
   

    { navList  &&
        <ul className={`navList ${navList ? "open" : ""} `}>
          <li><a onClick={navHandler} href="#"> Home </a></li>
          <li><a onClick={navHandler} href="#about"> About </a></li>
          <li><a onClick={navHandler} href="#projects">Projects</a></li>
          <li><a onClick={navHandler} href="#skills">Skills </a></li>
          <li><a onClick={navHandler} href="#contact"> Contact </a></li>
        </ul>
      }
  </header>
  )
}

export default Navbar
