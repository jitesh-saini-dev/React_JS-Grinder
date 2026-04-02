import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(10);

  //   if (count < 0) {
  //     alert("Value is reached in -ve");
  //      setCount=10;
  //   }

  function increament() {
    if (count + 2 > 50) {
      alert("Value goes greater than 50");
      setCount(10);
      return;
    }
    setCount(count + 2);
  }

  function decrement() {
    if (count - 2 < 0) {
      alert("Value cannot go negative");
      setCount(10);
      return;
    }
    setCount(count - 2);
  }

  function multi() {
    if (count * 2 > 50) {
      alert("Value goes greater than 50");
      setCount(10);
      return;
    }
    setCount(count * 2);
  }
  function divide() {
    if (count <= 0) {
      alert("Cannot divide when value is zero or negative");
      setCount(10);
      return;
    }

    setCount(Math.floor(count / 2));
  }

  return (
    <div>
      <h1>count : {count}</h1>
      <button
        style={{ margin: "10px", padding: "10px 20px" }}
        onClick={increament}
      >
        +
      </button>
      <button
        style={{ margin: "10px", padding: "10px 20px" }}
        onClick={decrement}
      >
        -
      </button>
      <button style={{ margin: "10px", padding: "10px 20px" }} onClick={multi}>
        *
      </button>
      <button style={{ margin: "10px", padding: "10px 20px" }} onClick={divide}>
        /
      </button>
    </div>
  );
}

export default Counter;
