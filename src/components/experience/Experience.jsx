import React, { useState } from 'react';
import './experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('technical');
  
  // CHANGE THIS TO SWITCH BETWEEN DESIGN OPTIONS:
  // 'option1' = Enhanced Pills with Hover Effects
  // 'option2' = Card Grid Style  
  // 'option3' = Category-Colored Chips
  const designOption = 'option1'; // <-- CHANGE THIS TO TEST DIFFERENT OPTIONS

  const skillsData = {
    technical: [
      'Python',
      'Selenium',
      'PyTest',
      'API Testing',
      'SQL',
      'Kali linux tools',
      'Git & GitHub',
      'Postman',
      'Jira',
      'Manual Testing',
      'Automation Testing'
    ],
    operational: [
      'Process Improvement',
      'Escalation Management',
      'Team Leadership',
      'Stakeholder Management',
      'Project Coordination',
      'Training & Development',
      'Workflow Optimization',
      'SLA Management'
    ],
    others: [
      'Adobe Photoshop',
      'Adobe After Effects',
      'Blender',
      'Adobe Premiere Pro',
      'Canva'
    ]
  };

  const tabLabels = {
    technical: 'Technical',
    operational: 'Operational', 
    others: 'Others'
  };

  return (
    <section id="experience">
      {/* === SKILLS SECTION WITH DESIGN OPTIONS === */}
      <div style={{ marginBottom: '4rem', paddingBottom: '1.5rem' }}>
        <section id="skills-matrix">
          <h5>What Skills I Have</h5>
          <h2>My Skills</h2>

          <div className="container skills__container">
            {/* Tab Navigation */}
            <div className="skills__tabs">
              {Object.keys(skillsData).map((tab) => (
                <button
                  key={tab}
                  className={`skills__tab ${activeTab === tab ? 'active' : ''}`}
                  data-tab={tab}
                  onClick={() => setActiveTab(tab)}
                >
                  {tabLabels[tab]}
                </button>
              ))}
            </div>

            {/* Skills Content */}
            <div className="skills__content" data-active={activeTab}>
              <div className={`skills__grid ${designOption}`}>
                {skillsData[activeTab].map((skill, index) => (
                  <div key={index} className={`skill__item ${designOption}`}>
                    {designOption !== 'option2' && (
                      <BsPatchCheckFill className="skill__icon" />
                    )}
                    <h4>{skill}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* === WORK EXPERIENCE SECTION === */}
      <section id="work-experience">
        <h5>Where I've Worked</h5>
        <h2>Work Experience</h2>

        <div className="experience__container">
          {[
            // 1. CURRENT/RECENT WORK
            {
              title: 'ROC Specialist',
              company: 'Amazon Development Centre',
              date: 'Oct 2023 – Jun 2025',
              location: 'Hyderabad, India',
              points: [
                'Served as primary POC for SCS/MCS teams, resolving 100+ escalations monthly within strict SLAs.',
                'Acted as SME, training new hires and conducting knowledge transfers to improve team efficiency.',
                'Led process improvement projects, streamlining workflows and saving time for stakeholders.',
                'Managed operations and reporting with AWS QuickSight, improving stakeholder decisions.',
                'Achieved Best Performer recognition for consistently performing above expectations.'
              ]
            },
            
            // 2. INTERNSHIPS
            {
              title: 'Backend Developer Intern',
              company: 'LBIT Labs',
              date: 'Jul 2023 – Oct 2023',
              location: 'Remote',
              points: [
                'Built automatic EMI payment systems for banks using PHP and Drupal.',
                'Developed secure payment processing workflows for financial institutions.',
                'Collaborated with senior developers to implement banking software solutions.',
                'Gained experience in backend development and financial technology systems.'
              ]
            },
            
            {
              title: 'Information Security Intern',
              company: 'Virtually Testing Foundation',
              date: 'Sep 2022 – Dec 2022',
              location: 'Remote',
              points: [
                'Gained hands-on experience with Kali Linux, Metasploit, and brute force techniques.',
                'Performed penetration testing and vulnerability assessment on test environments.',
                'Learned ethical hacking methodologies and cybersecurity best practices.',
                'Developed understanding of network security and threat analysis.'
              ]
            }
          ].map(({ title, company, date, location, points }, i) => (
            <div className="experience__backend" key={i}>
              <h3>{title}</h3>
              {company && <h4 className="company-name">{company}</h4>}
              <small>{date} | {location}</small>
              <div className="experience__content">
                {points.map((pt, idx) => (
                  <article className="experience__details" key={idx}>
                    <BsPatchCheckFill className="experience__details-icon" />
                    <div>{pt}</div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Experience;