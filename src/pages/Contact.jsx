import { useState } from "react";
import { validateEmail } from "../utils/helpers";
import "../styles/Pages.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event) => {
    const { target } = event;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage("Invalid Email");
      return;
    }

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="row container pt-4 mx-auto contact-form">
        <div className="col-xs-12 col-lg-7">
        <h1 className="mb-3">Contact</h1>
      <hr />
      <form className="mb-5" onSubmit={handleFormSubmit}>
        <div className="form-group mb-3">
          <label className="form-label" htmlFor="name">
            Name :
          </label>
          <input
            value={name}
            className="form-control"
            onChange={handleInputChange}
            type="text"
            placeholder="Name"
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email :
          </label>
          <input
            value={email}
            className="form-control"
            onChange={handleInputChange}
            type="email"
            placeholder="Email Address"
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message :
          </label>
          <textarea
            value={message}
            className="form-control"
            onChange={handleInputChange}
            rows={'7'}
            >
            </textarea>
        </div>
        {errorMessage && (
          <div>
            <p className="error-text my-3">{errorMessage}</p>
          </div>
        )}
        <div className="">
          <button className="btn btn-lg" type="submit">
            Submit
          </button>
        </div>
      </form>
        </div>
      
    </section>
  );
}
