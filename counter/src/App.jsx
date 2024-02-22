import { useState } from 'react' //for hook
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setcounter]= useState(0)//0 is default value

  const addValue=()=>{
    //counter=counter+1;
    setcounter(counter+1);
  }

  const removeValue=()=>{
    if(counter<1) counter=0;
    else setcounter(counter-1);
  }
  return (
    <>
      <h1>Sanjana's Counter</h1>
      <h2>counter value: {counter}</h2>

      <button className='button' onClick={addValue}>Add value</button>
      <button className='button' onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
