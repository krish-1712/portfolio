import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Heroimg2 from '../components/Heroimg2';
import ProjectDetails from '../components/ProjectDetails';


const Project = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2  heading="PROJECTS" text="Some Of my works"/>
      <ProjectDetails/>
      <Footer />
    </div>
  )
}

export default Project