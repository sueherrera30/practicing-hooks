import React, { useReducer } from "react";

const initialstate = {
    count: 0,
};
const Reducer = (state, action) => {
    switch(action.type) {
        case 'add':
            return {
            count: state.count + 1
        }
        case 'minus':
            return {
            count: state.count + 1
        }
        case 'reset':
            return {
            count: initialstate.count,
        }
        default: 
        throw new Error();
    }
}
const Counter = () => {
    const [state, dispatch] = useReducer(Reducer, initialstate);

    return(
        <div>
            <h1>the count is --- {state.count}</h1>
            <button onClick={() => dispatch({ type: 'add' })}>+</button>
            <button onClick={() => dispatch({ type: 'minus' })}>-</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
    )
};

export default Counter;