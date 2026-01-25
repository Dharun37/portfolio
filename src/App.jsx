import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { SiReact, SiJavascript, SiHtml5, SiCss3, SiNodedotjs, SiMongodb, SiGit, SiPython } from 'react-icons/si';
import Orb from './components/Orb.jsx';
import Navbar from './components/NavBar.jsx';
import SplitText from './components/SplitText.jsx';
import TextType from './components/TextType.jsx';
import ProfileCard from './components/ProfileCard.jsx';
import JavaIcon from './components/JavaIcon.jsx';
import Shuffle from './components/Shuffle.jsx';
import CardSwap, { Card } from './components/CardSwap.jsx';
import GlareHover from './components/GlareHover.jsx';
import MobileCarousel from './components/MobileCarousel.jsx';
import Experience from './components/Experience.jsx';
import Certifications from './components/Certifications.jsx';
import './App.css';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  const navigate = useNavigate();
  
  const allProjects = [
    { 
      name: 'Job Board', 
      image: '/project1.png', 
      desc: 'A modern job board platform connecting employers with talented professionals',
      link: 'https://github.com/Dharun37/JobBoard'
    },
    { 
      name: 'Simple ToDO', 
      image: '/project2.png', 
      desc: 'Intuitive task management application with a clean, minimal interface',
      link: 'https://github.com/Dharun37/fullstack-todo-app-frontend'
    },
    { 
      name: 'Loan Genius', 
      image: '/project3.png', 
      desc: 'An intelligent machine learning web application that predicts loan approval decisions in real-time',
      link: 'https://github.com/dharanidharansr/Ml-Loan-Approval'
    }
  ];

  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  useEffect(() => {
    // Create ScrollSmoother
    const smoother = ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 1.5,
      effects: true,
      smoothTouch: 0.5, // Enable smooth scrolling on mobile with lighter effect
      normalizeScroll: false // Let mobile handle its own scroll behavior
    });

    return () => {
      // Cleanup on unmount
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      smoother.kill();
    };
  }, []);

  return (
    <div id="smooth-wrapper" style={{ overflow: 'hidden' }}>
      <div id="smooth-content" style={{ width: '100%', minHeight: '100vh', position: 'relative' }}>
      
      <Navbar />
      
      {/* Hero Section - Full Page */}
      <div className="full-page-section" style={{
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem 1rem',
        color: 'white',
        overflow: 'hidden'
      }}>
        {/* Orb container with content inside */}
        <div style={{
          position: 'relative',
          width: 'min(95vw, 95vh, 1000px)',
          height: 'min(95vw, 95vh, 1000px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {/* Orb background */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 0
          }}>
            <Orb
              hoverIntensity={0.5}
              rotateOnHover={true}
              hue={0}
              forceHoverState={false}
              backgroundColor="#000000"
            />
          </div>
          
          {/* Content constrained inside circle */}
          <div className="hero-content" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            zIndex: 1,
            maxWidth: '80%',
            padding: 'clamp(0.5rem, 2vw, 2rem)',
            textAlign: 'center'
          }}>
          
          <h2 style={{
            fontSize: 'clamp(1.2rem, 4vw, 2rem)',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: 'clamp(0.5rem, 2vw, 1rem)',
            lineHeight: 1.1
          }}>
            Hi, I'm Dharun
          </h2>
          
          <div style={{
            fontSize: 'clamp(0.9rem, 2.5vw, 1.5rem)',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: 'clamp(1rem, 3vw, 2rem)',
            lineHeight: 1.3
          }}>
            <span>A Full Stack Developer</span>
          </div>

          <div style={{
            display: 'flex',
            gap: 'clamp(0.5rem, 2vw, 1rem)',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            <a 
              href="/Dharun's resume for portfolio.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <button style={{
                padding: 'clamp(0.4rem, 1.5vw, 0.6rem) clamp(0.6rem, 2.5vw, 1.2rem)',
                background: 'white',
                border: 'none',
                borderRadius: '50px',
                color: '#000',
                fontSize: 'clamp(0.65rem, 1.8vw, 0.9rem)',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
                minHeight: 'auto',
                minWidth: 'auto'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 12px 40px 0 rgba(0, 0, 0, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 8px 32px 0 rgba(0, 0, 0, 0.3)';
              }}
              onTouchStart={(e) => {
                e.target.style.transform = 'scale(0.95)';
              }}
              onTouchEnd={(e) => {
                e.target.style.transform = 'scale(1)';
              }}
              >
                Download Resume
              </button>
            </a>

            <button style={{
              padding: 'clamp(0.4rem, 1.5vw, 0.6rem) clamp(0.6rem, 2.5vw, 1.2rem)',
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(15px)',
              WebkitBackdropFilter: 'blur(15px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '50px',
              color: 'white',
              fontSize: 'clamp(0.65rem, 1.8vw, 0.9rem)',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
              minHeight: 'auto',
              minWidth: 'auto'
            }}
            onClick={() => {
              const projectsSection = document.getElementById('projects');
              if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.1)';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.05)';
              e.target.style.transform = 'translateY(0)';
            }}
            onTouchStart={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.1)';
              e.target.style.transform = 'scale(0.95)';
            }}
            onTouchEnd={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.05)';
              e.target.style.transform = 'scale(1)';
            }}
            >
            View My Works
          </button>
        </div>
        </div>
        </div>
      </div>

      {/* About Section - Full Page */}
      <div className="full-page-section" id="about" style={{
        position: 'relative',
        zIndex: 1,
        minHeight: '100vh',
        padding: 'clamp(2rem, 5vw, 3rem) clamp(1rem, 4vw, 2rem)',
        color: 'white',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 'clamp(2rem, 5vw, 4rem)',
        maxWidth: '1400px',
        margin: '0 auto',
        flexWrap: 'wrap',
        width: '100%',
        boxSizing: 'border-box'
      }}>
        {/* Left Side - Text */}
        <div style={{
          flex: '1 1 400px',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem',
          width: '100%',
          maxWidth: '100%'
        }}>
          <Shuffle
            text="About Me"
            tag="h2"
            shuffleDirection="right"
            duration={0.35}
            animationMode="evenodd"
            shuffleTimes={1}
            ease="power3.out"
            stagger={0.03}
            threshold={0.1}
            triggerOnce={true}
            triggerOnHover={true}
            respectReducedMotion={true}
            textAlign="left"
            style={{
              fontSize: 'clamp(2rem, 6vw, 4rem)',
              fontWeight: 'bold',
              marginBottom: '0.5rem',
              width: '100%',
              display: 'block'
            }}
          />

          <h6 style={{
            fontSize: 'clamp(1rem, 3vw, 1.75rem)',
            lineHeight: '1.5',
            textAlign: 'left',
            opacity: 0.9,
            fontWeight: '400',
            width: '100%',
            margin: 0
          }}>
            I'm a student pursuing Artificial Intelligence & Data Science with a passion for web development. 
            I love crafting innovative digital experiences where creativity meets technology, constantly exploring new things and pushing the boundaries of what's possible with code.
          </h6>

          {/* Tech Stack Icons */}
          <div style={{ marginTop: '1rem' }}>
            <h3 style={{
              fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
              fontWeight: '600',
              marginBottom: '1.5rem',
              opacity: 0.9
            }}>
              Tech Stack
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 1fr))',
              gap: '1.5rem',
              maxWidth: '500px'
            }}>
              {[
                { Icon: SiReact, name: 'React', color: '#61DAFB' },
                { Icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
                { Icon: SiPython, name: 'Python', color: '#3776AB' },
                { Icon: JavaIcon, name: 'Java', color: '#007396' },
                { Icon: SiHtml5, name: 'HTML5', color: '#E34F26' },
                { Icon: SiCss3, name: 'CSS3', color: '#1572B6' },
                { Icon: SiNodedotjs, name: 'Node.js', color: '#339933' },
                { Icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
                { Icon: SiGit, name: 'Git', color: '#F05032' }
              ].map(({ Icon, name, color }) => (
                <div
                  key={name}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '1rem',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    minHeight: '80px',
                    minWidth: '80px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.borderColor = color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  }}
                  onTouchStart={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.borderColor = color;
                  }}
                  onTouchEnd={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  }}
                >
                  <Icon size={32} color={color} />
                  <span style={{ 
                    fontSize: '0.75rem', 
                    opacity: 0.7,
                    textAlign: 'center'
                  }}>
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - ProfileCard */}
        <div className="desktop-only" style={{
          flex: '0 0 auto'
        }}>
          <ProfileCard
            name="Dharun"
            title="Web Developer"
            handle="dharun"
            status="Available for work"
            contactText="Contact Me"
            avatarUrl="/port-image.jpeg"
            avatarFit="cover"
            iconUrl=""
            grainUrl=""
            innerGradient="linear-gradient(145deg, rgba(30, 41, 59, 0.4) 0%, rgba(51, 65, 85, 0.3) 100%)"
            behindGlowEnabled={false}
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={() => {
              const contactSection = document.querySelector('#contact');
              if (contactSection) {
                gsap.to(window, {
                  duration: 1.5,
                  scrollTo: {
                    y: contactSection,
                    autoKill: true
                  },
                  ease: 'power2.inOut'
                });
              }
            }}
          />
        </div>

        {/* Mobile - Simple Profile */}
        <div className="mobile-only" style={{
          width: '100%',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
          padding: '2rem 1rem',
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '16px',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <img 
            src="/port-img(croped).jpeg" 
            alt="Dharun"
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              border: '3px solid rgba(255, 255, 255, 0.2)',
              objectFit: 'cover'
            }}
          />
          <h3 style={{
            fontSize: '1.5rem',
            margin: '0.5rem 0 0 0',
            fontWeight: '600'
          }}>Dharun</h3>
          <p style={{
            fontSize: '1rem',
            margin: 0,
            opacity: 0.8
          }}>Web Developer</p>
          <p style={{
            fontSize: '0.9rem',
            margin: 0,
            opacity: 0.6
          }}>@dharun</p>
          <button 
            onClick={() => window.location.href = '#contact'}
            style={{
              marginTop: '1rem',
              padding: '0.8rem 2rem',
              background: 'white',
              border: 'none',
              borderRadius: '25px',
              color: '#000',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              minHeight: '44px',
              transition: 'all 0.2s ease'
            }}
            onTouchStart={(e) => {
              e.target.style.transform = 'scale(0.95)';
            }}
            onTouchEnd={(e) => {
              e.target.style.transform = 'scale(1)';
            }}
          >
            Contact Me
          </button>
        </div>
      </div>

      {/* Experience Section */}
      <div className="full-page-section" style={{
        position: 'relative',
        zIndex: 1,
        minHeight: 'auto',
        padding: 'clamp(3rem, 6vw, 5rem) clamp(1rem, 4vw, 2rem)',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '1400px',
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box'
      }}>
        <Experience />
      </div>

      {/* Certifications Section */}
      <div className="full-page-section" style={{
        position: 'relative',
        zIndex: 1,
        minHeight: 'auto',
        padding: 'clamp(3rem, 6vw, 5rem) clamp(1rem, 4vw, 2rem)',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '1400px',
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box'
      }}>
        <Certifications />
      </div>

      {/* Projects Section */}
      <div className="full-page-section" id="projects" style={{
        position: 'relative',
        zIndex: 1,
        minHeight: '100vh',
        padding: 'clamp(2rem, 5vw, 3rem) clamp(1rem, 4vw, 2rem)',
        paddingBottom: 'clamp(15rem, 20vw, 20rem)',
        color: 'white',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: '1400px',
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box',
        gap: '4rem',
        flexWrap: 'wrap'
      }}>
        {/* Left Side - Text */}
        <div className="projects-text" style={{
          flex: '1 1 400px',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          maxWidth: '600px'
        }}>
          <SplitText
            text="Here are my projects"
            style={{
              fontSize: 'clamp(2.5rem, 7vw, 5rem)',
              fontWeight: 'bold',
              color: 'white',
              marginBottom: '1rem'
            }}
            delay={50}
            duration={0.8}
            ease="elastic.out(1,0.3)"
            splitType="chars"
            from={{ opacity: 0, y: 50 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-50px"
            textAlign="left"
          />
          
          <p style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
            lineHeight: '1.6',
            opacity: 0.8,
            textAlign: 'left'
          }}>
            A collection of my recent work showcasing web development, AI applications.
          </p>

          {/* Mobile - Swipeable Carousel */}
          <div className="mobile-only" style={{
            width: '100%',
            margin: '1rem 0'
          }}>
            <MobileCarousel 
              projects={allProjects}
            />
          </div>

          <div style={{
            display: 'flex',
            gap: '1rem',
            marginTop: '1rem',
            justifyContent: 'center'
          }}>
            <div onClick={() => navigate('/projects')} style={{ cursor: 'pointer' }}>
              <GlareHover
                width="auto"
                height="auto"
                background="rgba(255, 255, 255, 0.05)"
                borderRadius="12px"
                borderColor="rgba(255, 255, 255, 0.2)"
                glareColor="#ffffff"
                glareOpacity={0.3}
                glareAngle={-30}
                glareSize={300}
                transitionDuration={800}
                playOnce={false}
              >
                <span style={{
                  padding: '1rem 2rem',
                  color: 'white',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  display: 'block'
                }}>
                  View All Projects
                </span>
              </GlareHover>
            </div>
          </div>
        </div>

        {/* Right Side - Card Swap */}
        <div className="desktop-only" style={{
          flex: '1 1 700px',
          height: '500px',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end'
        }}>
          <CardSwap
            width={850}
            height={450}
            cardDistance={60}
            verticalDistance={80}
            delay={2000}
            pauseOnHover={true}
            easing="elastic"
          >
            <Card>
              <div style={{ 
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1rem 2rem'
                }}>
                  <h3 style={{ 
                    fontSize: '1.5rem', 
                    margin: 0, 
                    color: 'white',
                    fontWeight: '500'
                  }}>
                    Job Board
                  </h3>
                </div>
                <div style={{
                  height: '1px',
                  background: 'rgba(255, 255, 255, 0.3)',
                  width: 'calc(100% - 4rem)',
                  margin: '0 2rem'
                }} />
                <div style={{
                  flex: 1,
                  backgroundImage: 'url(/project1.png)',
                  backgroundSize: 'contain',
                  backgroundPosition: 'bottom',
                  borderRadius: '0 0 16px 16px'
                }} />
              </div>
            </Card>
            
            <Card>
              <div style={{ 
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1rem 2rem'
                }}>
                  <h3 style={{ 
                    fontSize: '1.5rem', 
                    margin: 0, 
                    color: 'white',
                    fontWeight: '500'
                  }}>
                    Simple ToDO
                  </h3>
                </div>
                <div style={{
                  height: '1px',
                  background: 'rgba(0, 0, 0, 0.2)',
                  width: 'calc(100% - 4rem)',
                  margin: '0 2rem'
                }} />
                <div style={{
                  flex: 1,
                  backgroundImage: 'url(/project2.png)',
                  backgroundSize: 'contain',
                  backgroundPosition: 'bottom',
                  // backgroundRepeat: 'no-repeat',
                  borderRadius: '0 0 16px 16px'
                }} />
              </div>
            </Card>
            
            <Card>
              <div style={{ 
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1rem 2rem'
                }}>
                  <h3 style={{ 
                    fontSize: '1.5rem', 
                    margin: 0, 
                    color: 'white',
                    fontWeight: '500'
                  }}>
                    Loan Genius
                  </h3>
                </div>
                <div style={{
                  height: '1px',
                  background: 'rgba(0, 0, 0, 0.2)',
                  width: 'calc(100% - 4rem)',
                  margin: '0 2rem'
                }} />
                <div style={{
                  flex: 1,
                  backgroundImage: 'url(/project3.png)',
                  backgroundSize: 'contain',
                  backgroundPosition: 'bottom',
                  // backgroundRepeat: 'no-repeat',
                  borderRadius: '0 0 16px 16px'
                }} />
              </div>
            </Card>
          </CardSwap>
        </div>
      </div>

      {/* Contact Section */}
      <div className="full-page-section" id="contact" style={{
        position: 'relative',
        zIndex: 10,
        minHeight: '60vh',
        padding: 'clamp(3rem, 5vw, 4rem) clamp(1rem, 4vw, 2rem)',
        paddingTop: 'clamp(8rem, 12vw, 15rem)',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '1400px',
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box',
        textAlign: 'center',
        background: '#000'
      }}>
        <h2 style={{
          fontSize: 'clamp(2.5rem, 7vw, 5rem)',
          fontWeight: 'bold',
          color: 'white',
          marginBottom: '1rem'
        }}>
          Get In Touch
        </h2>
        
        <p style={{
          fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
          lineHeight: '1.6',
          opacity: 0.8,
          maxWidth: '600px',
          marginBottom: '2rem'
        }}>
          Have a question? Feel free to reach out!
        </p>

        <div style={{
          display: 'flex',
          gap: '1.5rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginBottom: '2rem'
        }}>
          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=vdharun11@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '1rem 2.5rem',
              background: 'white',
              color: '#000',
              borderRadius: '30px',
              textDecoration: 'none',
              fontSize: '1.1rem',
              fontWeight: '600',
              transition: 'all 0.3s ease',
              border: '2px solid white'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'white';
              e.target.style.color = '#000';
            }}
          >
            Send Email
          </a>
          
          <a 
            href="https://github.com/Dharun37"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '1rem 2.5rem',
              background: 'transparent',
              color: 'white',
              borderRadius: '30px',
              textDecoration: 'none',
              fontSize: '1.1rem',
              fontWeight: '600',
              transition: 'all 0.3s ease',
              border: '2px solid white'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'white';
              e.target.style.color = '#000';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.color = 'white';
            }}
          >
            GitHub
          </a>
          
          <a 
            href="https://www.linkedin.com/in/dharun-vd/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '1rem 2.5rem',
              background: 'transparent',
              color: 'white',
              borderRadius: '30px',
              textDecoration: 'none',
              fontSize: '1.1rem',
              fontWeight: '600',
              transition: 'all 0.3s ease',
              border: '2px solid white'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'white';
              e.target.style.color = '#000';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.color = 'white';
            }}
          >
            LinkedIn
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer style={{
        position: 'relative',
        zIndex: 1,
        padding: '3rem 2rem',
        color: 'white',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        background: 'rgba(0, 0, 0, 0.2)'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          {/* Main Footer Content */}
          <div className="footer-content" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            marginBottom: '2rem'
          }}>
            {/* About */}
            <div style={{ textAlign: 'left' }}>
              <h3 style={{
                fontSize: '1.3rem',
                marginBottom: '0.75rem',
                fontWeight: '600'
              }}>
                Dharun V
              </h3>
              <p style={{
                fontSize: '0.85rem',
                opacity: 0.7,
                lineHeight: '1.5',
                margin: 0
              }}>
                Full Stack Developer passionate about creating beautiful and functional web applications.
              </p>
            </div>

            {/* Quick Links */}
            <div style={{ textAlign: 'left' }}>
              <h4 style={{
                fontSize: '1rem',
                marginBottom: '0.75rem',
                fontWeight: '600',
                opacity: 0.9
              }}>
                Quick Links
              </h4>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.6rem'
              }}>
                <a 
                  href="#home"
                  style={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    textDecoration: 'none',
                    fontSize: '0.85rem',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = 'white'}
                  onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}
                >
                  Home
                </a>
                <a 
                  href="#about"
                  style={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    textDecoration: 'none',
                    fontSize: '0.85rem',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = 'white'}
                  onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}
                >
                  About
                </a>
                <a 
                  href="#projects"
                  style={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    textDecoration: 'none',
                    fontSize: '0.85rem',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = 'white'}
                  onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}
                >
                  Projects
                </a>
                <a 
                  href="#contact"
                  style={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    textDecoration: 'none',
                    fontSize: '0.85rem',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = 'white'}
                  onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}
                >
                  Contact
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div style={{ textAlign: 'left' }}>
              <h4 style={{
                fontSize: '1rem',
                marginBottom: '0.75rem',
                fontWeight: '600',
                opacity: 0.9
              }}>
                Contact Info
              </h4>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.6rem'
              }}>
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=vdharun11@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    textDecoration: 'none',
                    fontSize: '0.85rem',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = 'white'}
                  onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}
                >
                  vdharun11@gmail.com
                </a>
              </div>
            </div>

            {/* Follow Me */}
            <div style={{ textAlign: 'left' }}>
              <h4 style={{
                fontSize: '1rem',
                marginBottom: '0.75rem',
                fontWeight: '600',
                opacity: 0.9
              }}>
                Follow Me
              </h4>
              <div style={{
                display: 'flex',
                gap: '1rem',
                fontSize: '1.5rem'
              }}>
                <a 
                  href="https://github.com/Dharun37"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = 'white'}
                  onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}
                  aria-label="GitHub"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.linkedin.com/in/dharun-vd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = 'white'}
                  onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}
                  aria-label="LinkedIn"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div style={{
            paddingTop: '1.5rem',
            textAlign: 'center',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <p style={{
              margin: 0,
              fontSize: '0.85rem',
              opacity: 0.6
            }}>
              © {new Date().getFullYear()} Dharun V. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
    </div>
    
  );
}

export default App;
