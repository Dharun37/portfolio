import React, { useState } from 'react';
import './Certifications.css';

function Certifications() {
  const certifications = [
    {
      name: 'NVIDIA Gen AI Certification',
      issuer: 'NVIDIA',
      date: 'Oct 2025',
      image: '/nvidia-cert.png' // Add your certificate image to public folder
    },
    {
      name: 'Oracle Java Foundation Associate',
      issuer: 'Oracle',
      date: 'Dec 2025',
      image: '/oracle-cert.png' // Add your certificate image to public folder
    }
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedCert = certifications[selectedIndex];

  const handlePrevious = () => {
    setSelectedIndex((prev) => (prev === 0 ? certifications.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev === certifications.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="certifications-section">
      <div className="cert-header">
        <h2 className="cert-main-title">Certifications</h2>
      </div>

      <div className="cert-content">
        {/* Left Side - List */}
        <div className="cert-list">
          <h3 className="cert-list-title">Certifications ({certifications.length})</h3>
          <div className="cert-items">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className={`cert-item ${index === selectedIndex ? 'active' : ''}`}
                onClick={() => setSelectedIndex(index)}
              >
                <h4 className="cert-item-name">{cert.name}</h4>
                <p className="cert-item-issuer">{cert.issuer}</p>
                <span className="cert-item-date">{cert.date}</span>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="cert-navigation">
            <button onClick={handlePrevious} className="cert-nav-btn">
              &lt; Previous
            </button>
            <span className="cert-count">
              {selectedIndex + 1} of {certifications.length}
            </span>
            <button onClick={handleNext} className="cert-nav-btn">
              Next &gt;
            </button>
          </div>
        </div>

        {/* Right Side - Certificate Image */}
        <div className="cert-details">
          <div className="cert-card-display">
            {selectedCert.image ? (
              <img 
                src={selectedCert.image} 
                alt={selectedCert.name}
                className="cert-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<div class="cert-placeholder"><h3 class="cert-display-name">' + selectedCert.name + '</h3></div>';
                }}
              />
            ) : (
              <div className="cert-placeholder">
                <h3 className="cert-display-name">{selectedCert.name}</h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Certifications;
