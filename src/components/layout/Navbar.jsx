import { NavLink } from "react-router-dom";
import useTheme from "../../hooks/useTheme";
import "./Navbar.css";

import HomeIcon from "../icons/HomeIcon";
import ProjectIcon from "../icons/ProjectIcon";
import BlogIcon from "../icons/BlogIcon";
import GithubIcon from "../icons/GithubIcon";
import LinkedInIcon from "../icons/LinkedInIcon";
import LeetcodeIcon from "../icons/LeetcodeIcon";
import LightThemeIcon from "../icons/LightThemeIcon";
import DarkThemeIcon from "../icons/DarkThemeIcon";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="navbar">
      <ul className="navbar__group">
        <NavItem to="/" icon={<HomeIcon />} />
        <NavItem to="/projects" icon={<ProjectIcon />} />
        <NavItem to="/blog" icon={<BlogIcon />} />
      </ul>

      <div className="navbar__divider" />

      <ul className="navbar__group">
        <ExternalIcon
          href="https://github.com/dead-shadow-7"
          label="GitHub"
          icon={<GithubIcon />}
        />
        <ExternalIcon
          href="https://leetcode.com/u/shivam-rajput/"
          label="LeetCode"
          icon={<LeetcodeIcon />}
        />
        <ExternalIcon
          href="https://www.linkedin.com/in/shivamrajput12119/"
          label="LinkedIn"
          icon={<LinkedInIcon />}
        />

        <li>
          <button
            className="nav-icon theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <LightThemeIcon /> : <DarkThemeIcon />}
          </button>
        </li>
      </ul>
    </nav>
  );
};

const NavItem = ({ to, icon }) => (
  <li>
    <NavLink
      to={to}
      end
      className={({ isActive }) => (isActive ? "nav-icon active" : "nav-icon")}
    >
      {icon}
    </NavLink>
  </li>
);

const ExternalIcon = ({ href, icon, label }) => (
  <li>
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="nav-icon"
    >
      {icon}
    </a>
  </li>
);

export default Navbar;
