import { NavLink } from "react-router-dom";
import "./Navbar.css";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
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
