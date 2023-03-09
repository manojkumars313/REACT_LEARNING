import { combineReducers } from "@reduxjs/toolkit";
import CounterReducer from "./CounterReducer";
import ABCReducer from "./AbcReducer";

const Reducer = combineReducers({
  counterReducer: CounterReducer,
  abcReducer: ABCReducer,
});

export default Reducer;
