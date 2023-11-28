/* eslint-disable react/prop-types */
import './../../styles/Nav.css';

// eslint-disable-next-line react/prop-types
export default function Nav({ links }) {
  return (
    <nav className="navbar navbar-expand-lg nav-image py-5">
      <section className="container-fluid ">
        <h1 className="navbar-brand mx-4">Josiah Thomas</h1>
        <ul className="navbar-nav">
          
            {links.map((link) => link)}
          
        </ul>
      </section>
    </nav>
  );
}
