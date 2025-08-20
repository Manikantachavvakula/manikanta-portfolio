import React, { useState, useMemo } from 'react';
import './portfolio.css';
import { FaGithub, FaExternalLinkAlt, FaTrophy, FaStar, FaChartLine, FaBug, FaRocket } from 'react-icons/fa';

// Move projects array OUTSIDE the component to prevent recreation on every render
const PROJECTS_DATA = [
  {
    id: 1,
    title: 'QA-Monkey - Automated Web Testing Framework',
    description: 'Comprehensive automated web testing tool built with Python + Selenium + Page Object Model. Performs random actions, captures logs, screenshots, and generates detailed reports with 92% success in regression testing.',
    category: 'testing',
    technologies: ['Python', 'Selenium', 'PyTest', 'Page Object Model', 'HTML Reports'],
    github: 'https://github.com/Manikantachavvakula/QA-Monkey',
    demo: null,
    status: 'Production Ready',
    featured: true,
    impact: '92% regression test success rate',
    icon: <FaBug />
  },
  {
    id: 2,
    title: 'Text Encrypter - DSA + Cryptography Demo',
    description: 'Modern web application blending Data Structures & Algorithms with practical cryptography. Features multiple encryption methods while demonstrating CS principles like stacks, queues, and hash tables.',
    category: 'web',
    technologies: ['Flask', 'Python Cryptography', 'HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/Manikantachavvakula/text-encrypter',
    demo: 'https://text-encrypter-production.up.railway.app/',
    status: 'Live',
    featured: true,
    impact: 'AES + SHA-256 + DSA visualization',
    icon: <FaRocket />
  },
  {
    id: 3,
    title: 'CampusPulse - Hostel Feedback Portal (QA Focus)',
    description: 'Flask-based feedback management system where I designed and executed 20 manual test cases, found 2 critical defects, and delivered comprehensive QA analysis with 90% test pass rate.',
    category: 'testing',
    technologies: ['Flask', 'SQLite', 'Chart.js', 'Manual Testing', 'Test Reporting'],
    github: 'https://github.com/Manikantachavvakula/CampusPulse',
    demo: 'https://campuspulse-production.up.railway.app/login',
    status: 'QA Completed',
    impact: '20 test cases executed, 2 critical bugs found',
    icon: <FaChartLine />
  },
  {
    id: 4,
    title: 'JobBot - Automated Job Application System',
    description: 'Python automation bot applying to 100+ jobs daily with custom QA suite reducing downtime by 70%. Features robust error logging, categorized failure tracking, and automated reporting.',
    category: 'automation',
    technologies: ['Python', 'Selenium', 'Logging', 'Automation', 'Error Tracking'],
    github: 'https://github.com/Manikantachavvakula/JobBot',
    demo: null,
    status: 'Production',
    impact: '100+ applications/day, 70% downtime reduction',
    icon: <FaRocket />
  },
  {
    id: 5,
    title: 'NetWrecker v2.0 - API Load Testing Tool',
    description: 'Python-based load testing tool with 4 attack modes (constant, spike, stress, soak). Features real-time dashboard, dummy API server, and comprehensive reporting for performance engineering.',
    category: 'testing',
    technologies: ['Python', 'Locust', 'Flask', 'Click', 'Performance Testing'],
    github: 'https://github.com/Manikantachavvakula/NetWrecker',
    demo: 'https://netwrecker-production.up.railway.app/',
    status: 'Live',
    impact: 'Multi-mode load testing with real-time monitoring',
    icon: <FaChartLine />
  },
  {
    id: 6,
    title: 'RecruitIntel - LinkedIn Scam Detection (Startup)',
    description: 'Chrome extension prototype to detect fake job offers and recruiter scams using NLP and OpenAI API. Collaborated with founding team from ideation to prototype stage, shaping core product vision.',
    category: 'startup',
    technologies: ['Python', 'JavaScript', 'Chrome Extension', 'OpenAI API', 'NLP'],
    github: '#',
    demo: null,
    status: 'In Progress',
    featured: true,
    impact: 'Startup contribution - Ideation to prototype',
    icon: <FaStar />,
    isStartup: true
  }
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  // Now projects is stable and won't cause useMemo to rerun unnecessarily
  const projects = PROJECTS_DATA;

  // Calculate technology usage statistics
  const technologyStats = useMemo(() => {
    const techCount = {};
    const totalProjects = projects.length;
    
    projects.forEach(project => {
      project.technologies.forEach(tech => {
        techCount[tech] = (techCount[tech] || 0) + 1;
      });
    });

    // Convert to percentage and sort by usage
    const techStats = Object.entries(techCount)
      .map(([tech, count]) => ({
        name: tech,
        count,
        percentage: Math.round((count / totalProjects) * 100)
      }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 8); // Show top 8 technologies

    return techStats;
  }, [projects]);

  const categories = [
    { key: 'all', label: 'All Projects', count: projects.length },
    { key: 'testing', label: 'QA & Testing', count: projects.filter(p => p.category === 'testing').length },
    { key: 'automation', label: 'Automation', count: projects.filter(p => p.category === 'automation').length },
    { key: 'web', label: 'Web Development', count: projects.filter(p => p.category === 'web').length },
    { key: 'startup', label: 'Startup', count: projects.filter(p => p.category === 'startup').length }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const TechnologyMeter = ({ tech }) => (
    <div className="tech-meter">
      <div className="tech-meter-header">
        <span className="tech-name">{tech.name}</span>
        <span className="tech-percentage">{tech.percentage}%</span>
      </div>
      <div className="tech-meter-bar">
        <div 
          className="tech-meter-fill" 
          style={{ width: `${tech.percentage}%` }}
        ></div>
      </div>
      <div className="tech-meter-info">
        <small>{tech.count} project{tech.count > 1 ? 's' : ''}</small>
      </div>
    </div>
  );

  const ProjectCard = ({ project }) => (
    <article className="portfolio__item">
      <div className="portfolio__item-header">
        <div className="portfolio__item-icon">
          {project.icon}
        </div>
        <div className="portfolio__item-badges">
          {project.featured && (
            <span className="portfolio__badge featured">
              <FaStar /> Featured
            </span>
          )}
          {project.isStartup && (
            <span className="portfolio__badge startup">
              🚀 Startup
            </span>
          )}
          {project.award && (
            <span className="portfolio__badge award">
              <FaTrophy /> {project.award}
            </span>
          )}
          <span className="portfolio__badge status">
            {project.status}
          </span>
        </div>
      </div>

      <div className="portfolio__item-content">
        <h3>{project.title}</h3>
        <p className="portfolio__item-description">{project.description}</p>
        
        {project.impact && (
          <div className="portfolio__item-impact">
            <strong>Impact:</strong> {project.impact}
          </div>
        )}
        
        <div className="portfolio__item-tech">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>

        <div className="portfolio__item-cta">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn"
          >
            <FaGithub /> GitHub
          </a>
          {project.demo && (
            <a 
              href={project.demo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );

  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="portfolio__filters">
        {categories.map(category => (
          <button
            key={category.key}
            className={`portfolio__filter-btn ${activeFilter === category.key ? 'active' : ''}`}
            onClick={() => setActiveFilter(category.key)}
          >
            {category.label} ({category.count})
          </button>
        ))}
      </div>

      <div className="container portfolio__container">
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="portfolio__empty">
          <h3>No projects found</h3>
          <p>Try selecting a different category.</p>
          <button 
            className="btn btn-primary"
            onClick={() => setActiveFilter('all')}
          >
            View All Projects
          </button>
        </div>
      )}

      {/* Technology Skills Overview - Moved after projects */}
      <div className="tech-overview">
        <h3>Technology Stack Overview</h3>
        <p>Based on my {projects.length} featured projects</p>
        <div className="tech-meters-grid">
          {technologyStats.map((tech, index) => (
            <TechnologyMeter key={tech.name} tech={tech} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;