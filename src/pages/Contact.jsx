import { useState } from "react";
import { validateEmail } from "../utils/helpers";
import "../styles/Pages.css";

const Contact = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const [formStatus, setStatus] = useState('Send');

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };

    /* let response = await fetch('http://localhost:3000/contact', {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        "Access-Control-Allow-Origin" : "*", 
        "Access-Control-Allow-Credentials" : true 
      },
      body: JSON.stringify(details),
    }); */
if (!validateEmail(email)) {
      setErrorMessage("Invalid Email");
      return;
    }
    setStatus('Submitted');
    // let result = await response.json();
    // alert(result.status);

    
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
            className="form-control"
            type="text"
            id="name"
            required
            placeholder="Name"
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email :
          </label>
          <input
            className="form-control"
            type="email"
            id="email"
            required
            placeholder="Email Address"
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message :
          </label>
          <textarea
            className="form-control"
            id="message"
            required
            rows={'7'}
            >
            </textarea>
        </div>
        {errorMessage && (
          <div>
            <p className="error-text my-3">{errorMessage}</p>
          </div>
        )}
          <button className="btn btn-lg" type="submit">
            {formStatus}
          </button>
        
      </form>
        </div>
      
    </section>
  );
} 

export default Contact;
