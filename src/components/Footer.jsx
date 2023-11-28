import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../styles/Nav.css";

export default function Footer() {
  return (
    <>
      <section className="container">
        <div className="d-flex justify-content-center p-3">
          <a
            href="https://github.com/solomonkrow"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-git"
          >
            <FontAwesomeIcon
              icon="fa-brands fa-github"
              beatFade
              size="2xl"
              className="m-5"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/solomonkrow"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <FontAwesomeIcon
              icon="fa-brands fa-linkedin"
              beatFade
              size="2xl"
              className="m-5"
            />
          </a>
        </div>
      </section>
    </>
  );
}
