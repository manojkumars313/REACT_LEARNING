import React from "react";
import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState(0);
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("envent", event);
  };

  const handleOnChange = (events) => {
    const { name, value } = events.target;
    console.log("name and value", name, value);
    // setName(events.target.value);

    switch (name) {
      case "name": {
        console.log("name switch case");
        setName(value);
        break;
      }
      case "email": {
        console.log("email switch case");
        setEmail(value);
        break;
      }
      case "password": {
        setPassword(value);
        break;
      }
      case "age": {
        setAge(value);
        break;
      }
      case "description": {
        setDescription(value);
        break;
      }
      default: {
        return;
      }
    }
  };

  console.log("states of form ", name, email, password, age, description);
  return (
    <div>
      <h1>Form Rendering</h1>

      <form>
        <label>Name : </label>
        <input
          type={"text"}
          name={"name"}
          placeholder={"Name"}
          onChange={handleOnChange}
          value={name}
        ></input>
        <br /> <br />
        <label>Email : </label>
        <input
          type={"email"}
          name={"email"}
          placeholder={"Email"}
          onChange={handleOnChange}
          value={email}
        ></input>
        <br /> <br />
        <label>Password :</label>
        <input
          type={"password"}
          name={"password"}
          placeholder={"Password"}
          onChange={handleOnChange}
          value={password}
        ></input>
        <br /> <br />
        <label>Age : </label>
        <input
          type={"number"}
          name={"age"}
          placeholder={"Age"}
          onChange={handleOnChange}
          value={age}
        ></input>
        <br />
        <br />
        <label>Description : </label>
        <textarea
          name={"description"}
          placeholder={"Description"}
          onChange={handleOnChange}
          value={description}
        ></textarea>
        <br /> <br />
        <button type={"submit"} onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
