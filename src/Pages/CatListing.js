import React, { useState } from "react";
import { catData } from "../Utility/DummyData";
import CatCompo from "../Components/CatCompo";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function CatListing() {
  const navigate = useNavigate();

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/images/search?limit=10", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("response of fetching: ", response);
        setData(response);
      })
      .catch((err) => console.log("error"))
      .finally(() => {
        console.log("finally");
      });
  }, []);

  const handleNavigate = (id, item) => {
    console.log("parameters", id, item);
    /*
     * Helps to navigate between pages
     * takes 2 arguments: 1. path, navigation options(optional)
     */

    //push
    navigate(`/catDetails/${id}`, {
      state: { catDetail: item, status: "Available" },
    });
  };

  //replce
  // navigate(`/cat-detials/${id}`, {
  //   state: { CatDetail: item },
  //   replace: true,
  // });

  //Go Back
  // navigate(-1);

  //Go Forward
  // navigate(1);

  return (
    <div>
      {data?.map((item) => {
        return (
          <div key={item.id} onClick={() => handleNavigate(item.id, item)}>
            <CatCompo id={item?.id} imgUrl={item?.url} />
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
