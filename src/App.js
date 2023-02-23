// import { useState } from "react";
import { useState } from "react";
import "./App.css";
import ComponentA from "./ComponentA";

function App() {
  const [ageState, setAgeState] = useState();
  // const handleAge = (age) => {
  //   console.log("handleAge called", age);
  //   setAgeState(age);
  // };

  return (
    <div className="App">
      <h1>App.js</h1>
      <p>{ageState > 18 ? "Adult" : "Not Adult"}</p>
      <ComponentA setAgeState={setAgeState} />
    </div>
  );
}

export default App;
