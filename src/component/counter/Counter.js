import React from "react";
import "./Counter.css";
import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  const [show, setShow] = useState(true);
  const incrementHandler = () => {
    setCounter(counter + 1);
  };
  const incrementHandlerBy5 = () => {
    setCounter(counter + 5);
  };
  const decrementHandler = () => {
    setCounter(counter - 1);
  };
  ////////////////////////////////////////////////////////////
  const toggleHandler = () => {
    setShow(!show);
    ///////////////////////////////////////
    //   if (show === true) {
    //     setShow(false);
    //   } else {
    //     setShow(true);
    //   }
  };
  return (
    <div className="counter">
      <div className="value-container">{show && <h1>{counter} </h1>}</div>
      <div className="btn-container">
        <button onClick={incrementHandler} className="btn">
          Increment
        </button>
        <button onClick={incrementHandlerBy5} className="btn">
          Increment by 5
        </button>
        <button onClick={decrementHandler} className="btn">
          Decrement
        </button>
        <button onClick={toggleHandler} className="btn">
          Toggle
        </button>
      </div>
    </div>
  );
}

export default Counter;
