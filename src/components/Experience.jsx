import React from 'react';

const Experience = () => {
  const experiences = [
    {
      role: "SDE Intern",
      company: "Union Bank of Switzerland (UBS)",
      date: "Jun 2025 – Jul 2025",
      location: "Pune, India",
      achievements: [
        "Built an ETL data ingestion pipeline to process user & role data from REST APIs and internal platform",
        "Used Apache Spark on Azure Databricks to transform raw data for 4,000+ user groups",
        "Loaded processed datasets into Azure Data Lake Storage (ADLS) using OAuth 2.0 & AAD, replacing an insecure FTP flow"
      ],
      techStack: "PySpark, Azure Databricks, AAD, ADLS, REST APIs, OAuth 2.0"
    },
    {
      role: "Summer Intern",
      company: "National Informatics Centre (NIC)",
      date: "May 2024 – Jul 2024",
      location: "Remote",
      achievements: [
        "Built the client-side for the MWRD Subsidy Portal with React.js; created reusable components and responsive UI",
        "Developed server-side API using Node.js and designed PostgreSQL schema; implemented Google OAuth with Passport.js"
      ],
      techStack: "React.js, Node.js, PostgreSQL, Passport.js, REST APIs"
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-grid">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="experience-header">
                <h3>{exp.role}</h3>
                <h4>{exp.company}</h4>
                <div className="experience-date">{exp.date} • {exp.location}</div>
              </div>
              <div className="experience-content">
                <ul>
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex}>{achievement}</li>
                  ))}
                </ul>
                <div className="tech-stack">
                  <strong>Tech Stack:</strong> {exp.techStack}
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
