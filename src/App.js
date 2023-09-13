import React, { useState } from 'react'
import './App.css';
export default function App() {

      const [result,setResult]=useState("");

      const handleClick=(e)=>{
   setResult(result.concat(e.target.name));
      }
      const handleClear=()=>{
         setResult("");
      }

      const calculate=()=>{
         try{
         setResult(eval(result).toString());
         }
         catch(err){
            setResult("error");
         }
      }
  return (
    <div className="container">
   
   <form>
      <input type="text" value={result} />
   </form>
   <div className='keypad'>
      <button onClick={handleClear}>C</button>
      <button  onClick={handleClick}>+/-</button>
      <button name='%' onClick={handleClick}>%</button>
      <button name='/' onClick={handleClick} className='yellow'>&divide;</button>
      <button name='7' onClick={handleClick}>7</button>
      <button name='8' onClick={handleClick}>8</button>
      <button name='9' onClick={handleClick}>9</button>
      <button name='*' onClick={handleClick} className='yellow'>&times;</button>
      <button name='4' onClick={handleClick}>4</button>
      <button name='5' onClick={handleClick}>5</button>
      <button name='6' onClick={handleClick}>6</button>
      <button name='-' onClick={handleClick} className='yellow'>-</button>
      <button name='1' onClick={handleClick}>1</button>
      <button name='2' onClick={handleClick}>2</button>
      <button name='3' onClick={handleClick}>3</button>
      <button name='+' onClick={handleClick} className='yellow'>+</button>
      <button name='0' className='zero' onClick={handleClick}>0</button>
      <button name='.' onClick={handleClick}>.</button>
      <button name='=' onClick={calculate} className='yellow'>=</button>
{/* react calculator */}
{/* react calculator */}
{/* react calculator */}
   </div>
    </div>
  )
}
