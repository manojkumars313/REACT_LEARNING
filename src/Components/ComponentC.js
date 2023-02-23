import React from "react";

import { useContext } from "react";
import { ContextInstance } from "../App";

function ComponentC(props) {
  // create instance
  const data = useContext(ContextInstance);

  console.log("props of componentC", props);
  return (
    <div>
      <h3 style={{ border: "5px solid black", margin: "2%" }}>
        ComponentC
        <h6>My Name is : {props.name} from PropDrilling</h6>
        <h6>My Name is : {data.name} from Context Api</h6>
        <button onClick={() => data.setName("Prabhas")}>Change Name </button>
      </h3>
    </div>
  );
}

export default ComponentC;
