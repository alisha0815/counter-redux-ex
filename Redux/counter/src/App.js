import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "./components/Form";
import { decrement, increment } from "./redux/actions/counterActions";
import {
  addToDo,
  deleteToDo,
  updateToDo,
} from "./redux/actions/toDoActions.js";

function App() {
  const counter = useSelector((state) => state.countReducer);
  const toDo = useSelector((state) => state.toDoReducer);
  const [text, setText] = useState("");
  const [newText, setNewText] = useState(text);
  const onChange = (e) => setText(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("text", text);
    addToDo(text);
    setText("");
  };

  const dispatch = useDispatch();

  const updateHandler = (id) => {
    dispatch(updateToDo(id));
    const newText = prompt("Edit to do");
    setText(newText);
  };
  return (
    <>
      <h1>Counter</h1>
      <h3>total: {counter}</h3>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <div>
        <form onSubmit={onSubmit}>
          <h1>Add To DO</h1>
          <input type="text" value={text} onChange={onChange} />
          <button onClick={() => dispatch(addToDo(text))}>Add</button>
        </form>
        <ul>
          TO DO List:
          {toDo.map((item) => (
            <li key={item.id}>
              {item.text}
              <button onClick={() => dispatch(deleteToDo(item.id))}>
                DELETE
              </button>
              <button onClick={() => updateHandler(item.id)}>UPDATE</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
