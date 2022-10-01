import React, { useState } from 'react'
import "./styles/App.css"

const App = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  }
  const handleDecrement = () => {
    setCount(count - 1);
  }
  const handleReset = () => {
    setCount(count*0);
  }

  const handleMultiply = () => {
    setCount(count * 2);
  }

  return (
    <div className='App'>
      <h1>Counter App</h1>
      <span className='counter-preview'>{count}</span>
      <div class="buttons" >
        <button className="decrement" onClick={handleDecrement} >Decrement</button>
        <button className="reset" onClick={handleReset}>Reset</button>
        <button className="increment" onClick={handleIncrement} >Increment</button>
        <button className="add" onClick={handleMultiply}>Multiply</button>
      </div>
    </div>

  )
}

export default App