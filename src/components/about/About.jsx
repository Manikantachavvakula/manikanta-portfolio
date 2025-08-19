import React from 'react';
import './about.css';
import ME from '../../assets/me-about.jpg';
import { FaAward } from 'react-icons/fa';
import { TbCertificate } from 'react-icons/tb';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>Who Am I</h2>

      <div className="container about__container">
        {/* Left Side - Photo and Quote in separate sections */}
        <div className="about__left">
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="About Me" />
            </div>
          </div>
          
          {/* Quote Section - Separate below photo */}
          <div className="about__quote">
            <p className="quote__text">
              Every line of code hides a storm. I'm the one who uncovers it before it sinks the ship.
            </p>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Years</small>
            </article>

            <article className="about__card">
              <TbCertificate className="about__icon" />
              <h5>Certifications</h5>
              <small>5+ Active</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>4+ Testing</small>
            </article>
          </div>

          <p>
            Hi! I'm Manikanta Chavvakula – a <strong>QA Engineer</strong> and <strong>Test Automation Specialist</strong> with hands-on experience in operations and quality assurance.
          </p>
          
          <p>
            <strong>B.Tech graduate in Computer Science Engineering</strong> from Chaitanya Engineering College (2023), I bring <strong>2+ years of industry experience</strong> from <strong>Amazon Development Centre</strong>, where I've mastered <strong>escalation management and process improvement</strong> as a ROC Specialist.
          </p>
          
          <p>
            My technical achievements include developing <strong>QA-Monkey Framework with 92% success in regression testing</strong>, implementing <strong>automated testing solutions using Python and Selenium</strong>, and contributing to <strong>RecruitIntel, an AI-powered Chrome extension</strong> preventing job scams.
          </p>
          
          <p>
            Currently holding <strong>CS50 SQL, Software Testing, Python by Google,</strong> and <strong>Ethical Hacking certifications</strong>, I specialize in combining <strong>manual and automation testing expertise</strong> to build reliable, efficient testing frameworks.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>

      {/* === Education Section === */}
      <div className="education__section">
        <h5>Academic Background</h5>
        <h2>Education</h2>

        <div className="education__container">
          <div className="education__item">
            <h3>B.Tech in Computer Science Engineering</h3>
            <p><strong>2019 – 2023</strong><br />Chaitanya Engineering College (Affiliated to JNTUK)<br />Visakhapatnam, India</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;