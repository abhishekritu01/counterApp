import { useState, createContext } from 'react';

export const CounterContext = createContext();    // we export our function ====>  count,handleIncrement, handleDecrement,handleReset,handleMultiply

const CounterContextProvider = props => {

    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    }
    const handleDecrement = () => {
        setCount(count - 1);
    }
    const handleReset = () => {
        setCount(count * 0);
    }

    const handleMultiply = () => {
        setCount(count * 2);
    }

    return (
        <CounterContext.Provider value={{ count, handleIncrement, handleDecrement, handleReset, handleMultiply }}>
            {props.children}
        </CounterContext.Provider>
    )
}
export default CounterContextProvider;    // props