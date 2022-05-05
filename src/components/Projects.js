import React, { useEffect } from "react";
import projects from "../data";
import AOS from "aos";
import "aos/dist/aos.css";


const Projects = () => {

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (

    <section className="projects" id="projects">
      <div className="container">
        <h2 data-aos="fade-down" className="main-header">
          <span>{"<"}</span>
          Projects
          <span>{">"}</span>
        </h2>

        <div className="projects-content">
          {projects.map((project, index) => (
            <div data-aos="zoom-in" key={index} className="project">
              <h4>{project.title}</h4>
              <div className="project-content">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-description">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <i className="fa-brands fa-github"></i>
                    <span>Github</span>
                  </a>
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    <i className="fa-solid fa-arrow-right-to-bracket"></i>
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
