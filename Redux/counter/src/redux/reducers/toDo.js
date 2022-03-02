export const ADD = "ADD";
export const DELETE = "DELETE";

const toDoReducer = (toDos = [], action) => {
  switch (action.type) {
    case ADD:
      return [...toDos, { text: action.text, id: Date.now() }];
    case DELETE:
      return toDos.filter((item) => item.id !== action.id);
    default:
      return toDos;
  }
};

export default toDoReducer;
