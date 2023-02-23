import "./App.css";
import ComponentA from "./Components/ComponentA";
import { useState, createContext } from "react";

export const ContextInstance = createContext();

function App() {
  const [name, setName] = useState("Manoj");
  return (
    <ContextInstance.Provider value={{ name: name, setName: setName }}>
      <div className="App">
        <ComponentA name={name} />
      </div>
    </ContextInstance.Provider>
  );
}

export default App;
