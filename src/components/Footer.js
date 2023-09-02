import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";
import React from "react";

const Footer = () => {

  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">

          </div>

          <p className="phone" >Copyright © 2023 All rights reserved | Balakrishnan</p>

        </div>
        <div className="right">
          <Link to="https://github.com/krish-1712" className="img-inherit" target="_blank">
            <FaGithub
              size={25}
              style={{ color: "#fff" }}
            />
          </Link>

          <Link to="https://www.linkedin.com/in/balakrishnan-k-03a6851b0/" className="img-inherit2" target="_blank">
            <FaLinkedin
              size={25}
              style={{ color: "#fff" }}
            />
          </Link>

          <Link to="tel:8098190992" className="img-inherit3">
            <FaPhone size={20} style={{ color: "#fff" }} />
          </Link>

          <Link to="mailto:krishkannan1712@gmail.com" className="img-inherit4">
            <FaEnvelope size={20} style={{ color: "#fff", marginRight: "2rem" }} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;