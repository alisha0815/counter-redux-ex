import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/reducers/index.js";

function App() {
  const counter = useSelector((state) => state);
  console.log(counter);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Counter</h1>
      <h3>total: {counter}</h3>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <span></span>
    </>
  );
}

export default App;
