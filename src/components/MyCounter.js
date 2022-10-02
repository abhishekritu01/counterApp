import { useContext } from "react"
import { CounterContext } from "../contexts/CounterContext"


const MyCounter = () => {

    const {count,handleIncrement, handleDecrement,handleReset,handleMultiply} =useContext(CounterContext)
    


    return (
        <div>
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

export default MyCounter