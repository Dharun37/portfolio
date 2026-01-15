import React from 'react';
import './Experience.css';

function Experience() {
  const experiences = [
    {
      company: 'Coptercode',
      role: 'Full Stack Developer Intern',
      duration: 'Jan 2026 - Present',
      location: 'Remote',
      responsibilities: [
        'Developing and maintaining full-stack web applications',
        'Working with modern technologies and frameworks',
        'Collaborating with cross-functional teams'
      ]
    }
  ];

  return (
    <div className="experience-section">
      <h2 style={{
        fontSize: 'clamp(2rem, 6vw, 4rem)',
        fontWeight: 'bold',
        marginBottom: '2rem',
        width: '100%',
        display: 'block',
        color: 'white',
        textAlign: 'left',
        margin: '0 0 2rem 0'
      }}>
        Experience
      </h2>

      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <div className="experience-header">
              <div className="experience-company-info">
                <h3 className="experience-role">{exp.role}</h3>
                <p className="experience-company">{exp.company}</p>
              </div>
              <div className="experience-meta">
                <span className="experience-duration">{exp.duration}</span>
                <span className="experience-location">{exp.location}</span>
              </div>
            </div>
            
            <ul className="experience-responsibilities">
              {exp.responsibilities.map((resp, idx) => (
                <li key={idx}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
