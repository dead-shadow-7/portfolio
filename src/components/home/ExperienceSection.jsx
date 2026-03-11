import { experience } from "../../data/resume";

const ExperienceSection = () => {
  return (
    <div className="experience-section">
      <h1 className="heading">Experience</h1>
      {experience.map((item) => (
        <div key={item.id} className="experience-item">
          <img src={item.logo} alt={item.company} className="company-logo" />
          <div className="experience-content">
            <div className="experience-details">
              <h3 className="company-name">{item.company}</h3>
              <p className="role-title">{item.role}</p>
            </div>
            <div className="duration">{item.duration}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceSection;
