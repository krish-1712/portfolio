import "./Project.css";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaGithub, FaChrome } from "react-icons/fa";
import { Link } from "react-router-dom";

const Project = () => {
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

    const projects = [
        {
            name: "Shop In Style",
            image: "https://images.unsplash.com/photo-1525328437458-0c4d4db7cab4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            githubLink: "https://github.com/krish-1712/react-task2.git",
            chromeLink: "https://magenta-cendol-e98ff1.netlify.app/",
        },
        {
            name: "Card Price",
            image: "https://images.unsplash.com/photo-1616789533930-7af5876838a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80",
            githubLink: "https://github.com/krish-1712/react-task1.git",
            chromeLink: "https://resplendent-cranachan-b196d0.netlify.app/",
        },
        {
            name: "YouTube Clone",
            image: "https://images.unsplash.com/photo-1616469829526-7057a1427626?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            githubLink: "https://github.com/krish-1712/MediaApplication-Frontend.git",
            chromeLink: "https://adorable-tarsier-dc0432.netlify.app/",
        },
        {
            name: "Customer Relationship Management",
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            githubLink: "https://github.com/krish-1712/CRM-Frontend.git",
            chromeLink: "https://clinquant-kelpie-587408.netlify.app/",
        },
        {
            name: "User Management",
            image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            githubLink: "https://github.com/krish-1712/react-task6.git",
            chromeLink: "https://resonant-alfajores-898daf.netlify.app/",
        },

    ];

    return (
        <div>
            <div className="skill">
                <Container>
                    <Row>
                        <Col>
                            <div className="skill-bx">
                                <p style={{fontSize:"20px",color:"white"}}>My Recent Projects</p>

                                <Carousel
                                    responsive={responsive}
                                    infinite={true}
                                    className="skill-slider"
                                >
                                    {projects.map((project, index) => (
                                        <div key={index}>
                                            <div className="proj-border">
                                                <img src={project.image} alt={project.name} id="lite" />
                                                <div>{project.name}</div>
                                                <div className="loot">
                                                    <Link to={project.githubLink}  target="_blank">
                                                        <FaGithub size={25} style={{ color: "#fff" }} />
                                                    </Link>
                                                    <span style={{ paddingLeft: "20px" }}>
                                                        <Link to={project.chromeLink} target="_blank">
                                                            <FaChrome size={25} style={{ color: "#fff" }}  />
                                                        </Link>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Carousel>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Project;
