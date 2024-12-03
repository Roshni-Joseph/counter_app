import React, { useContext } from 'react'
import { CounterContext } from '../CounterContext';

const Decrement = () => {
    const {DecrementCounter} = useContext(CounterContext);
  return (
    <button onClick={DecrementCounter}>Decrement</button>
  )
}

export default Decrement