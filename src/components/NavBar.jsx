import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <div className= "container d-flex justify-content-center">
    <nav className="navbar navbar-expand-lg bg-body-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to={"/"}>
                portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/about-me"}>
                about me
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/contact"}>
                contact
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/TaylorSullivan_resume.pdf"
                target="_blank"
              >
                resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  );
}
