import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "../Components/NavBar";
import "../App.css";

function StudentList() {
  const navigation = useNavigate();
  const studentList = useSelector((state) => state.studentReducer.studentList);
  console.log("studentList", studentList);

  const handleAddNewStudent = () => {
    navigation("/addStudent");
  };
  return (
    <>
      <Navbar />
      <br />
      <br />
      <div className="title">
        <h1 className="student">Students Details</h1>
        <button className="btnEdit" onClick={handleAddNewStudent}>
          Add New Student
        </button>
      </div>
      <br />
      <br />
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Course</th>
              <th>Batch</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {studentList?.map((item, index) => {
              return (
                <tr key={item.id}>
                  <td>{item?.name}</td>
                  <td>{item?.age}</td>
                  <td>{item?.course}</td>
                  <td>{item?.batch}</td>
                  <td>
                    <Link
                      to="/editstudent"
                      state={{ data: index }}
                      style={{ color: "black", textDecoration: "underline" }}
                    >
                      Edit
                    </Link>
                    <Link
                      to="/editstudent"
                      state={{ data: index }}
                      style={{ color: "black", textDecoration: "underline" }}
                    >
                      Delete
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default StudentList;
