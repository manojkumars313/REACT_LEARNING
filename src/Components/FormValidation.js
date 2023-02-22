import React from "react";
import { useState } from "react";
import { checkCapitalLetter } from "./commonfunctions";

function FormValidation() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    description: "",
  });

  // Form validation

  const [errorMessage, setErrorMessage] = useState({
    nameError: "",
    emailError: "",
    passwordError: "",
    ageError: "",
    descriptionError: "",
  });

  const [passwordStrength, setPasswordStrength] = useState({
    passwordStrength: "",
  });

  const handleError = (event) => {
    const { name, value } = event.target;
    const errorData = { ...errorMessage };
    const emailPattern = /^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const passworddata = { ...passwordStrength };

    switch (name) {
      case "name": {
        if (value.length < 3) {
          errorData.nameError = "Text must be at least 4 characters";
        } else {
          errorData.nameError = "";
        }
        console.log("name switch case");
        break;
      }

      case "email": {
        if (!emailPattern.test(value)) {
          errorData.emailError = "Please enter a valid email address.";
        } else {
          errorData.emailError = "";
        }
        console.log("email switch case");
        break;
      }

      case "password": {
        if (value.length < 8) {
          errorData.passwordError = "Password must be at least 8 characters";
        } else if (!value.includes("@")) {
          console.log(
            "this the condition",
            !value.includes("@"),
            !value.includes("&")
          );
          errorData.passwordError =
            "Password should contain atleast one alpha numeric letter";
        } else if (!checkCapitalLetter(value)) {
          errorData.passwordError =
            "Password should contain atleast one capital letter";
        } else {
          console.log("");
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

    console.log("error message", errorData);
    setErrorMessage(errorData);
    setPasswordStrength(passworddata);
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    console.log("name and value", name, value);
    setFormState({ ...formState, [name]: value });
    handleError(event);
  };

  const handleSubmit = (events) => {
    events.preventDefault();
    console.log("events", events);
  };

  const checkDisabled = () => {
    if (
      !formState.name ||
      !formState.email ||
      !formState.age ||
      !formState.password
    ) {
      return true;
    } else if (
      errorMessage.nameError ||
      errorMessage.ageError ||
      errorMessage.emailError ||
      errorMessage.passwordError ||
      errorMessage.descriptionError
    ) {
      return true;
    }

    return false;
  };

  console.log("states of form : ", formState);

  return (
    <div>
      <h1>Form Validation</h1>
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
        <br />
        <span style={{ color: "red" }}>{errorMessage.emailError}</span>
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
        <br />
        <span style={{ color: "red" }}>{errorMessage.passwordError}</span>
        <span style={{ color: "green" }}>
          {passwordStrength.passwordStrength}
        </span>
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
          disabled={checkDisabled()}
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormValidation;
