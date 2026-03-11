import "./Home.css";
import HeroSection from "../components/home/HeroSection";
import ExperienceSection from "../components/home/ExperienceSection";
import EducationSection from "../components/home/EducationSection";
import SkillTags from "../components/common/SkillsTags";
import Footer from "../components/common/Footer";

const Home = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <ExperienceSection />
      <div className="skills-section">
        <h1 className="heading">Skills</h1>
        <SkillTags />
      </div>
      <EducationSection />
      <Footer />
    </div>
  );
};

export default Home;
