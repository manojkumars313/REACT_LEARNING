import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import DataContext from "../ContextData";

function Edit() {
  const ContextData = useContext(DataContext);
  console.log(ContextData);

  const index = useLocation().state.Data;
  console.log(index);

  const Navigate = useNavigate();

  const updateObj = {
    name: ContextData.entries[index].name,
    id: ContextData.entries[index].id,
  };
  const handleChange = (e) => {
    updateObj[e.target.name] = e.target.value;
    console.log(updateObj);
  };

  const handleUpdate = () => {
    ContextData.entries[index] = updateObj;
    console.log(updateObj);

    // Navigate("/Student");
    Navigate(-1);
  };
  return (
    <div>
      <input
        placeholder={ContextData.entries[index].name}
        name="name"
        onChange={handleChange}
      ></input>
      <input
        placeholder={ContextData.entries[index].id}
        name="id"
        onChange={handleChange}
      ></input>
      {/* /* {Data.entries[index].name}
      {Data.entries[index].id} */}
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default Edit;
