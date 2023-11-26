import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  const currentPage = useLocation().pathname;

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <section className="container-fluid">
        <h1 className="navbar-brand">Josiah Thomas</h1>
        <ul className="navbar-nav nav nav-tabs">

          <li className="nav-item">
            <Link to="/" className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>
              About
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/portfolio" className={currentPage === '/portfolio' ? 'nav-link active' : 'nav-link'}>
              Portfolio
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/contact" className={currentPage === '/contact' ? 'nav-link active' : 'nav-link'}>
              Contact
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/resume" className={currentPage === '/resume' ? 'nav-link active' : 'nav-link'}>
              Resume
            </Link>
          </li>

        </ul>
      </section>
    </nav>
  );
}

/* export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <section className="container-fluid">
        <h1 className="navbar-brand">Josiah Thomas</h1>
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
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Resume
              </a>
            </li>
          </ul>
        </div>
      </section>
    </nav>
  );
} */
