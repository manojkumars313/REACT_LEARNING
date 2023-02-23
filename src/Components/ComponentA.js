import React from "react";
import ComponentB from "./ComponentB";

function ComponentA(props) {
  return (
    <div>
      <h1 style={{ border: "5px solid black", margin: "2%" }}>
        ComponentA
        <ComponentB name={props.name} />
      </h1>
    </div>
  );
}

export default ComponentA;
