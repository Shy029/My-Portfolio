import React from 'react';

const Education = () => {
  const educationData = [
    {
      title: "B.E. (Hons.), Computer Science",
      institution: "BITS Pilani, K K Birla Goa Campus",
      date: "2022 - 2026",
      details: [
        "CGPA: 9.04/10.00",
        "Relevant Coursework: Data Structures and Algorithms, Database Management Systems, Operating Systems, Object Oriented Programming",
        "Academic Projects: ETL Pipelines, Web Development, Data Processing"
      ]
    },
    {
      title: "High School Education",
      institution: "Eklavya School",
      date: "2010 - 2022",
      details: [
        "ICSE Grade X Examination: 95.7%",
        "GSEB Grade XII Examination: 81.8%",
        "Location: Ahmedabad, India"
      ]
    }
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="timeline">
          {educationData.map((edu, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>{edu.title}</h3>
                <h4>{edu.institution}</h4>
                <div className="timeline-date">{edu.date}</div>
                <ul>
                  {edu.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
