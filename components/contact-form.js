import { useState } from "react";
import Button from "./common/button";

const Form = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  const handleChange = e => {
    return setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setStatus("loading");
    setError("");

    //construct a new url instance
    let url = new URL(
      "https://script.google.com/macros/s/AKfycbxMXWGNp4isxbz2uyQdv6Xzac4PIyVaSEl8aHFgTr7fzV_ZETU/exec"
    );

    // Add the form values to the url as query parameters
    Object.keys(values).forEach(key => {
      url.searchParams.append(key, values[key]);
    });

    //send a get request with the query params
    fetch(url)
      .then(({ ok }) => {
        if (!ok) {
          setError(
            "Failed to send message. Send a mail to tonero91@gmail.com if error persists"
          );
          return setStatus("");
        }
        setStatus("done");
        setValues({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => setStatus(""), 2000);
      })
      .catch(e => {
        setError("Network failure. Please check your network and retry");
        return setStatus("");
      });
  };

  return (
    <form action="" className="col-lg-8 px-4" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group col-lg-4">
          <label htmlFor="name" className="form-group-label required">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="form-control form-control-lg"
            value={values.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group col-lg-4">
          <label htmlFor="email" className="form-group-label required">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="form-control form-control-lg"
            value={values.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group col-lg-4">
          <label htmlFor="phone" className="form-group-label">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            className="form-control form-control-lg"
            value={values.phone}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="" className="form-group-label required">
          Message
        </label>
        <textarea
          name="message"
          rows="4"
          className="form-control form-control-lg"
          value={values.message}
          onChange={handleChange}
          required
        />
      </div>
      {error ? <p className="form-text text-danger">{error}</p> : null}
      <button
        className="btn btn-lg d-inline text-white"
        type="submit"
        disabled={!status ? false : true}
      >
        {!status ? (
          "Send Message"
        ) : status === "loading" ? (
          <div>
            Sending <i className="fas fa-sync fa-spin" />
          </div>
        ) : (
          <div>
            Sent <i className="fas fa-check" />
          </div>
        )}
      </button>
      <style jsx>
        {`
          .form-group-label.required:after {
            content: "*";
            color: red;
          }

          button {
            background-color: #f9899c;
            box-shadow: 0px 2px 22px 1px rgba(245, 244, 244, 1);
            transition: all 0.2s linear;
          }
          button:hover {
            box-shadow: 0px 2px 22px 1px rgba(200, 190, 190, 1);
          }
        `}
      </style>
    </form>
  );
};

export default Form;
