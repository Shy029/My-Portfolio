import React from 'react';

const About = () => {
  const skills = [
    { icon: 'fas fa-code', name: 'C++' },
    { icon: 'fas fa-code', name: 'C' },
    { icon: 'fab fa-python', name: 'Python' },
    { icon: 'fas fa-database', name: 'MySQL' },
    { icon: 'fas fa-server', name: 'PySpark' },
    { icon: 'fab fa-react', name: 'React.js' },
    { icon: 'fab fa-node-js', name: 'Node.js' },
    { icon: 'fas fa-cloud', name: 'Azure Databricks' },
    { icon: 'fas fa-flask', name: 'Flask' },
    { icon: 'fas fa-bolt', name: 'FastAPI' },
    { icon: 'fas fa-brain', name: 'Machine Learning' },
    { icon: 'fas fa-cogs', name: 'ETL Pipelines' },
    { icon: 'fab fa-git-alt', name: 'Git' },
    { icon: 'fas fa-plug', name: 'REST APIs' },
    { icon: 'fas fa-shield-alt', name: 'OAuth 2.0' }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a Computer Science undergraduate at BITS Pilani, Goa with a strong interest in 
              backend systems, data engineering, and applied machine learning. I enjoy designing 
              robust data pipelines and building production-grade services that scale.
            </p>
            <p>
              With hands-on experience in building ETL pipelines, developing web applications, 
              and working with cloud technologies, I'm passionate about creating efficient 
              solutions that solve real-world problems. My projects span from automated 
              certificate generation systems to semantic search engines.
            </p>
            <p>
              I believe in continuous learning and staying updated with the latest technologies. 
              When I'm not coding, you can find me playing chess, reading about new developments 
              in AI, or mentoring fellow students in their programming journey.
            </p>
          </div>
          
          <div className="skills">
            <h3>Key Skills</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <i className={skill.icon}></i>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
