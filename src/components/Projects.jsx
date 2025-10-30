import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Certificate Mailing System",
      description: "Automated generation of 1000+ personalized LaTeX certificates and secure mail distribution, saving 5–6 hours per cycle.",
      tech: ["Python", "LaTeX", "SMTP", "Pandas"],
      icon: "fas fa-certificate"
    },
    {
      title: "Semantic Search Engine for Developer Support",
      description: "Two-stage hybrid search connecting user errors to a 1,000+ video solution knowledge base using fuzzy & semantic ranking.",
      tech: ["Python", "FastAPI", "SentenceTransformers", "RapidFuzz"],
      icon: "fas fa-search"
    },
    {
      title: "Document Approval System",
      description: "Web-based approval workflow for faculty bills; backend & DB architecture. Ranked Top 16 at department hackathon.",
      tech: ["Python", "MySQL", "Flask", "React"],
      icon: "fas fa-file-alt",
      githubLink: "https://github.com/AdiC0603/document-approval"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
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
