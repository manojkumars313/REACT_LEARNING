import React from "react";
import CatCompo from "../Components/CatCompo";
import { useParams, useLocation } from "react-router-dom";

function CatDetail() {
  const Params = useParams();
  const Location = useLocation();

  console.log("params: ", Params, Location);

  return (
    <div>
      <h1>Cat Details</h1>
      <CatCompo
        id={Location?.state?.CatDetail?.id}
        imgUrl={Location?.state?.CatDetail?.url}
      />
    </div>
  );
}

export default CatDetail;
