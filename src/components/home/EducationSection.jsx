import { education } from "../../data/resume";

const EducationSection = () => {
  return (
    <div className="education-section">
      <h1 className="heading">Education</h1>
      {education.map((item) => (
        <div key={item.id} className="education-item">
          <img
            src={item.logo}
            alt={item.institution}
            className="university-logo"
          />
          <div className="education-content">
            <div className="education-details">
              <h3 className="college-name">{item.institution}</h3>
              <p className="university-degree">{item.degree}</p>
            </div>
            <div className="duration">{item.duration}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EducationSection;
