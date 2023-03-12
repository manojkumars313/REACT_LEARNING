import "./App.css";
import store from "./Redux/Store";
import { Provider } from "react-redux";
import RouterComponent from "./RouterComponent";

function App() {
  console.log("App's store", store.getState());
  return (
    <Provider store={store}>
      <div className="App">
        <RouterComponent />
      </div>
    </Provider>
  );
}

export default App;
