import { Link } from "react-router-dom";
import "../App.css";

function Navbar() {
  return (
    <div className="navbar">
      <li>
        <Link to="/">Counter App</Link>
      </li>
      <li>
        <Link to="/student">Students App</Link>
      </li>
    </div>
  );
}

export default Navbar;
