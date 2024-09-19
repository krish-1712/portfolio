import "./Skills.css";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <div className="skill">
        <Container>
          <Row>
            <Col>
              <div className="skill-bx" >
                <p style={{ fontSize: "20px", color: "white" }}>Professional Skills Set</p>

                <Carousel
                  responsive={responsive}
                  infinite={true}
                  className="skill-slider"
                >
                  <div className="item">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="js" style={{ "marginTop": "50px" }} />
                  </div>
                  <div className="item">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png" alt="html" style={{ "marginTop": "50px" }} />
                  </div>
                  <div className="item">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png" alt="css" style={{ "marginTop": "50px" }} />
                  </div>
                  <div className="item">
                    <img src="https://techinfini.in/wp-content/uploads/2017/09/React-Logo-1.png" alt="react" style={{ "marginTop": "50px" }} />

                  </div>
                  <div className="item">
                    <img src="https://infinapps.com/wp-content/uploads/2018/10/mongodb-logo.png" alt="mongodb" style={{ "marginTop": "50px" }} />

                  </div>
                  <div className="item">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png" alt="sql" style={{ "marginTop": "50px" }} />

                  </div>
                  <div className="item">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png" alt="node" style={{ "marginTop": "50px" }} />

                  </div>
                  <div className="item">
                    <img src="https://www.vistarprotech.com/assets/img/portfolio/p8.png" alt="express" style={{ "marginTop": "50px" }} />

                  </div>
                </Carousel>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Skills;

