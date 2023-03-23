import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aboutus from "./Components/AboutUs";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Error from "./Components/Error";

function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/AboutUs" element={<Aboutus />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
