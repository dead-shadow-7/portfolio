import avatarImage from "../../assets/ProfileImage.png";

const HeroSection = () => {
  return (
    <>
      <div className="avatar-container">
        <img src={avatarImage} alt="Shivam Rajput" className="avatar" />
      </div>
      <h1 className="heading">Hi, I am Shivam</h1>
      <p className="subheading">
        21, Backend-focused CS graduate who likes understanding how systems
        work, not just making them work. Interested in APIs, databases,
        scalability, and the tradeoffs behind real-world software.
        <br />
        If you got something cool to work on let's talk
      </p>
      <div className="contact-buttons">
        <a href="mailto:shivamrajput.dev@proton.me" className="contact-button">
          Email Me
        </a>
        <a
          href="https://www.linkedin.com/in/shivamrajput12119/"
          className="contact-button"
        >
          Let's Connect
        </a>
      </div>
    </>
  );
};

export default HeroSection;
