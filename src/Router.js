import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Compo/Contact";
import Home from "./Compo/Home";
// import Student from "./Compo/Student";
// import DataContext from "./DataContext";
import Table from "./Compo/Table";
import Edit from "./Compo/Edit";
import AddStudent from "./Compo/AddStudent";
import DataContext from "./ContextData";
// import NewStudent from "./Compo/NewStudent";

function RouterComponent() {
  const [Data, setData] = useState([
    { name: "Prepbytes", id: 1 },
    { name: "EA19", id: 2 },
  ]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />

        <Route
          path="/Student"
          element={
            <DataContext.Provider
              value={{ entries: Data, updateFunction: setData }}
            >
              <Table />
            </DataContext.Provider>
          }
        />
        <Route
          path="/Edit"
          element={
            <DataContext.Provider
              value={{ entries: Data, updateFunction: setData }}
            >
              <Edit />
            </DataContext.Provider>
          }
        />
        <Route
          path="/NewStudent"
          element={
            <DataContext.Provider
              value={{ entries: Data, updateFunction: setData }}
            >
              <AddStudent />
            </DataContext.Provider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default RouterComponent;
