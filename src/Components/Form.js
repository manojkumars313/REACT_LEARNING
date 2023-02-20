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
    const { name, value } = event.target;
    console.log("envent", event);
  };

  const handleOnChange = (events) => {
    console.log(events);
    setName(events.target.value);
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
        <br />

        <label>Email : </label>
        <input type={"email"} name={"email"} placeholder={"Email"}></input>
        <br />

        <label>Password :</label>
        <input
          type={"password"}
          name={"password"}
          placeholder={"Password"}
        ></input>
        <br />

        <label>Age : </label>
        <input type={"number"} name={"age"} placeholder={"Age"}></input>
        <br />
        <br />

        <label>Description : </label>
        <textarea name={"description"} placeholder={"Description"}></textarea>
        <br />

        <button type={"submit"} onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
