import React from "react";
import Navbar from "../Components/NavBar";
import Counter from "./Counter";
import "../App.css";

function Home() {
  return (
    <div>
      <Navbar />
      <Counter />
    </div>
  );
}

export default Home;
