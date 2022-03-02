import { ADD, DELETE, UPDATE } from "../reducers/toDo";

export const addToDo = (text) => {
  return {
    type: ADD,
    text,
  };
};

export const deleteToDo = (id) => {
  return {
    type: DELETE,
    id,
  };
};

export const updateToDo = (id) => {
  return {
    type: UPDATE,
    id,
  };
};
