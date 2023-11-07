import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Title />
      <div className="form-content">
        <Button />
        <Form />
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="title">
      <TitleDescription />
    </div>
  );
}

function TitleDescription() {
  return (
    <div className="title-description">
      <h1 className="heading">Learn to code by watching others</h1>
      <p className="text">
        See how experienced developers solve problems in real-time. Watching
        scripted tutorials is great, but understanding how developers think is
        invaluable.
      </p>
    </div>
  );
}

function Button() {
  return (
    <div className="title-btn">
      <button className="btn">
        <b>Try it free 7 days</b> then $20/mo. thereafter
      </button>
    </div>
  );
}

function Form() {
  const [inputFields, setInputFields] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const [submitted, setSubmitted] = useState(false);

  function handleInputs(e) {
    setInputFields({ ...inputFields, [e.target.name]: e.target.value });
  }

  function handleValidateValues(inputValues) {
    let errors = {};

    if (inputValues.firstName === "") {
      errors.firstName = "First name cannot be empty";
    }
    if (inputValues.lastName === "") {
      errors.lastName = "Last name cannot be empty";
    }
    if (inputValues.email === "") {
      errors.email = "Looks like this is not an email";
    }
    if (inputValues.password === "") {
      errors.password = "Password cannot be empty";
    }
    console.log(errors);
    return errors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    setErrors(handleValidateValues(inputFields));
    // setSubmited();
    setInputFields({ firstName: "", lastName: "", email: "", password: "" });
    setSubmitted(true);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      {/* First input */}
      <div className="form-control">
        <div className="form-input">
          <input
            className="input"
            type="text"
            name="firstName"
            placeholder={
              !inputFields.firstName && errors.firstName ? "" : "First Name"
            }
            value={inputFields.firstName}
            onChange={handleInputs}
            style={
              !inputFields.firstName && errors.firstName
                ? { border: "2px solid 	#FF7979" }
                : { border: "2px solid #dedede" }
            }
          />
          {!inputFields.firstName && errors.firstName ? (
            <img src="./img/icon-error.svg" alt="icon-error" className="icon" />
          ) : null}
        </div>
        {!inputFields.firstName && errors.firstName ? (
          <span>{errors.firstName}</span>
        ) : null}
        {/* Second input */}
        <div className="form-input">
          <input
            className="input"
            type="text"
            name="lastName"
            placeholder={
              !inputFields.lastName && errors.lastName ? "" : "Last Name"
            }
            value={inputFields.lastName}
            onChange={handleInputs}
            style={
              !inputFields.lastName && errors.lastName
                ? { border: "2px solid 	#FF7979" }
                : { border: "2px solid #dedede" }
            }
          />
          {!inputFields.lastName && errors.lastName ? (
            <img src="./img/icon-error.svg" alt="icon-error" className="icon" />
          ) : null}
        </div>
        {!inputFields.lastName && errors.lastName ? (
          <span>{errors.lastName}</span>
        ) : null}
        {/* Third input */}
        <div className="form-input">
          <input
            className={!submitted ? `${"input"}` : `${"input-placeholder"}`}
            type="email"
            name="email"
            placeholder={
              !inputFields.email && errors.email
                ? "email@example/com"
                : "Email Adress"
            }
            value={inputFields.email}
            onChange={handleInputs}
            style={
              !inputFields.email && errors.email
                ? { border: "2px solid 	#FF7979" }
                : { border: "2px solid #dedede" }
            }
          />
          {!inputFields.email && errors.email ? (
            <img src="./img/icon-error.svg" alt="icon-error" className="icon" />
          ) : null}
        </div>
        {!inputFields.email && errors.email ? (
          <span>{errors.email}</span>
        ) : null}
        {/* Fourth input */}
        <div className="form-input">
          <input
            className="input"
            type="password"
            name="password"
            placeholder={
              !inputFields.password && errors.password ? "" : "Password"
            }
            value={inputFields.password}
            onChange={handleInputs}
            style={
              !inputFields.password && errors.password
                ? { border: "2px solid 	#FF7979" }
                : { border: "2px solid #dedede" }
            }
          />
          {!inputFields.email && errors.email ? (
            <img src="./img/icon-error.svg" alt="icon-error" className="icon" />
          ) : null}
        </div>
        {!inputFields.password && errors.password ? (
          <span>{errors.password}</span>
        ) : null}
        <button className="form-btn" type="submit">
          CLAIM YOUR FREE TRIAL
        </button>

        <p className="form-text">
          By clicking the button, you are agreeing to our{" "}
          <strong>Terms and Services</strong>
        </p>
      </div>
    </form>
  );
}
