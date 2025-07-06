import React, { useReducer } from 'react';

const Count = () => {
    const initialValue = 0;

    const reducer = (state, action) => {
        switch (action) {
            case "increment":
                console.log("Increment By 1");
                return state + 1;
            case "decrement":
                console.log("Decrement By 1");
                return state - 1;
            case "increment by 5":
                console.log("Increment By 5");
                return state + 5;
            case "decrement by 5":
                console.log("Decrement By 5");
                return state - 5;
            case "reset":
                console.log("Reset");
                return 0;
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, initialValue);

    return (
        <div>
            <h1>{state}</h1>
            <button onClick={() => dispatch("increment" )}>Increment By 1</button>
            <button onClick={() => dispatch("decrement" )}>Decrement By 1</button>
            <button onClick={() => dispatch("increment by 5" )}>Increment By 5</button>
            <button onClick={() => dispatch("decrement by 5" )}>Decrement By 5</button>
            <button onClick={() => dispatch("reset" )}>Reset</button>
        </div>
    );
};

export default Count;
