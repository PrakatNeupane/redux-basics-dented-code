import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const Display = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.counter);
  // lets you enter the entire global state

  return <div>Value = {count}</div>;
};
