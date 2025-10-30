import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Knowledge Vault – UBS Internal Hackathon",
      description: "Built the backend logic and data pipeline for a semantic search platform that links user errors to a knowledge base of 1000+ video solutions.",
      tech: ["Python", "BERT", "RapidFuzz", "Cosine Similarity"],
      icon: "fas fa-search"
    },
    {
      title: "Disease Prediction System",
      description: "Designed a PySpark-based backend and Streamlit frontend for real-time disease prediction with KMeans clustering and ALS algorithm.",
      tech: ["PySpark", "Streamlit", "KMeans", "ALS Algorithm"],
      icon: "fas fa-heartbeat"
    },
    {
      title: "Resume-Job Matcher",
      description: "NLP-based automated resume-to-job-description matcher using Logistic Regression and Cosine Similarity for skill matching.",
      tech: ["NLP", "Machine Learning", "Logistic Regression", "Streamlit"],
      icon: "fas fa-brain"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <i className={project.icon}></i>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                {project.githubLink && (
                  <div className="project-links">
                    <a href={project.githubLink} className="project-link" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github"></i> GitHub
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
