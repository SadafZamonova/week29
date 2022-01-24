import './App.css';
import React, { useState } from 'react';
 

function App() {
  
  const [input, setInput] = useState(null)
  const [print, setPrint] = useState(false)
  
  // addTop = ( ) => {
  //   setPrint (input + print )
  // }
  return (

   
<div>
  {print? <h1> {input} </h1> : null} 

  <input value={input} onChange={e => setInput(e.target.value) }/>
  <button onClick={() => {setPrint (input)}}> кнопка </button>


</div>



      )}

export default App;
