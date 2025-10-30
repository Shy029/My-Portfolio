import React from 'react';

const Hobbies = () => {
  const hobbies = [
    {
      name: "Coding & Open Source",
      description: "Contributing to open source projects and exploring new technologies",
      icon: "fas fa-code"
    },
    {
      name: "Chess",
      description: "Strategic thinking and competitive gameplay",
      icon: "fas fa-chess"
    },
    {
      name: "Badminton",
      description: "Staying active and improving hand-eye coordination",
      icon: "fas fa-table-tennis"
    },
    {
      name: "Gaming",
      description: "Exploring virtual worlds and problem-solving games",
      icon: "fas fa-gamepad"
    },
    {
      name: "Mentoring",
      description: "Helping fellow students learn programming and problem-solving",
      icon: "fas fa-chalkboard-teacher"
    },
    {
      name: "Reading",
      description: "Staying updated with technology trends and personal development",
      icon: "fas fa-book"
    }
  ];

  return (
    <section id="hobbies" className="hobbies">
      <div className="container">
        <h2 className="section-title">Interests & Hobbies</h2>
        <div className="hobbies-grid">
          {hobbies.map((hobby, index) => (
            <div key={index} className="hobby-card">
              <div className="hobby-icon">
                <i className={hobby.icon}></i>
              </div>
              <h3>{hobby.name}</h3>
              <p>{hobby.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
