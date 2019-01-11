import { useState } from "react";
import Button from "./common/button";

const Form = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = e => {
    return setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    //construct a new url instance
    let url = new URL(
      "https://script.google.com/macros/s/AKfycbxMXWGNp4isxbz2uyQdv6Xzac4PIyVaSEl8aHFgTr7fzV_ZETU/exec"
    );

    // Add the form values to the url as query parameters
    Object.keys(values).forEach(key => {
      url.searchParams.append(key, values[key]);
    });

    //send a get request with the query params
    fetch(url).then(response => {
      console.log(response);
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
      <Button text="Send Message" classes="mt-4 text-white" type="submit" />

      <style jsx>
        {`
          .form-group-label.required:after {
            content: "*";
            color: red;
          }
        `}
      </style>
    </form>
  );
};

export default Form;
