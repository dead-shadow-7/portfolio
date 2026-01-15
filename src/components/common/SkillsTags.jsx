const skills = [
  "C++",
  "Python",
  "JavaScript",
  "Node.js",
  "Express.js",
  "Socket.io",
  "React",
  "Next.js",
  "FastAPI",
  "MySQL",
  "MongoDB",
  "Docker",
  "Git",
  "Linux",
];

const SkillTags = () => {
  return (
    <div className="skill-tags">
      {skills.map((skill) => (
        <span key={skill} className="skill-tag">
          {skill}
        </span>
      ))}
    </div>
  );
};

export default SkillTags;
