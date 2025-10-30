import React from 'react';

const About = () => {
  const skills = [
    { icon: 'fas fa-code', name: 'C, C++, Python, Java' },
    { icon: 'fas fa-database', name: 'Data Structures, Algorithms' },
    { icon: 'fas fa-brain', name: 'Machine Learning & Deep Learning' },
    { icon: 'fas fa-chart-line', name: 'Pandas, NumPy, Scikit-learn' },
    { icon: 'fas fa-robot', name: 'Transformers, LangChain' },
    { icon: 'fas fa-project-diagram', name: 'System Design, OOPs' },
    { icon: 'fas fa-tools', name: 'Git, Jupyter, Kaggle' },
    { icon: 'fas fa-microchip', name: 'Arduino, Hardware' },
    { icon: 'fas fa-users', name: 'Leadership, NSS VP' }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a tech enthusiast with a foundation in Data Structures, Algorithms, and System Design, complemented by hands-on 
              experience in machine learning and full-stack applications. During my journey, I've worked on impactful projects ranging 
              from NLP-based resume matchers to semantic search platforms and real-time health recommendation systems.
            </p>
            <p>
              I enjoy exploring new technologies, contributing to open-source, and collaborating in hackathons that push my technical 
              and creative boundaries. Currently, I serve as the Vice President of NSS, NIT Jamshedpur, where I combine leadership and 
              social responsibility to drive meaningful initiatives.
            </p>
            <p>
              My passion lies in building intelligent systems that solve real-world problems through data, automation, and innovation. 
              I believe in continuous learning and staying updated with the latest technologies in the rapidly evolving field of 
              technology and engineering.
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
