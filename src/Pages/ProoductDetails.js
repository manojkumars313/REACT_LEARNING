import React from "react";
import { useParams } from "react-router-dom";

function ProoductDetails() {
  const Params = useParams();
  console.log("params", Params);
  return (
    <div>
      <h1>Prooduct Details : {Params.productId} </h1>
    </div>
  );
}

export default ProoductDetails;
