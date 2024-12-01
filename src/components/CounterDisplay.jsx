import React , { useContext ,useState } from 'react'
import './counterDisplay.css'
import { CounterContext } from '../CounterContext';

const CounterDisplay = () => {
    const {count,Increment,Decrement} = useContext(CounterContext);

  return (
    <div className='display'>
        <button onClick={Increment}>Increment</button>
        <h1>{count}</h1>
        <button onClick={Decrement}>Decrement</button>
    </div>
  )
}

export default CounterDisplay