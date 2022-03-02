export const ADD = "ADD";
export const DELETE = "DELETE";

const toDoReducer = (toDos = [], action) => {
  switch (action.type) {
    case ADD:
      return [...toDos, { text: action.text, id: Date.now() }];
    default:
      return toDos;
  }
};

export default toDoReducer;
