import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Counter from './Components/Counter';
import { Provider } from 'react-redux';

import { increment ,decrement } from './Store/action';
import counter from './Store/reduce';
import { useDispatch , useSelector } from 'react-redux';




 
function App() {
  const count = useSelector(state => state.count)
 

  const dispatch = useDispatch()
  return (
    
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
         counter : {count}
         <br/>
         <button onClick={()=>dispatch(increment())} > + </button>
         <button onClick={()=>dispatch((decrement()))} > - </button>
          </header>
        </div>

 
  );
}

export default App;
