import React, { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import './hero.css';
import HeaderSocials from '../header/HeaderSocials';

const Hero = () => {
  const [theme, setTheme] = useState('operations');

  useEffect(() => {
    // Function to update theme from body class
    const updateTheme = () => {
      const bodyClass = document.body.className || 'operations';
      console.log('Theme updated to:', bodyClass); // Debug log
      setTheme(bodyClass);
    };

    // Update theme immediately
    updateTheme();

    // Watch for changes to body class
    const observer = new MutationObserver(() => {
      updateTheme();
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  // Content based on theme
  const getSkillsSequence = () => {
    if (theme === 'operations') {
      return [
        'Leadership', 2000,
        'Efficiency', 2000,
        'Stakeholder Management', 2000,
        'Process Optimization', 2000,
        'Operations Expert', 2000,
        'Team Coordination', 2000,
        'Amazon ROC Specialist', 2000
      ];
    } else {
      return [
        'QA Automation', 2000,
        'Selenium Testing', 2000,
        'Python Developer', 2000,
        'API Testing Expert', 2000,
        'PyTest Framework', 2000,
        'Test Automation', 2000,
        'Quality Engineer', 2000
      ];
    }
  };

  const getTagline = () => {
    if (theme === 'operations') {
      return "I bring proven expertise from Amazon Operations, where I resolved critical escalations, streamlined workflows, and empowered teams through training and process improvements. My focus is on efficiency, decision-making, and stakeholder success.";
    } else {
      return "I specialize in QA Automation with Selenium, PyTest, and API testing, building frameworks and tools that ensure software reliability, scalability, and performance. My work combines technical depth with a strong operations mindset, enabling me to design testing solutions that align with real-world business needs.";
    }
  };

  return (
    <section className="hero-container">
      <h1>
        Hi, I'm<br />
        <span className="highlight">Manikanta Chavvakula</span>
      </h1>

      <div className="type-animation">
        <TypeAnimation
          key={theme} // This forces re-render when theme changes
          sequence={getSkillsSequence()}
          wrapper="span"
          speed={50}
          style={{
            fontSize: '1.8rem',
            display: 'inline-block',
            color: 'var(--color-primary)'
          }}
          repeat={Infinity}
        />
      </div>

      <p className="tagline">{getTagline()}</p>

      <div className="hero-buttons">
        <a href="/cv.pdf" download="Manikanta_Chavvakula_Resume.pdf" className="btn btn-primary">
          Download CV
        </a>
        <a href="#contact" className="btn">Let's Talk</a>
      </div>

      <HeaderSocials />
      <a href="#contact" className="scroll__down">Scroll Down</a>
    </section>
  );
};

export default Hero;