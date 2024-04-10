// src/app/reducers.js

import { combineReducers } from "redux";
import someReducer from "./someReducer";

const rootReducer = combineReducers({
  someReducer,
  // Otros reducers aquí...
});

export default rootReducer;
