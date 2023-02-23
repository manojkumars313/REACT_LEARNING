import React from "react";
import ComponentC from "./ComponentC";

function ComponentB(props) {
  return (
    <div>
      <h2 style={{ border: "5px solid black", margin: "2%" }}>
        ComponentB
        <ComponentC name={props.name} />
      </h2>
    </div>
  );
}

export default ComponentB;
