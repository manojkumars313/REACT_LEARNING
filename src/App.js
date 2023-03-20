import "./App.css";
import Favourite from "./Favourite";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="App">
      App is here.....
      {show ? <Favourite age={23} /> : null}
      <button onClick={() => setShow(!show)}>change render</button>
    </div>
  );
}

export default App;
