import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter]=useState(0);

  const addValue=()=>{
    counter=counter+1;
    setCounter(counter);
  }
  
   const removeValue=()=>{
    if(counter===0){
      return;
    }
    counter=counter-1;
    setCounter(counter);
  }

  return (
    <>
      <h1>Najmus Saquib Counter</h1>
      <h2>Counter value: {counter}</h2>

      <button
        onClick={addValue}>Add value</button>
      <br /> <br />
      <button
        onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
