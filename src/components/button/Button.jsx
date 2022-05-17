import React from "react";

export const Button = ({ increaseCount, decreaseCount }) => {
  return (
    <div>
      <button onClick={increaseCount}>Increment</button>
      <button onClick={decreaseCount}>Decrement</button>
    </div>
  );
};
