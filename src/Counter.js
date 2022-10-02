import React, { useContext } from "react";
import { contextCounter } from "./App";

export default function Counter() {
  const { counter, dispatch } = useContext(contextCounter);
  return (
    <>
      <h1>{counter.count}</h1>
      <div class="buttons" >
      <button className="increment" onClick={() => dispatch("INCREMENT")}>Increase</button>
      <button  className="reset" onClick={() => dispatch("RESET")}>Reset</button>
      <button  className="decrement" onClick={() => dispatch("DECREMENT")}>Decrease</button>
      <button className="multiply" onClick={() => dispatch("MULTIPLY")}>multiply</button>
      </div>
      
    </>
  );
}

export const ObserverOne = () => {
  const { counter } = useContext(contextCounter);
  return (
    <>
      <h1>observer one: {counter.count}</h1>
      <p>{Math.random()}</p>
    </>
  );
};

export const ObserverTwo = () => {
  const { counter } = useContext(contextCounter);
  return (
    <>
      <h1>observer two: {counter.random}</h1>
      <p>{Math.random()}</p>
    </>
  );
};
