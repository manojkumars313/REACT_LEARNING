import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import DataContext from "../ContextData";

function AddStudent() {
  const ContextData = useContext(DataContext);
  const Navigate = useNavigate();

  const Addobj = {
    name: "",
    id: "",
  };

  const handleChange = (e) => {
    Addobj[e.target.name] = e.target.value;
  };

  const handleAdd = () => {
    ContextData.entries.push(Addobj);
    Navigate("/student");
  };

  return (
    <div>
      <input placeholder="name" name="name" onChange={handleChange}></input>
      <input placeholder="id..." name="id" onChange={handleChange}></input>
      <button type="button" onClick={handleAdd}>
        Add NewStudent
      </button>
    </div>
  );
}

export default AddStudent;
