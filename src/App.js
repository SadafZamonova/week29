import './App.css';
import React, { useState } from 'react';
 

function App() {
  
  const [input, setInput] = useState("") // 
  const [addprint, setAddPrint] = useState([]) //массив, куда должны попадать сообщения
 
  //функция, которая добавляет value inputа в массив комментов и очищает инпут
 const addTop = ( ) => {
   const result = [...addprint]; //создается массив с комментами
   result.unshift(input); //добавление нового коммента в начало массива
   setAddPrint(result); //перезаписывание 
   setInput(""); //очищение поля инпута
};
   
  return (  

<div >
 <div >
 { addprint.map((print,index) => (<p  key={`${index}`}> {print} </p>))  }
 
   </div>
  
  <input 
      value={input} 
      onChange={e => setInput(e.target.value) }/>
  <button onClick={addTop}> кнопка </button>


</div>



      )}

export default App;
