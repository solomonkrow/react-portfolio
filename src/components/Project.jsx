/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/Project.css";

export default function Project(props) {
  return (
    <>
      <section className="container">
        <div className="row row-cols-2">
          {props.repo.map((item) => (
            <div className="col p-0" key={item.id}>
              <div className="card text-bg-dark m-4">
                <img src={item.image} className="card-img-top" alt="..." />
                <div className="d-flex justify-content-start card-body ">
                  <h5 className="card-title project-title m-2">{item.title}</h5>
                  <a
                    href={item.gitURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=""
                  >
                    <FontAwesomeIcon
                      icon="fa-brands fa-github"
                      size="2xl"
                      className="mx-3"
                    />
                  </a>
                  <a
                    href={item.deployURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=""
                    style={{
                      visibility: item.deployURL === "" ? "hidden" : "visible",
                    }}
                  >
                    <FontAwesomeIcon
                      icon="fa-solid fa-bolt"
                      size="2xl"
                      className="mx-3"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
