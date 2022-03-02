import { ADD } from "../reducers/toDo";

export const addToDo = (text) => {
  return {
    type: ADD,
    text,
  };
};
