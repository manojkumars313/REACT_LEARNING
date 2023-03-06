import React from "react";
import CatCompo from "../Components/CatCompo";
import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { ApiCaller } from "../Utility/ApiCaller";

function CatDetail() {
  const Params = useParams();
  const Location = useLocation();

  const [catDetails, setCatDetails] = useState({});

  useEffect(() => {
    ApiCaller({
      method: "GET",
      url: `https://api.thecatapi.com/v1/images/${Params.catid}`,
    })
      .then((response) => {
        console.log("response of Cat details APi", response);
        setCatDetails(response.data);
      })
      .catch((error) => {
        console.log("error of Cat details APi", error);
      });
  }, [Params.catid]);

  console.log("params: ", Params);

  return (
    <div>
      <h1>Cat Details</h1>
      <CatCompo id={catDetails?.id} imgUrl={catDetails?.url} />
    </div>
  );
}

export default CatDetail;
