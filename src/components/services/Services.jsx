import React from 'react';
import './services.css';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { BsTrophy, BsAward, BsFileText } from 'react-icons/bs';

const Services = () => {
  const certifications = {
    core: [
      { 
        title: 'CS50 SQL', 
        issuer: 'Harvard University', 
        year: '2024',
        link: 'https://certificates.cs50.io/029ee65f-f119-4bd1-86c9-4b2576131c41.pdf?size=letter'
      },
      { 
        title: 'AttackIQ Certified Ethical Hacker', 
        issuer: 'AttackIQ Academy', 
        year: '2024',
        link: 'https://www.academy.attackiq.com/login?redirect=%2Fcertificate%2F6711%3Fresource_id%3D4118%26user_id%3D197090%26type%3Dcourse'
      },
      { 
        title: 'Cybersecurity Analyst Job Simulation', 
        issuer: 'Forage', 
        year: '2024',
        link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/gmf3ypEXBj2wvfQWC_ifobHAoMjQs9s6bKS_vvqtW8C28dFDD8NP5_1734089631405_completion_certificate.pdf'
      },
      { 
        title: 'Introduction to Cyber Security', 
        issuer: 'IBM (via Coursera)', 
        year: '2024',
        link: 'https://www.coursera.org/account/accomplishments/certificate/TUGV7C3QCGP5'
      }
    ],
    badges: [
      { 
        title: 'Python Gold Badge', 
        issuer: 'HackerRank', 
        year: '2024',
        link: 'https://www.hackerrank.com'
      },
      { 
        title: 'Java Gold Badge', 
        issuer: 'HackerRank', 
        year: '2024',
        link: 'https://www.hackerrank.com'
      }
    ],
    courses: [
      { 
        title: 'Python Programming', 
        issuer: 'Google (via Coursera)', 
        year: '2024',
        link: 'https://www.coursera.org/account/accomplishments/certificate/CESMC8S7BHWM'
      },
      { 
        title: 'Google Cloud Practitioner', 
        issuer: 'Google Cloud (via Coursera)', 
        year: '2024',
        link: 'https://www.coursera.org/account/accomplishments/certificate/L3YMWL769JHK'
      },
      { 
        title: 'Software Testing', 
        issuer: 'Udemy', 
        year: '2024',
        link: null
      }
    ]
  };

  const achievements = [
    {
      id: 1,
      icon: <BsTrophy />,
      title: 'Best Performer – Amazon',
      description: 'For earning Reward & Recognition (Best Performer) three times for accuracy, reliability, and consistent results.',
      type: 'award'
    },
    {
      id: 2,
      icon: <BsAward />,
      title: 'Runner-up – Smart India Hackathon',
      description: 'National level recognition for innovative solution development.',
      year: '2022',
      type: 'award'
    },
    {
      id: 3,
      icon: <BsFileText />,
      title: 'QA-Monkey Framework Publication',
      description: 'Published article on Medium showcasing a Python-Selenium based testing tool with advanced reporting and real-world applications.',
      year: '2025',
      type: 'publication'
    }
  ];

  const handleCertClick = (link) => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  const renderCertificationGroup = (title, emoji, certs) => (
    <div className="cert-group">
      <h4 className="cert-group-title">
        <span className="cert-emoji">{emoji}</span>
        {title}
      </h4>
      <div className="cert-timeline">
        {certs.map((cert, index) => (
          <div key={index} className="cert-item">
            <div className="cert-content">
              <div className="cert-marker"></div>
              <div className="cert-info">
                <h5 
                  className={`cert-title ${cert.link ? 'cert-clickable' : ''}`}
                  onClick={() => handleCertClick(cert.link)}
                >
                  {cert.title}
                  {cert.link && <FaExternalLinkAlt className="cert-link-icon" />}
                </h5>
                <p className="cert-issuer">{cert.issuer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id='services'>
      <h5>My Credentials</h5>
      <h2>Certifications & Achievements</h2>

      <div className="container credentials-layout">
        {/* Left Column - Certifications */}
        <div className="certifications-column">
          <div className="column-header">
            <h3>Professional Certifications</h3>
          </div>
          
          <div className="certifications-content">
            {renderCertificationGroup('Core Certifications', '🎓', certifications.core)}
            {renderCertificationGroup('Badges', '🏅', certifications.badges)}
            {renderCertificationGroup('Courses', '📚', certifications.courses)}
          </div>
        </div>

        {/* Right Column - Achievements */}
        <div className="achievements-column">
          <div className="column-header">
            <h3>Key Achievements</h3>
          </div>
          
          <div className="achievements-content">
            {achievements.map((achievement) => (
              <div key={achievement.id} className="achievement-card">
                <div className="achievement-header">
                  <div className="achievement-icon">
                    {achievement.icon}
                  </div>
                  <span className="achievement-year">{achievement.year}</span>
                </div>
                <div className="achievement-body">
                  <h4 className="achievement-title">{achievement.title}</h4>
                  <p className="achievement-description">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;