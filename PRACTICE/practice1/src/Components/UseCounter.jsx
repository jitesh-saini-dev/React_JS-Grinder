import React, { useState } from "react";

const UseCounter = (initialval = 0) => {
  const [count, setCount] = useState(initialval);

  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }
  function multi() {
    setCount(count * 2);
  }
  function divide() {
    setCount(count / 2);
  }
  return { count, increment, decrement, multi, divide };
};

export default UseCounter;
