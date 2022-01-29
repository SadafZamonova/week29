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
   {/* отображаем массив и записываем ключ index рядом с элементом, так как map кроме элемента массива может возвращать его индекс в массиве., так же условие выведения комента другим цветом */}
 { addprint.map((print,index) => (<p style={{backgroundColor: index ===0 ? 'red' : 'grey' }} key={index}> {print} </p>))  } 
 
   </div>
  
  <input 
      value={input} 
      onChange={e => setInput(e.target.value) }/>  {/* храним значение инпута в с стейте */}
  <button onClick={addTop}> кнопка </button>


</div>



      )}

export default App;
