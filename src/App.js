import "./App.css";
import store from "./Redux/Store";
import { Provider } from "react-redux";
import Counter from "./Components/Counter";

function App() {
  console.log("App's store", store.getState());
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
