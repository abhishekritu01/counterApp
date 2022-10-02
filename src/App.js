import React, { useReducer, createContext } from "react";


import "./styles/App.css";
import Counter from "./Counter";

export const contextCounter = createContext();

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "MULTIPLY":
      return { ...state, count: state.count * 2 };
    case "RESET":
      return { ...state, count: initialState };
    default:
      return { state, count: initialState };
  }
};

export default function App() {
  const [counter, dispatch] = useReducer(reducer, { count: initialState });
  return (
    <>
      <div className="App">
      <h1 >
        Counter App
      </h1>
      <contextCounter.Provider value={{ counter, dispatch }}>
        <Counter />
      </contextCounter.Provider>
      </div>
    </>
  );
}
