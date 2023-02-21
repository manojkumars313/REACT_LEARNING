import React, { useState } from "react";

function FormObj() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    description: "",
  });

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    console.log("name and value", name, value);
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (events) => {
    events.preventDefault();
    console.log("events", events);
  };

  console.log("states of form : ", formState);

  return (
    <div>
      <h1>Form Obj</h1>
      <form>
        <label>Name : </label>
        <input
          type={"text"}
          placeholder={"type here..."}
          name={"name"}
          onChange={handleOnChange}
          value={formState.name}
        />
        <br />
        <br />
        <label>Email : </label>
        <input
          type={"text"}
          placeholder={"type here..."}
          name={"email"}
          onChange={handleOnChange}
          value={formState.email}
        />
        <br />
        <br />
        <label>Password : </label>
        <input
          type={"password"}
          placeholder={"type here..."}
          name={"password"}
          onChange={handleOnChange}
          value={formState.password}
        />
        <br />
        <br />
        <label>Age : </label>
        <input
          type={"number"}
          placeholder={"type here..."}
          name={"age"}
          onChange={handleOnChange}
          value={formState.age}
        />
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
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormObj;
