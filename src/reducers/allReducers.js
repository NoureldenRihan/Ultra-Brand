import { combineReducers } from "redux";
import watchesReducers from "./watchesReducers";

const allReducers = combineReducers({
  watchesData: watchesReducers,
});

export default allReducers;
