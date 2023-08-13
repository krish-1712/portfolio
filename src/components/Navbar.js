import { Link } from "react-router-dom";
import "./Navbar.css";
import React, { useState } from 'react'

import {FaBars, FaTimes} from "react-icons/fa"

const Navbar = () => {
    const[click,setClick]=useState(false);
    const handleClick=()=> setClick(!click);

    const[color,setColor]=useState(false);
    const changecolor=()=>{
        if(window.scrollY>=1){
            setColor(true)
        }else{
            setColor(false)
        }
    }

    window.addEventListener("scroll",changecolor);



  return (
    <div className={color ? "header header-bg":"header"}>
        <Link to="/">
            <h1>Portfolio</h1>
        </Link>
        <ul className={click ? "nav-menu    active" : "nav-menu"}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/skills">Skills</Link>
            </li>
            <li>
            <Link to="/project">Project</Link>
            </li>
            <li>
            <Link to="https://drive.google.com/file/d/1lV3Ora5wGfTRxlBH8DnkC16j9BpyWbJZ/view">Resume</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{color:"white"}}/>) : ( <FaBars size={20} style={{color:"white"}}/>     )    } 
          
           

        </div>

    </div>
  )
}

export default Navbar   