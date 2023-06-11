import {FaGithub,FaLinkedin,FaMailBulk,FaPhone,} from "react-icons/fa";
  import "./Footer.css";
  import React from "react";
  
  const Footer = () => {
    return (
      <div className="footer">
        <div className="footer-container">
          <div className="left">
            <div className="location">
             
            <a className="img-inherit" href="https://github.com/krish-1712">
                <FaGithub
                  size={25}
                  style={{ color: "#fff"}}
                /><h4>Github</h4>
              </a>
           
              <a className="img-inherit" href="https://www.linkedin.com/in/balakrishnan-k-03a6851b0/"  >
                <FaLinkedin
                  size={25}
                  style={{ color: "#fff"}}
                /><h4 className="din">Linkedin</h4>
              </a>
            </div>
            <div className="phone">
            <h4>
                <FaPhone
                  size={20}
                  style={{ color: "#fff", marginRight: "2rem" }}
                />
                8098190992
              </h4>

            </div>
            <div className="mail">
            <h4>
                <FaMailBulk
                  size={20}
                  style={{ color: "#fff", marginRight: "2rem" }}
                />
                krishkannan1712@gmail.com
              </h4>

            </div>
          </div>
          <div className="right">
            <p>Copyright © 2023 All rights reserved | Balakrishnan</p>    
            <div className="social">
          
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Footer;