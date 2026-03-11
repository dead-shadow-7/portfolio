import { Link, useLocation } from "react-router-dom";
import "./NotFound.css";

const pages = [
  { label: "/home", to: "/" },
  { label: "/about", to: "/about" },
  { label: "/projects", to: "/projects" },
  { label: "/blog", to: "/blog" },
];

const NotFound = () => {
  const { pathname } = useLocation();

  return (
    <div className="not-found">
      <div className="not-found__card">
        <div className="not-found__bar">
          <span className="not-found__dot red" />
          <span className="not-found__dot yellow" />
          <span className="not-found__dot green" />
          <span className="not-found__bar-label">node</span>
        </div>
        <div className="not-found__body">
          <p className="nf-error">
            <span className="nf-tag error">Error:</span> Cannot find module{" "}
            <span className="nf-string">'{pathname}'</span>
          </p>
          <p className="nf-label">Require stack:</p>
          <p className="nf-stack">- /portfolio/src/routes.jsx</p>

          <p className="nf-label" style={{ marginTop: "1.5rem" }}>
            Did you mean one of these?
          </p>
          <ul className="nf-suggestions">
            {pages.map((page) => (
              <li key={page.to}>
                <span className="nf-arrow">→</span>
                <Link to={page.to} className="nf-link">
                  {page.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
