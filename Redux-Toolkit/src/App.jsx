import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { increment, decrement, incrementByAmount } from "./redux/features/counter/counterSlice";
import { useState } from "react";

function App() {
  const [amount, setAmount] = useState(0)
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handleIncrement() {
    dispatch(increment());
  }

  function handleDecrement() {
    dispatch(decrement());
  }

function handleIncrementByAmount (){
  dispatch(incrementByAmount(amount));
}

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={handleIncrement}
        >
          Increment
        </button>
        <span>Count : {count}</span>
        <button
          aria-label="Decrement value"
          onClick={handleDecrement}
        >
          Decrement
        </button>
        <input type="text" placeholder="Enter a number.."
        onChange={(e)=>{
          setAmount(e.target.value)
        }} />
        <button
          aria-label="Decrement value"
          onClick={handleIncrementByAmount}
        >
          Increment by Amount
        </button>
      </div>
    </div>
  );
}

export default App;
