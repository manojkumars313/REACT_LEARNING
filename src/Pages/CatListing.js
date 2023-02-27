import React from "react";
import { catData } from "../Utility/DummyData";
import CatCompo from "../Components/CatCompo";
import { useNavigate } from "react-router-dom";

function CatListing() {
  const navigate = useNavigate();

  const handleNavigate = (id, item) => {
    console.log("Parameters", id, item);

    //Push
    navigate(`/cat-detials/${id}`, {
      state: { CatDetail: item },
      replace: true,
    });

    //replce
    // navigate(`/cat-detials/${id}`, {
    //   state: { CatDetail: item },
    //   replace: true,
    // });

    //Go Back
    // navigate(-1);

    //Go Forward
    navigate(1);
  };
  return (
    <div>
      {catData.map((item) => {
        return (
          <div key={item.id} onClick={() => handleNavigate(item.id, item)}>
            <CatCompo id={item.id} imgUrl={item.url} />
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
