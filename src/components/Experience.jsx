import React from 'react';

const Experience = () => {
  const experiences = [
    {
      role: "Software Engineer Intern",
      company: "Union Bank of Switzerland (UBS), Pune",
      date: "May 2025 – Jul 2025",
      location: "",
      achievements: [
        "Developed an automated resume-to-job-description matcher using NLP and ML.",
        "Implemented Logistic Regression and Cosine Similarity to compute skill match scores, achieving 0.8+ accuracy thresholds",
        "Designed a Streamlit UI for real-time input and visualization",
        "Reduced manual screening by up to 1 FTE per 100 job postings"
      ],
      techStack: "Python, NLP, Machine Learning, Streamlit, Logistic Regression, Cosine Similarity"
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <div className="experience-grid">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="experience-header">
                <h3>{exp.role}</h3>
                <h4>{exp.company}</h4>
                <div className="experience-date">{exp.date}</div>
              </div>
              <div className="experience-content">
                <ul>
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex}>{achievement}</li>
                  ))}
                </ul>
                <div className="tech-stack">
                  <strong>Tech:</strong> {exp.techStack}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
