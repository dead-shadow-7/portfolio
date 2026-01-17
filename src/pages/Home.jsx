import "./Home.css";
import avatarImage from "../assets/ProfileImage.png";
import SkillTags from "../components/common/SkillsTags";
import EYGDSIcon from "../assets/EYIcon.png";
import UniversityLogo from "../assets/SPPULogo.jpg";
import Footer from "../components/common/Footer";
const Home = () => {
  return (
    <div className="home-page">
      <div className="avatar-container">
        <img src={avatarImage} alt="Shivam Rajput" className="avatar" />
      </div>
      <h1 className="Heading">Hi, I am Shivam </h1>
      <p className="Subheading">
        21, Backend-focused CS graduate who likes understanding how systems
        work, not just making them work. Interested in APIs, databases,
        scalability, and the tradeoffs behind real-world software.
        <br />
        If you got someting cool to work on let's talk
      </p>
      <div className="contact-buttons">
        <a href="mailto:shivamrajput.dev@proton.me" className="contact-button">
          {" "}
          Email Me
        </a>
        <a
          href="https://www.linkedin.com/in/shivamrajput12119/"
          className="contact-button"
        >
          {" "}
          Let's Connect{" "}
        </a>
      </div>

      <div className="Experience-section">
        <h1 className="Heading">Experience</h1>
        <div className="experience-item">
          <img src={EYGDSIcon} alt="Company Logo" className="company-logo" />
          <div className="experience-content">
            <div className="experience-details">
              <h3 className="company-name">EY GDS</h3>
              <p className="role-title">Web Developer Intern</p>
            </div>
            <div className="duration">Dec 2024 - Jan 2025</div>
          </div>
        </div>
      </div>

      <div className="Skills-section">
        <h1 className="Heading">Skills</h1>
        <SkillTags />
      </div>
      <div className="Education-section">
        <h1 className="Heading">Education</h1>
        <div className="education-item">
          <img
            src={UniversityLogo}
            alt="University Logo"
            className="university-logo"
          />
          <div className="education-content">
            <div className="education-details">
              <h3 className="college-name">AISSMS IOIT</h3>
              <p className="university-degree">
                B.Tech in Computer Engineering
              </p>
            </div>
            <div className="duration">2022 - 2026</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
