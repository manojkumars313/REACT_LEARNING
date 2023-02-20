import Counter from "./Components/Counter";
import Timer from "./Components/Timer";
import Introduction from "./Components/Introduction";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Introduction ageProp={10} nameProp={"Manoj"} />
      <Counter />
      <Timer />
    </div>
  );
}

export default App;
