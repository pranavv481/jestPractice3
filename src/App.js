import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {
  const [count, setCount] = useState(0) 
  const [error, setError] = useState(false) 

  return (
    <div data-test="component-app" className="App">
     <h1 data-test="counter-display">Data Display&nbsp; 
     <h3 data-test="error-message" className={ error ? 'error1' : 'hidden' }>{count<0?"Error":""}</h3>
     <span data-test="count">{count<0?0:count}</span>
     </h1>
     <button data-test="increment-button" onClick={()=>setCount(count+1)}>Increment</button>
     <button data-test="decrement-button" 
     onClick={()=>
      {if(count>=0){
        setCount(count-1)
      }else{
        setError(true)
      }
      }
    
    }
    >Decrement</button>
    </div>
  );
}

export default App;
