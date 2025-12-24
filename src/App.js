import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { SiReact, SiJavascript, SiHtml5, SiCss3, SiNodedotjs, SiMongodb, SiGit, SiPython } from 'react-icons/si';
import FloatingLines from './components/FloatingLines';
import Navbar from './components/NavBar';
import SplitText from './components/SplitText';
import TextType from './components/TextType';
import ProfileCard from './components/ProfileCard';
import JavaIcon from './components/JavaIcon';
import Shuffle from './components/Shuffle';
import CardSwap, { Card } from './components/CardSwap';
import GlareHover from './components/GlareHover';
import './App.css';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
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
      smoothTouch: 0.1,
      normalizeScroll: true
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
        minHeight: '100vh',
        height: '100vh',
        padding: '2rem 1rem',
        color: 'white',
        overflow: 'hidden'
      }}>
        {/* FloatingLines only in Hero section */}
        <FloatingLines 
          enabledWaves={['top', 'middle', 'bottom']}
          lineCount={[5, 5, 5]}
          lineDistance={[5, 5, 5]}
          bendRadius={5.0}
          bendStrength={-0.5}
          interactive={true}
          parallax={true}
        />
        
        <div className="hero-content" style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
        
        <SplitText
          text="Hello, You!"
          style={{
            fontSize: 'clamp(2rem, 8vw, 6rem)',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '2rem'
          }}
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}
        />
        
        <div style={{
          fontSize: 'clamp(1.5rem, 5vw, 3.5rem)',
          fontWeight: 'bold',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
          color: 'white',
          marginBottom: '2rem'
        }}>
          <span>I'm Dharun,</span>
          <TextType 
            text={["Web Developer", "Spider-Man", "Innovator"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="_"
          />
        </div>

        <div style={{
          display: 'flex',
          gap: '1rem',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          <button style={{
            padding: 'clamp(0.5rem, 2vw, 0.8rem) clamp(1rem, 4vw, 1.5rem)',
            background: 'white',
            border: 'none',
            borderRadius: '50px',
            color: '#000',
            fontSize: 'clamp(0.85rem, 2.5vw, 1rem)',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 12px 40px 0 rgba(0, 0, 0, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 8px 32px 0 rgba(0, 0, 0, 0.3)';
          }}
          >
            Download Resume
          </button>

          <button style={{
            padding: 'clamp(0.5rem, 2vw, 0.8rem) clamp(1rem, 4vw, 1.5rem)',
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(15px)',
            WebkitBackdropFilter: 'blur(15px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '50px',
            color: 'white',
            fontSize: 'clamp(0.85rem, 2.5vw, 1rem)',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'rgba(255, 255, 255, 0.1)';
            e.target.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'rgba(255, 255, 255, 0.05)';
            e.target.style.transform = 'translateY(0)';
          }}
          >
            Buy Me A Bru Coffee
          </button>
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
              gridTemplateColumns: 'repeat(auto-fit, minmax(60px, 1fr))',
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
                    cursor: 'pointer'
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
            handle="@dharun"
            status="Available for work"
            contactText="Contact Me"
            avatarUrl="/portAva.jpeg"
            iconUrl=""
            grainUrl=""
            innerGradient="linear-gradient(145deg, rgba(30, 41, 59, 0.4) 0%, rgba(51, 65, 85, 0.3) 100%)"
            behindGlowEnabled={false}
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={() => window.location.href = '#contact'}
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
            src="/portAva.jpeg" 
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
              cursor: 'pointer'
            }}
          >
            Contact Me
          </button>
        </div>
      </div>

      {/* Projects Section */}
      <div className="full-page-section" id="projects" style={{
        position: 'relative',
        zIndex: 1,
        minHeight: '100vh',
        padding: 'clamp(2rem, 5vw, 3rem) clamp(1rem, 4vw, 2rem)',
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
        <div style={{
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

          <div style={{
            display: 'flex',
            gap: '1rem',
            marginTop: '1rem'
          }}>
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

        {/* Mobile - Simple Project Cards */}
        <div className="mobile-only" style={{
          width: '100%',
          flexDirection: 'column',
          gap: '1.5rem'
        }}>
          {[
            { name: 'Job Board', image: '/project1.png', desc: 'A modern job board platform' },
            { name: 'Simple ToDO', image: '/project2.png', desc: 'Task management application' },
            { name: 'Loan Genius', image: '/project3.png', desc: 'Smart loan calculator' }
          ].map((project, index) => (
            <div 
              key={index}
              className="mobile-project-card"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onTouchStart={(e) => {
                e.currentTarget.style.transform = 'scale(0.98)';
              }}
              onTouchEnd={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <div style={{
                padding: '1.5rem',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <h3 style={{
                  fontSize: '1.3rem',
                  margin: 0,
                  fontWeight: '600'
                }}>{project.name}</h3>
                <p style={{
                  fontSize: '0.9rem',
                  margin: '0.5rem 0 0 0',
                  opacity: 0.7
                }}>{project.desc}</p>
              </div>
              <div style={{
                height: '200px',
                backgroundImage: `url(${project.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }} />
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default App;
