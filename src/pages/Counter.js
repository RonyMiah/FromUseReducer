import React, { useReducer } from 'react';

const Counter = () => {

    const initialState = 0; 

    const reducer = (state , action) => {

        console.log(action)
        if(action.type === "INCREMENT"){
           return state + action.payload.count

        }
        if(action.type === "DECREMENT"){
          return state - action.payload.count

        }
    }

const [state, dispatch] = useReducer( reducer, initialState)



    return (
        <div className='border p-5 w-25 mx-auto border-warning'>
            <h1 className=' text-center'>{state}</h1>
            <button className='btn btn-primary m-2' onClick={() => dispatch({type:"INCREMENT", payload: {count: 5}})}>Increment</button>
            <button className='btn btn-primary m-2' onClick={() => dispatch({type:"DECREMENT" , payload: {count: 5}})} >Decrement</button>

        </div>
    );
};

export default Counter; 