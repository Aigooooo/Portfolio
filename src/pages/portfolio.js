import React, { useState } from "react";
import projects from "../data/projects";
import "../css/portfolio.css";

function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const categories = ["All", ...new Set(projects.map(project => project.category))];
  
  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="portfolio-container">
      <div className="portfolio-header">
        <h1>My Projects</h1>
        <p>A collection of my professional work and personal projects</p>
      </div>

      <div className="filter-buttons">
        {categories.map(category => (
          <button
            key={category}
            className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map(project => (
          <div key={project.id} className="project-card">
            <div className="project-category">
              <span className="category-tag">{project.category}</span>
            </div>
            
            <div className="project-header">
              <h3>{project.title}</h3>
              <span className={`status ${project.status.toLowerCase()}`}>
                {project.status}
              </span>
            </div>
            
            <p className="project-description">{project.description}</p>
            
            <div className="project-highlights">
              <h4>Key Achievements:</h4>
              <ul>
                {project.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>
            
            <div className="project-tech">
              <h4>Technologies:</h4>
              <div className="tech-tags">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio; 