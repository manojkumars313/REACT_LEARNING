import { combineReducers } from "@reduxjs/toolkit";
import CounterReducer from "./CounterReducer";
import ABCReducer from "./AbcReducer";
import FetchCatListReducer from "./FetchCatListReducer";

const Reducer = combineReducers({
  counterReducer: CounterReducer,
  abcReducer: ABCReducer,
  fetchCatListReducer: FetchCatListReducer,
});

export default Reducer;
