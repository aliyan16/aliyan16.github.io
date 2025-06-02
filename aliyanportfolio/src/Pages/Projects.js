// src/pages/Projects.js
import React from "react";
import Layout from "../components/layout";
import ProjectCard from "../components/ProjectsCards.js";
import projects from "../components/projectsData.js";
import '../components/componentCss/projects.css'; // optional

function Projects() {
  return (
    <Layout>
      <div className="projects-container">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Layout>
  );
}

export default Projects;
