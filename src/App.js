import "./styles/App.css"
// import { useState } from "react";
import MyCounter from "./components/MyCounter";
import CounterContextProvider from "./contexts/CounterContext";

const App = () => {

  return (
    <CounterContextProvider>
      <div className='App'>
        <h1>Counter App</h1>
        <MyCounter />
      </div>
    </CounterContextProvider>

  )
}
export default App