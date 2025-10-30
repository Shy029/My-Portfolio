import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <h2>Shyamli Rupam</h2>
          </div>
          <ul className="nav-menu">
            <li className="nav-item"><a href="#home" className="nav-link">Home</a></li>
            <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
            <li className="nav-item"><a href="#education" className="nav-link">Education</a></li>
            <li className="nav-item"><a href="#experience" className="nav-link">Experience</a></li>
            <li className="nav-item"><a href="#projects" className="nav-link">Projects</a></li>
            <li className="nav-item"><a href="#achievements" className="nav-link">Achievements</a></li>
            <li className="nav-item"><a href="#coding-profiles" className="nav-link">Online Profiles</a></li>
            <li className="nav-item"><a href="#hobbies" className="nav-link">Hobbies</a></li>
            <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
          <div className="hamburger">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">Hi, I'm <span className="highlight">Shyamli Rupam</span></h1>
            <p className="hero-subtitle">Electronics and Communication Engineering — NIT Jamshedpur (Batch 2026)</p>
            <p className="hero-description">
              I'm a passionate Electronics and Communication Engineering student at NIT Jamshedpur with a strong interest in
              Machine Learning, System Design, and Software Development. I love building intelligent systems that solve
              real-world problems through data, automation, and innovation.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">View My Work</a>
              <a href="#contact" className="btn btn-secondary">Get In Touch</a>
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

      {/* About Section */}
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
              <div className="skills">
                <h3>Key Skills</h3>
                <div className="skills-grid">
                  <div className="skill-item"><i className="fas fa-code"></i><span>C, C++, Python, Java</span></div>
                  <div className="skill-item"><i className="fas fa-database"></i><span>Data Structures, Algorithms</span></div>
                  <div className="skill-item"><i className="fas fa-brain"></i><span>Machine Learning & Deep Learning</span></div>
                  <div className="skill-item"><i className="fas fa-chart-line"></i><span>Pandas, NumPy, Scikit-learn</span></div>
                  <div className="skill-item"><i className="fas fa-robot"></i><span>Transformers, LangChain</span></div>
                  <div className="skill-item"><i className="fas fa-project-diagram"></i><span>System Design, OOPs</span></div>
                  <div className="skill-item"><i className="fas fa-tools"></i><span>Git, Jupyter, Kaggle</span></div>
                  <div className="skill-item"><i className="fas fa-microchip"></i><span>Arduino, Hardware</span></div>
                  <div className="skill-item"><i className="fas fa-users"></i><span>Leadership, NSS VP</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="education">
        <div className="container">
          <h2 className="section-title">Academic Background</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>B.Tech, Electronics and Communication Engineering</h3>
                <h4>National Institute of Technology (NIT), Jamshedpur</h4>
                <p className="timeline-date">2022 - 2026</p>
                <p>Bachelor of Technology in Electronics and Communication Engineering with focus on Machine Learning, System Design, and Software Development.</p>
                <ul>
                  <li>Batch: 2026</li>
                  <li>Relevant Coursework: Data Structures, Algorithms, System Design, Machine Learning, Computer Networks, Database Management Systems</li>
                  <li>Leadership: Vice President, NSS NIT Jamshedpur</li>
                </ul>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Senior Secondary (12th Grade)</h3>
                <h4>M.K. D.A.V. Public School, Daltonganj, Jharkhand</h4>
                <p className="timeline-date">2019 - 2021</p>
                <p>Completed senior secondary education with excellent academic performance and active participation in extracurricular activities.</p>
                <ul>
                  <li>Percentage: 95.2%</li>
                  <li>Secured top scores in Physics, Chemistry, and Mathematics</li>
                  <li>Actively participated in science exhibitions and coding competitions</li>
                  <li>Awarded for academic excellence and leadership during the final year</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience">
        <div className="container">
          <h2 className="section-title">Work Experience</h2>
          <div className="experience-grid">
            <div className="experience-card">
              <div className="experience-header">
                <h3>Software Engineer Intern</h3>
                <h4>Union Bank of Switzerland (UBS), Pune</h4>
                <p className="experience-date">May 2025 – Jul 2025</p>
              </div>
              <div className="experience-content">
                <p>Developed an automated resume-to-job-description matcher using NLP and ML.</p>
                <ul>
                  <li>Implemented Logistic Regression and Cosine Similarity to compute skill match scores, achieving 0.8+ accuracy thresholds</li>
                  <li>Designed a Streamlit UI for real-time input and visualization</li>
                  <li>Reduced manual screening by up to 1 FTE per 100 job postings</li>
                </ul>
                <p className="tech-stack"><strong>Tech:</strong> Python, NLP, Machine Learning, Streamlit, Logistic Regression, Cosine Similarity</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image"><i className="fas fa-search"></i></div>
              <div className="project-content">
                <h3>Knowledge Vault – UBS Internal Hackathon</h3>
                <p>Built the backend logic and data pipeline for a semantic search platform that links user errors to a knowledge base of 1000+ video solutions.</p>
                <div className="project-tech">
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">BERT</span>
                  <span className="tech-tag">RapidFuzz</span>
                  <span className="tech-tag">Cosine Similarity</span>
                </div>
                <div className="project-links">
                  <span className="project-link"><i className="fas fa-trophy"></i> UBS Internal Hackathon</span>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image"><i className="fas fa-heartbeat"></i></div>
              <div className="project-content">
                <h3>Disease Prediction System</h3>
                <p>Designed a PySpark-based backend and Streamlit frontend for real-time disease prediction with KMeans clustering and ALS algorithm.</p>
                <div className="project-tech">
                  <span className="tech-tag">PySpark</span>
                  <span className="tech-tag">Streamlit</span>
                  <span className="tech-tag">KMeans</span>
                  <span className="tech-tag">ALS Algorithm</span>
                </div>
                <div className="project-links">
                  <span className="project-link"><i className="fas fa-trophy"></i> Google Girl Hackathon 2024</span>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image"><i className="fas fa-brain"></i></div>
              <div className="project-content">
                <h3>Resume-Job Matcher</h3>
                <p>NLP-based automated resume-to-job-description matcher using Logistic Regression and Cosine Similarity for skill matching.</p>
                <div className="project-tech">
                  <span className="tech-tag">NLP</span>
                  <span className="tech-tag">Machine Learning</span>
                  <span className="tech-tag">Logistic Regression</span>
                  <span className="tech-tag">Streamlit</span>
                </div>
                <div className="project-links">
                  <span className="project-link"><i className="fas fa-briefcase"></i> UBS Internship Project</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="achievements">
        <div className="container">
          <h2 className="section-title">Achievements & Recognition</h2>
          <div className="achievements-grid">
            <div className="achievement-card"><div className="achievement-icon"><i className="fas fa-trophy"></i></div><h3>🥇 Semifinalist</h3><p>Google Girl Hackathon 2024</p></div>
            <div className="achievement-card"><div className="achievement-icon"><i className="fas fa-code"></i></div><h3>💻 Selected Participant</h3><p>MSME Women's Hackathon 5.0 (Zonal Level)</p></div>
            <div className="achievement-card"><div className="achievement-icon"><i className="fas fa-star"></i></div><h3>🔧 Open Source Contributor</h3><p>GSSoC'24 - Improved ML Nexus repository efficiency by 3%</p></div>
            <div className="achievement-card"><div className="achievement-icon"><i className="fas fa-users"></i></div><h3>🤝 Leadership Role</h3><p>Vice President, NSS NIT Jamshedpur</p></div>
          </div>
        </div>
      </section>

      {/* Online Profiles Section */}
      <section id="coding-profiles" className="coding-profiles">
        <div className="container">
          <h2 className="section-title">Online Profiles</h2>
          <div className="profiles-grid">
            <div className="profile-card">
              <div className="profile-icon"><i className="fab fa-linkedin"></i></div>
              <h3>LinkedIn</h3>
              <p>Professional networking and career updates</p>
              <a href="https://www.linkedin.com/in/shyamli-rupam?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer" className="profile-link"><i className="fas fa-external-link-alt"></i> View Profile</a>
            </div>
            <div className="profile-card">
              <div className="profile-icon leetcode-icon"><img src="https://leetcode.com/static/images/LeetCode_logo_rvs.png" alt="LeetCode Logo" /></div>
              <h3>LeetCode</h3>
              <p>Algorithm and data structure problem solving</p>
              <a href="https://leetcode.com/u/shyamli_29/" target="_blank" rel="noreferrer" className="profile-link"><i className="fas fa-external-link-alt"></i> View Profile</a>
            </div>
            <div className="profile-card">
              <div className="profile-icon codechef-icon"><img src="https://cdn.codechef.com/sites/all/themes/abessive/cc-logo.png" alt="CodeChef Logo" /></div>
              <h3>CodeChef</h3>
              <p>Competitive programming contests and ratings</p>
              <a href="https://www.codechef.com/users/real_enigma029" target="_blank" rel="noreferrer" className="profile-link"><i className="fas fa-external-link-alt"></i> View Profile</a>
            </div>
            <div className="profile-card">
              <div className="profile-icon"><i className="fab fa-github"></i></div>
              <h3>GitHub</h3>
              <p>Open source projects and code repositories</p>
              <a href="https://github.com/Shy029" target="_blank" rel="noreferrer" className="profile-link"><i className="fas fa-external-link-alt"></i> View Profile</a>
            </div>
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section id="hobbies" className="hobbies">
        <div className="container">
          <h2 className="section-title">Hobbies & Interests</h2>
          <div className="hobbies-grid">
            <div className="hobby-card"><div className="hobby-icon"><i className="fas fa-table-tennis-paddle-ball"></i></div><h3>Badminton & Yoga</h3><p>Playing badminton and staying active through yoga for physical fitness and mental well-being.</p></div>
            <div className="hobby-card"><div className="hobby-icon"><i className="fas fa-music"></i></div><h3>Music</h3><p>Listening to music and exploring different genres to relax and find inspiration.</p></div>
            <div className="hobby-card"><div className="hobby-icon"><i className="fas fa-book"></i></div><h3>Reading & Journaling</h3><p>Reading books and journaling regularly for personal growth and self-reflection.</p></div>
            <div className="hobby-card"><div className="hobby-icon"><i className="fas fa-pen"></i></div><h3>Creative Writing</h3><p>Writing creative and reflective pieces to express thoughts and explore creativity.</p></div>
            <div className="hobby-card"><div className="hobby-icon"><i className="fas fa-code"></i></div><h3>Open Source</h3><p>Contributing to open-source projects and learning collaboratively with the developer community.</p></div>
            <div className="hobby-card"><div className="hobby-icon"><i className="fas fa-camera"></i></div><h3>Photography</h3><p>Capturing moments and exploring the world through the lens, finding beauty in everyday life.</p></div>
            <div className="hobby-card"><div className="hobby-icon"><i className="fas fa-palette"></i></div><h3>Drawing</h3><p>Expressing creativity through art and drawing, exploring different techniques and styles.</p></div>
            <div className="hobby-card"><div className="hobby-icon"><i className="fas fa-guitar"></i></div><h3>Musical Instruments</h3><p>Playing musical instruments to create melodies and express emotions through music.</p></div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Let's Connect!</h3>
              <p>I'm always interested in new opportunities and collaborations. Feel free to reach out!</p>
              <div className="contact-methods">
                <div className="contact-method"><i className="fas fa-envelope"></i><div><h4>Email</h4><p><a href="mailto:shy2329at@gmail.com" className="email-link">shy2329at@gmail.com</a></p></div></div>
                <div className="contact-method"><i className="fas fa-phone"></i><div><h4>Phone</h4><p>+91 9123223959</p></div></div>
                <div className="contact-method"><i className="fas fa-map-marker-alt"></i><div><h4>Location</h4><p>Jamshedpur, India</p></div></div>
              </div>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/shyamli-rupam?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="social-link" title="LinkedIn"><i className="fab fa-linkedin"></i></a>
                <a href="https://github.com/Shy029" className="social-link" title="GitHub"><i className="fab fa-github"></i></a>
                <a href="https://leetcode.com/u/shyamli_29/" className="social-link" title="LeetCode"><i className="fas fa-code"></i></a>
                <a href="https://www.codechef.com/users/real_enigma029" target="_blank" rel="noreferrer" className="social-link" title="CodeChef"><i className="fas fa-trophy"></i></a>
              </div>
            </div>
            <div className="contact-form">
              <form id="contact-form">
                <div className="form-group"><input type="text" id="from_name" name="from_name" placeholder="Your Name" required /></div>
                <div className="form-group"><input type="email" id="from_email" name="from_email" placeholder="Your Email" required /></div>
                <div className="form-group"><input type="text" id="subject" name="subject" placeholder="Subject" required /></div>
                <div className="form-group"><textarea id="message" name="message" placeholder="Your Message" rows="5" required></textarea></div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p>© 2025 Shyamli Rupam. All rights reserved.</p>
            <p>Built with ❤️ and modern web technologies</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
