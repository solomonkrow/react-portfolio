import { Link, useLocation } from "react-router-dom";
import Header from "./UI/Header";

export default function Nav() {
  const currentPage = useLocation().pathname;

  return (
    <Header
      links={[
        <Link
          to="/"
          className={currentPage === "/" ? "nav-link active" : "nav-link"}
          key={1}
        >
          About
        </Link>,
        <Link
          to="/portfolio"
          className={currentPage === "/portfolio" ? "nav-link active" : "nav-link"}
          key={2}
        >
          Portfolio
        </Link>,
        <Link
          to="/contact"
          className={currentPage === "/contact" ? "nav-link active" : "nav-link"}
          key={3}
        >
          Contact
        </Link>,
        <Link
          to="/resume"
          className={currentPage === "/resume" ? "nav-link active" : "nav-link"}
          key={4}
        >
          Resume
        </Link>,
      ]}
    />
  );
}
