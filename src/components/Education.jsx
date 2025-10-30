import React from 'react';

const Education = () => {
  const educationData = [
    {
      title: "B.Tech, Electronics and Communication Engineering",
      institution: "National Institute of Technology (NIT), Jamshedpur",
      date: "2022 - 2026",
      details: [
        "Bachelor of Technology in Electronics and Communication Engineering with focus on Machine Learning, System Design, and Software Development.",
        "Batch: 2026",
        "Relevant Coursework: Data Structures, Algorithms, System Design, Machine Learning, Computer Networks, Database Management Systems",
        "Leadership: Vice President, NSS NIT Jamshedpur"
      ]
    },
    {
      title: "Senior Secondary (12th Grade)",
      institution: "M.K. D.A.V. Public School, Daltonganj, Jharkhand",
      date: "2019 - 2021",
      details: [
        "Percentage: 95.2%",
        "Secured top scores in Physics, Chemistry, and Mathematics",
        "Actively participated in science exhibitions and coding competitions",
        "Awarded for academic excellence and leadership during the final year"
      ]
    }
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Academic Background</h2>
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
