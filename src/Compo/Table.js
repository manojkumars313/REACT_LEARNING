import React from "react";
import { useContext } from "react";
import ContextData from "../ContextData";
import { Link } from "react-router-dom";
// import Nav from "./Nav";
import Home from "./Home";

function Table() {
  const DataContext = useContext(ContextData);
  console.log(DataContext);

  return (
    <div>
      <Home />
      <Link to="/NewStudent">
        <button>Add Student</button>
      </Link>
      <table>
        <tr>
          <td>Name</td>
          <td>ID</td>
          <td>Edit</td>
        </tr>
        <tbody>
          {DataContext.entries.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.id}</td>
              <td>
                <Link to="/Edit" state={{ Data: index }}>
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
