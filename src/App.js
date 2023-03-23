import { useState } from "react";
import "./App.css";
// import Router from "./Router";
import CleanUp from "./CleanUp";

function App() {
  const [show, setShow] = useState(true);

  const cleanUp = () => {
    setShow(!show);
    console.log("Clean Up is Called");
  };

  return (
    <div className="App">
      {/* <Router /> */}
      {show && <CleanUp />}

      <button onClick={cleanUp}>Clean Up</button>
    </div>
  );
}

export default App;
