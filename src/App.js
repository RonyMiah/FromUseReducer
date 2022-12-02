import { createContext, useState } from 'react';
import './App.css';
import Counter from './pages/Counter';
import From from './pages/From';
import Page from './pages/Page';

export const COUNTER_CONTEX  = createContext();

function App() {

  const [count, setCount] = useState(0);
  const value = {count, setCount}

  return (
    <COUNTER_CONTEX.Provider value={value} >
        <div  className=" mt-5 ">
           {/* <Page> </Page> */}
           {/* <Counter></Counter> */}
           <From></From>
        </div>
    </COUNTER_CONTEX.Provider>
  );
}

export default App;
