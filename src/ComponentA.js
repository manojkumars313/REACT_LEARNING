import React from "react";
import { useState } from "react";

function ComponentA({ setAgeState }) {
  const [age, setAge] = useState();

  const onChangeAge = (event) => {
    console.log("onChangeAge", age);
    setAge(event.target.value);
    setAgeState(event.target.value);
  };

  return (
    <div>
      <h1>State Uplifting</h1>
      Age : <input type={"number"} value={age} onChange={onChangeAge}></input>
    </div>
  );
}

export default ComponentA;
