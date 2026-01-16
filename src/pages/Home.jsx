import "./Home.css";
import avatarImage from "../assets/ProfileImage.png";
import SkillTags from "../components/common/SkillsTags";
import EYGDSIcon from "../assets/EYIcon.png";
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
      <div>
        <a href="mailto:shivamrajput.dev@proton.me" className="contact-button">
          {" "}
          Email Me
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
      <h1 className="Heading">Skills</h1>
      <SkillTags />
      <h1 className="Heading">Education</h1>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
    </div>
  );
};

export default Home;
