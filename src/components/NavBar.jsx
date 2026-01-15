import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './NavBar.css';
import ClickSpark from './ClickSpark';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const isProjectsPage = location.pathname === '/projects';

  const handleNavClick = (e, target) => {
    e.preventDefault();
    
    // If on projects page, navigate home first then scroll
    if (isProjectsPage) {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(target);
        if (element) {
          gsap.to(window, {
            duration: 1.5,
            scrollTo: {
              y: element,
              autoKill: true
            },
            ease: 'power2.inOut'
          });
        }
      }, 100);
    } else {
      const element = document.querySelector(target);
      if (element) {
        gsap.to(window, {
          duration: 1.5,
          scrollTo: {
            y: element,
            autoKill: true
          },
          ease: 'power2.inOut'
        });
      }
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-links">
          <ClickSpark
            sparkColor='#fff'
            sparkSize={10}
            sparkRadius={15}
            sparkCount={8}
            duration={400}
          >
            <a href="#home" onClick={(e) => handleNavClick(e, 'body')}>Home</a>
          </ClickSpark>
          <ClickSpark
            sparkColor='#fff'
            sparkSize={15}
            sparkRadius={20}
            sparkCount={8}
            duration={400}
          >
            <a href="#about" onClick={(e) => handleNavClick(e, '#about')}>About</a>
          </ClickSpark>
          <ClickSpark
            sparkColor='#fff'
            sparkSize={10}
            sparkRadius={15}
            sparkCount={8}
            duration={400}
          >
            <a href="#projects" onClick={(e) => handleNavClick(e, '#projects')}>Projects</a>
          </ClickSpark>
          <ClickSpark
            sparkColor='#fff'
            sparkSize={10}
            sparkRadius={15}
            sparkCount={8}
            duration={400}
          >
            <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Contact</a>
          </ClickSpark>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
