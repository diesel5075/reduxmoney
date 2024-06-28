import { combineReducers } from "@reduxjs/toolkit";
import AmountReducer from "./AmountReducer";

const reducers = combineReducers({
  amount: AmountReducer,
});
export default reducers