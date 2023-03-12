import React, { useState } from "react";
import { addNewStudentAction } from "../Redux/Actions/StudentsAction";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../App.css";

function StudentForm() {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    course: "",
    batch: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdate = () => {
    console.log("handleUpdate called");
    dispatch(
      addNewStudentAction({ ...formData, id: `id-${new Date().getTime()}` })
    );
    goBack();
  };

  function goBack() {
    navigation(-1);
  }

  const isDisabled = () => {
    if (formData.name && formData.age && formData.batch && formData.course) {
      return false;
    }
    return true;
  };

  console.log("Formdata", formData);

  return (
    <>
      <div className="tableEdit">
        <div className="name">
          <fieldset>
            <legend>Name*</legend>
            <input
              placeholder={"name"}
              name="name"
              onChange={handleChange}
              value={formData.name}
            />
          </fieldset>
        </div>
        <div className="age">
          <fieldset>
            <legend>Age*</legend>
            <input
              placeholder={"age"}
              name="age"
              type={"number"}
              onChange={handleChange}
              value={formData.age}
            />
          </fieldset>
        </div>
        <div className="course">
          <fieldset>
            <legend>Course*</legend>
            <input
              placeholder={"Course"}
              name="course"
              onChange={handleChange}
              value={formData.course}
            />
          </fieldset>
        </div>
        <div className="batch">
          <fieldset>
            <legend>Batch*</legend>
            <input
              placeholder={"batch"}
              name="batch"
              onChange={handleChange}
              value={formData.batch}
            />
          </fieldset>
        </div>
      </div>
      <div className="btn-both">
        <div>
          <button className="btn-cancel" onClick={goBack}>
            Cancel
          </button>
        </div>
        <div>
          <button
            disabled={isDisabled()}
            className="btn-edit"
            onClick={handleUpdate}
          >
            Update
          </button>
        </div>
      </div>
    </>
  );
}

export default StudentForm;
