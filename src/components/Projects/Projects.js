import uuid from "react-uuid";
import React from "react";
import { projects } from "../../portfolio.js";
import ProjectContainer from "../ProjectContainer/ProjectContainer";
import "./Projects.css";

const Projects = () => {
  if (!projects.length) return null;

  return (
    <section id="projects" className="section projects">
      <h2 className="section__title">Projects</h2>
      <div className="projects__grid">
        {projects.map((project) => (
          <ProjectContainer key={uuid()} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
