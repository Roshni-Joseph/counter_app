import React , { useContext ,useState } from 'react'
import './counterDisplay.css'
import Increment  from './Increment';
import Decrement from './Decrement';
import { CounterContext } from '../CounterContext';

const CounterDisplay = () => {
  const {count} = useContext(CounterContext);

  return (
    <div className='display'>
        <Increment />
        <h1>{count}</h1>
        <Decrement />
    </div>
  )
}

export default CounterDisplay