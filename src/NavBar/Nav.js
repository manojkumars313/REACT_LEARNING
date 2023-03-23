import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/Contact">Contact</Link>
      <Link to="/AboutUs">About</Link>
    </div>
  );
}

export default Nav;
