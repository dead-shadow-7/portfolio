import { NavLink } from "react-router-dom";
import "./Navbar.css";
import HomeIcon from "../icons/HomeIcon";
import ProjectIcon from "../icons/ProjectIcon";
import BlogIcon from "../icons/BlogIcon";
import GithubIcon from "../icons/GithubIcon";
import LinkedInIcon from "../icons/LinkedInIcon";
import LeetcodeIcon from "../icons/LeetcodeIcon";

const links = [
  { name: <HomeIcon />, path: "/" },
  { name: <ProjectIcon />, path: "/projects" },
  { name: <BlogIcon />, path: "/blog" },
];

const externalLinks = [
  {
    name: <GithubIcon />,
    href: "https://github.com/dead-shadow-7",
    label: "GitHub",
  },
  {
    name: <LeetcodeIcon />,
    href: "https://leetcode.com/u/shivam-rajput/",
    label: "LeetCode",
  },
  {
    name: <LinkedInIcon />,
    href: "https://www.linkedin.com/in/shivamrajput12119/",
    label: "LinkedIn",
  },
];

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__side" />
      <ul className="navbar__links">
        {links.map((link) => (
          <li key={link.path}>
            <NavLink
              to={link.path}
              end
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="navbar__ext">
        {externalLinks.map(({ href, name, label }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="nav-link"
            title={label}
          >
            {name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
