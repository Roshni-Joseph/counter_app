import React, { useContext } from 'react'
import { CounterContext } from '../CounterContext';

const Increment = () => {
    const {IncrementCounter} = useContext(CounterContext);
  return (
    <button onClick={IncrementCounter}>Increment</button>
  )
}
 
export default Increment