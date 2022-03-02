export const ADD = "ADD";
export const DELETE = "DELETE";
export const UPDATE = "UPDATE";

const toDoReducer = (toDos = [], action) => {
  switch (action.type) {
    case ADD:
      return [...toDos, { text: action.text, id: Date.now() }];
    case DELETE:
      return toDos.filter((item) => item.id !== action.id);
    case UPDATE:
      const filteredToDos = toDos.filter((item) => item.id !== action.id);
      return [{ id: action.id, text: action.text }, ...filteredToDos];
    default:
      return toDos;
  }
};

export default toDoReducer;
