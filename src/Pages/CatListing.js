import React, { useEffect, useState } from "react";
import { catData } from "../Utility/DummyData";
import CatCompo from "../Components/CatCompo";
import { useNavigate } from "react-router-dom";
import { ApiCaller } from "../Utility/ApiCaller";

function CatListing() {
  const navigate = useNavigate();

  const [catData, setCatData] = useState([]);

  useEffect(() => {
    ApiCaller({
      method: "GET",
      url: "https://api.thecatapi.com/v1/images/search?limit=10",
    })
      .then((res) => {
        console.log("Api res", res);
        setCatData(res.data);
      })
      .catch((err) => {
        console.log("Api err", err);
      });
  });

  const handleNavigate = (id, item) => {
    console.log("Parameters", id, item);
    navigate(`/cat-detials/${id}`);
  };
  return (
    <div>
      <h1>Cat List</h1>
      {catData.map((item) => {
        return (
          <div key={item.id} onClick={() => handleNavigate(item.id, item)}>
            <CatCompo id={item.id} imgUrl={item?.url} />
          </div>
        );
      })}
      {/* {catData.map((item) => {
        return <CatCompo id={item.id} imgUrl={item.url} key={item.id} />;
      })} */}
    </div>
  );
}

export default CatListing;
