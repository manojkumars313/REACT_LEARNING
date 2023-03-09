import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";

function Home() {
  return (
    <div>
      <h1>Home</h1>

      <Nav />

      <Link to="/">Home</Link>
      <Link to="/Contact">Contact</Link>
      <Link to="/Student">Student</Link>
    </div>
  );
}

export default Home;
