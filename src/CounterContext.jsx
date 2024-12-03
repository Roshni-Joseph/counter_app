import React, { useState ,createContext } from 'react';

export const CounterContext = createContext();

export const CounterContextProvider = ({children}) =>{
    const [count, setCount] = useState(0);
    const IncrementCounter = () =>{
        setCount((prevCount) => prevCount + 1);
        console.log("add")
    }
    const DecrementCounter = () =>{
        setCount((prevCount) => prevCount - 1);
        console.log("minus")
    }
    

    return(
        <CounterContext.Provider value={{count,IncrementCounter,DecrementCounter}}>
            {children}
        </CounterContext.Provider>  
    )

}