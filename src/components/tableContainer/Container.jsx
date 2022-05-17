import React from "react";
import { Display } from "../display/Display";

export const Container = ({ count }) => {
  return (
    <div>
      <h2>Real time updated value</h2>
      <Display count={count}></Display>
    </div>
  );
};
