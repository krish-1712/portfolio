import { Link } from "react-router-dom";
import "./Navbar.css";
import React, { useState } from 'react'

import { FaBars, FaTimes } from "react-icons/fa"

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor] = useState(false);
    const changecolor = () => {
        if (window.scrollY >= 1) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener("scroll", changecolor);



    return (
        <div className={color ? "header header-bg" : "header"}>
            <ul className={click ? "nav-menu    active" : "nav-menu"}>
                <li>
                    <Link to="/">HOME</Link>
                </li>
                <li>
                    <Link to="/about">ABOUT</Link>
                </li>
                <li>
                    <Link to="/skills">SKILLS</Link>
                </li>
                <li>
                    <Link to="/project">PROJECTS</Link>
                </li>
            </ul>
            <div className="hamburger" onClick={handleClick}>
                {click ? (<FaTimes size={20} style={{ color: "white" }} />) : (<FaBars size={20} style={{ color: "white" }} />)}



            </div>

        </div>
    )
}

export default Navbar   