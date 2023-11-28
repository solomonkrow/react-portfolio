import face from "../assets/face.jpg";
import "../styles/Pages.css";

export default function About() {
  const styles = {
    card: {
      backgroundColor: 'gold'
    }
  }
  return (
    <section className="container pt-4 mx-auto ">
      <div className="card mb-5 about-me" style={styles.card}>
        <div className="row">
          <div className="col-md-3">
            <img src={face} className="img-fluid" alt="..." />
          </div>

          <div className="col">
            <div className="card-body m-4 ">
              <h5 className="card-title mb-4 ">About Me</h5> <hr />
              <p className="card-text">
                Junior full-stack developer
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
