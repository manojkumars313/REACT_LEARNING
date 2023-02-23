import React from "react";
import { useState } from "react";
import { checkCapitalLetter } from "./commonfunctions";

function Form2() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    description: "",
  });

  const [errorMessage, setErrorMessage] = useState({
    nameError: "",
    emailError: "",
    passwordError: "",
    ageError: "",
    descriptionError: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const [passwordStrength, setPasswordStrength] = useState({
    passwordStrength: "",
  });
  const [emailStrength, setEmailStrength] = useState({
    emailStrength: "",
  });

  const handleError = (event) => {
    const { name, value } = event.target;
    const errorData = { ...errorMessage };
    const emailPattern = /^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const passworddata = { ...passwordStrength };
    const emaildata = { ...emailStrength };

    switch (name) {
      case "name": {
        if (value.length < 3) {
          errorData.nameError = "Text must be at least 4 characters";
        } else {
          errorData.nameError = "";
        }
        break;
      }

      case "email": {
        if (!emailPattern.test(value)) {
          errorData.emailError = "Please enter a valid email address.";
        } else {
          errorData.emailError = "";
          emaildata.emailStrength = "Verified";
        }
        break;
      }

      case "password": {
        if (value.length < 8) {
          errorData.passwordError = "Password must be at least 8 characters";
        } else if (!value.includes("@")) {
          errorData.passwordError =
            "Password should contain atleast one alpha numeric letter";
        } else if (!checkCapitalLetter(value)) {
          errorData.passwordError =
            "Password should contain atleast one capital letter";
        } else {
          errorData.passwordError = "";
          passworddata.passwordStrength = "Strong Password";
        }
        break;
      }

      case "age": {
        if (value < 18 || value > 25) {
          errorData.ageError = "Candidate must be between 18 to 25";
        } else {
          errorData.ageError = "";
        }
        break;
      }

      case "description": {
        break;
      }

      default: {
        return;
      }
    }

    setErrorMessage(errorData);
    setPasswordStrength(passworddata);
    setEmailStrength(emaildata);
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
    handleError(event);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true); // Set isSubmitted to true when the submit button is clicked
  };

  console.log("states of form : ", formState);

  return (
    <div>
      <h1>Form Validation 2</h1>
      <form>
        <label>
          Name<span style={{ color: "red" }}>*</span> :{" "}
        </label>
        <input
          type={"text"}
          placeholder={"type here..."}
          name={"name"}
          onChange={handleOnChange}
          value={formState.name}
        />
        <br />
        <span style={{ color: "red" }}>{errorMessage.nameError}</span>
        {formSubmitted && !formState.name && (
          <span style={{ color: "darkblue" }}>Name is required</span>
        )}
        <br />
        <br />
        <label>
          Email<span style={{ color: "red" }}>*</span> :{" "}
        </label>
        <input
          type={"text"}
          placeholder={"type here..."}
          name={"email"}
          onChange={handleOnChange}
          value={formState.email}
        />
        <span style={{ color: "blue", margin: "15px" }}>
          {emailStrength.emailStrength}
        </span>
        <br />
        <span style={{ color: "red" }}>{errorMessage.emailError}</span>
        {formSubmitted && !formState.email && (
          <span style={{ color: "darkblue" }}>Email is required</span>
        )}
        <br />
        <br />
        <label>
          Password<span style={{ color: "red" }}>*</span> :{" "}
        </label>
        <input
          type={"password"}
          placeholder={"type here..."}
          name={"password"}
          onChange={handleOnChange}
          value={formState.password}
        />

        <span style={{ color: "green", margin: "15px" }}>
          {passwordStrength.passwordStrength}
        </span>
        <br />
        <span style={{ color: "red" }}>{errorMessage.passwordError}</span>
        {formSubmitted && !formState.password && (
          <span style={{ color: "darkblue" }}>Password is required</span>
        )}
        <br />
        <br />
        <label>
          Age<span style={{ color: "red" }}>*</span> :{" "}
        </label>
        <input
          type={"number"}
          placeholder={"type here..."}
          name={"age"}
          onChange={handleOnChange}
          value={formState.age}
        />
        <br />
        <span style={{ color: "red" }}>{errorMessage.ageError}</span>
        {formSubmitted && !formState.age && (
          <span style={{ color: "darkblue" }}>Age is required</span>
        )}
        <br />
        <br />
        <label>Description : </label>
        <textarea
          placeholder={"type here..."}
          name={"description"}
          onChange={handleOnChange}
          value={formState.description}
        />
        <br />
        <br />
        <button
          className="btn"
          //   disabled={checkDisabled()}
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form2;
