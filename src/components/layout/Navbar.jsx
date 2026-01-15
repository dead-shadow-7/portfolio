import { NavLink } from "react-router-dom";
import "./Navbar.css";
import HomeIcon from "../icons/HomeIcon";
import AboutIcon from "../icons/AboutIcon";
import ProjectIcon from "../icons/ProjectIcon";

const links = [
  { name: <HomeIcon />, path: "/" },
  { name: <AboutIcon />, path: "/about" },
  { name: <ProjectIcon />, path: "/projects" },
];

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__links">
        {links.map((link) => (
          <li key={link.name}>
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
    </nav>
  );
};

export default Navbar;
