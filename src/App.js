import React from "react";
import './App.css';

export default function Portfolio() {
  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        <img className="logo" src="/logo.png" alt="Neelu Logo" />
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h2>Hi, I'm <span className="highlight">Neelakanteswar Bathula</span></h2>
          <p>Computer Science Graduate | Full Stack Developer | Software Developer</p>
          <a
            href="https://drive.google.com/file/d/1Sxq7YZwrmGDYbYCS5AlikuOGTBvZ3Ml5/view?usp=sharing"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >Download Resume</a>
        </div>
        <div className="hero-img">
          <img src="/profile.jpg" alt="Neelu" className="profile-img-fixed" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2>About Me</h2>
        <p>
          I’m a Computer Science graduate from IIIT Dharwad (2019–2023) with a passion for full-stack web development and software development. I love solving real-world problems using Python, Django and modern web technologies. I'm currently looking for opportunities where I can grow as a developer.
        </p>
      </section>

      {/* Education Section */}
      <section id="education" className="education">
        <h2>Education</h2>
        <p>Bachelor of Technology in Computer Science & Engineering</p>
        <p>IIIT Dharwad | 2019 – 2023</p>
        <p>CGPA: 6.8</p>

        <p>Intermediate in Board of Intermediate Education</p>
        <p>KSN Junior College | 2017 – 2019</p>
        <p>CGPA: 9.82</p>

        <p>Secondary School in Board of Secondary Education</p>
        <p>LEMS High School | 2017</p>
        <p>CGPA: 9.7</p>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience">
        <h2>Experience</h2>
        <p>Intern @ IIIT Dharwad</p>
        <p>Jan 2023 – Jul 2023</p>
        <p>Developed a Django-based room booking system with role-based access and real-time scheduling features used by faculty and students.</p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <h2>Skills</h2>
        <p className="skills-line">
          Python, Django, React, Node.js, HTML, CSS, JavaScript, SQL, Git, AWS, Machine Learning, Data Structures and Algorithms
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="project-list">
          {[
            {
              title: 'Handwritten Equation Solver',
              desc: 'Web-based app to solve handwritten equations with error handling and real-time solution.',
              link: 'https://github.com/Neelu5566/Major_Project'
            },
            {
              title: 'IIITD Room Booking System',
              desc: 'Django-based app to schedule rooms on campus with role-based access and real-time conflict detection.',
              link: 'https://github.com/Neelu5566/RoomBookingSystem'
            },
            {
              title: 'Disease Detection via Symptoms',
              desc: 'ML and Web Scraping-based app that suggests possible diseases based on symptoms.',
              link: 'https://github.com/Neelu5566/Disease-Detection-based-on-Symptoms'
            }
          ].map(project => (
            <div className="project" key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">View Code</a>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="certifications">
        <h2>Certifications</h2>
        <ul>
          <li>
            <a href="https://drive.google.com/file/d/1v9e48gXKQPIhqxyRoD8DcIkY2YPgcGHC/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              Introduction to Python – Kaggle
            </a>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/1Bl87HoaZWQVUwU6OXTrp1mNOQe_4Hg86/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              Python Certificate – Kaggle
            </a>
          </li>
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:neelakanteswar2705@gmail.com">neelakanteswar2705@gmail.com</a></p>
        <p>
          <a href="https://www.linkedin.com/in/neelakanteswar-bathula-894896258" target="_blank" rel="noopener noreferrer">LinkedIn</a> |
          <a href="https://github.com/Neelu5566" target="_blank" rel="noopener noreferrer"> GitHub</a> |
          <a href="https://leetcode.com/neelakanteswar2705" target="_blank" rel="noopener noreferrer"> LeetCode</a>
        </p>
      </section>

      <footer className="footer">
        <p>&copy; 2025 Neelakanteswar. All rights reserved.</p>
      </footer>
    </div>
  );
}
