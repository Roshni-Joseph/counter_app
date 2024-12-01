import React, { useState ,createContext } from 'react';

export const CounterContext = createContext();

export const CounterContextProvider = ({children}) =>{
    const [count, setCount] = useState(0);
    const Increment = () =>{
        setCount((prevCount) => prevCount + 1);
        console.log("add")
    }
    const Decrement = () =>{
        setCount((prevCount) => prevCount - 1);
        console.log("minus")
    }
    

    return(
        <CounterContext.Provider value={{count,Increment,Decrement}}>
            {children}
        </CounterContext.Provider>  
    )

}