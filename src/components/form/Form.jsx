import React from "react";
import { Button } from "../button/Button";

export const Form = ({ increaseCount, decreaseCount }) => {
  return (
    <div>
      <h2>Counter form</h2>
      <Button
        increaseCount={increaseCount}
        decreaseCount={decreaseCount}
      ></Button>
    </div>
  );
};
