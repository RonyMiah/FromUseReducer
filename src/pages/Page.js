import React, { useContext } from 'react';
import { COUNTER_CONTEX } from '../App';


const Page = () => {

    const {count, setCount} = useContext(COUNTER_CONTEX)
    return (
        <div>
             <h1  className="mt-5 ">
                <button className="btn btn-primary fs-5 m-5" onClick={()=> setCount(count + 1)} type="submit">Increment+</button>
                    <b className="fs-1 m-5 btn ">{count}</b>
                <button className="btn btn-primary fs-5 m-5"  onClick={()=> setCount((previesState) => previesState - 1)}type="submit">Decrement-</button>
            </h1> 
        </div>
    );
};

export default Page;