import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/NavBar.jsx';
import Shuffle from '../components/Shuffle.jsx';
import './Projects.css';

function Projects() {
  const allProjects = [
    { 
      name: 'Job Board', 
      image: '/project1.png', 
      desc: 'A modern job board platform connecting employers with talented professionals',
      link: 'https://github.com/Dharun37/JobBoard',
      tech: ['React', 'Node.js', 'MongoDB'],
      demo: null
    },
    { 
      name: 'Simple ToDO', 
      image: '/project2.png', 
      desc: 'Intuitive task management application with a clean, minimal interface',
      link: 'https://github.com/Dharun37/fullstack-todo-app-frontend',
      tech: ['React', 'Express', 'MongoDB'],
      demo: null
    },
    { 
      name: 'Loan Genius', 
      image: '/project3.png', 
      desc: 'An intelligent machine learning web application that predicts loan approval decisions in real-time',
      link: 'https://github.com/dharanidharansr/Ml-Loan-Approval',
      tech: ['Python', 'Machine Learning', 'Flask'],
      demo: null
    }
    // Add more projects here
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#000000' }}>
      <Navbar />
      
      <div style={{
        padding: 'clamp(100px, 15vh, 120px) clamp(1rem, 4vw, 2rem) clamp(2rem, 5vw, 3rem)',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        {/* Back Button */}
        <Link 
          to="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: 'white',
            textDecoration: 'none',
            fontSize: '1rem',
            marginBottom: '2rem',
            padding: '0.5rem 1rem',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '8px',
            transition: 'all 0.3s ease',
            background: 'rgba(255, 255, 255, 0.05)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
            e.currentTarget.style.transform = 'translateX(-5px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
            e.currentTarget.style.transform = 'translateX(0)';
          }}
        >
          ← Back to Home
        </Link>

        {/* Projects Grid */}
        <div className="projects-grid">
          {allProjects.map((project, index) => (
            <div
              key={index}
              className="project-card"
              onClick={() => {
                if (project.link) {
                  window.open(project.link, '_blank', 'noopener,noreferrer');
                }
              }}
            >
              {/* Project Image */}
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="project-image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))';
                  }}
                />
              </div>

              {/* Project Info */}
              <div className="project-info">
                <h3 className="project-name">{project.name}</h3>
                <p className="project-desc">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
