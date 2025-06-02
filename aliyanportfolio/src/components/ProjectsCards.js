// src/components/ProjectCard.js
import React from "react";
import './componentCss/projects.css'; // Create this for styling icon hover etc.
import '../images/autonomous.png'

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="card-image">
        <img src={project.image} alt={project.title} />
        <div className="card-hover">
          <p>{project.description}</p>
          <a href={project.codeLink} target="_blank" rel="noopener noreferrer">Visit Code</a>
        </div>
      </div>
      <h3>{project.title}</h3>
      <div className="tool-icons">
        {project.tools.map(tool => (
          <img key={tool} src={`/icons/${tool}.png`} alt={tool} title={tool} />
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
