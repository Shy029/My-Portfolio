import React from 'react';

const Hobbies = () => {
  const hobbies = [
    { name: 'Badminton & Yoga', description: 'Playing badminton and staying active through yoga for physical fitness and mental well-being.', icon: 'fas fa-table-tennis-paddle-ball' },
    { name: 'Music', description: 'Listening to music and exploring different genres to relax and find inspiration.', icon: 'fas fa-music' },
    { name: 'Reading & Journaling', description: 'Reading books and journaling regularly for personal growth and self-reflection.', icon: 'fas fa-book' },
    { name: 'Creative Writing', description: 'Writing creative and reflective pieces to express thoughts and explore creativity.', icon: 'fas fa-pen' },
    { name: 'Open Source', description: 'Contributing to open-source projects and learning collaboratively with the developer community.', icon: 'fas fa-code' },
    { name: 'Photography', description: 'Capturing moments and exploring the world through the lens, finding beauty in everyday life.', icon: 'fas fa-camera' },
    { name: 'Drawing', description: 'Expressing creativity through art and drawing, exploring different techniques and styles.', icon: 'fas fa-palette' },
    { name: 'Musical Instruments', description: 'Playing musical instruments to create melodies and express emotions through music.', icon: 'fas fa-guitar' }
  ];

  return (
    <section id="hobbies" className="hobbies">
      <div className="container">
        <h2 className="section-title">Hobbies & Interests</h2>
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
