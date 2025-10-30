import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const heroTitleRef = useRef(null);

  useEffect(() => {
    const typeWriter = (element, text, speed = 50) => {
      let i = 0;
      element.innerHTML = '';
      
      const timer = setInterval(() => {
        if (i < text.length) {
          element.innerHTML += text.charAt(i);
          i++;
        } else {
          clearInterval(timer);
        }
      }, speed);
    };

    if (heroTitleRef.current) {
      const originalText = heroTitleRef.current.textContent;
      typeWriter(heroTitleRef.current, originalText, 50);
    }
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title" ref={heroTitleRef}>
            Hi, I'm <span className="highlight">Shyamli Rupam</span>
          </h1>
          <p className="hero-subtitle">Computer Science Student & Developer</p>
          <p className="hero-description">
            Passionate about building innovative solutions and exploring the intersection of 
            technology and creativity. Currently pursuing B.E. (Hons.) in Computer Science 
            at BITS Pilani, Goa.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Get In Touch</a>
            <a href="#projects" className="btn btn-secondary">View My Work</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="profile-card">
            <div className="profile-image">
              <img src="/shy.jpg" alt="Shyamli Rupam" className="profile-photo" />
            </div>
            <div className="profile-info">
              <h3>Shyamli Rupam</h3>
              <p>Developer & Innovator</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
