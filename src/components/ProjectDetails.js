import "./Project.css";
import React from "react";
import Projects from "./Project";
import ProjectsData from "./ProjectsData";


const ProjectDetails = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading" style={{ color: "white" }}>Projects</h1>
      <div className="project-container">
        {ProjectsData.map((val, index) => {
          return (
            <Projects
              key={index}
              imgsrc={val.imgsrc}
              title={val.title}
              view={val.view}
              frontendsource={val.frontendsource}
              backendsource={val.backendsource}
            />
          )
        })}
      </div>



    </div>
  );
};

export default ProjectDetails;




































