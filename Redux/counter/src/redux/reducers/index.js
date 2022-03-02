import { combineReducers } from "redux";
import countReducer from "./counter";
import toDoReducer from "./toDo";

export const combinedReducers = combineReducers({
  countReducer,
  toDoReducer,
});
