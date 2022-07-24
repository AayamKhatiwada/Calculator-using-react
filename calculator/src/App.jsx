// importing css
import './App.css';
import { useState } from 'react';

function App() {

  // usestate  to display the typed number and symbols
  const [ count , change ] = useState('');

  // usestate to display the output after equal to button is pressed
  const [ num , display ] = useState('');

  // back() function to move a step back
  function back(){
      // changing the count by slicing one letter
      change(count => count = count.slice(0,-1))
  }

  // clear() function to clear the screen
  function clear(){
    change(count => count = '')
    display(num => num = '')
  }

  // output() function to display the output
  function output(){
    display(num => num = eval(count))
  }

  return (
    <>
    <h1>Calculator using react</h1>
    <div className="main">
      {/* container to display the input and output screen */}
      <div className='top-container'>
        <div className='first-part'><span>{count}</span></div>
        <div className='last-part'><span>{num}</span></div>
      </div>
      {/* container to display the numbers and symbols*/}
      <div className='bottom-container'>
        <div className='line'>
          <button className='span-two' value='AC' onClick={clear}>AC</button>
          <button value='DEL' onClick={back}>DEL</button>
          <button value='/' onClick={(e) => change( count => count + e.target.value)}>/</button>
        </div>
        <div className='line'>
          <button value='1' onClick={(e) => change( count => count + e.target.value)}>1</button>
          <button value='2' onClick={(e) => change( count => count + e.target.value)}>2</button>
          <button value='3' onClick={(e) => change( count => count + e.target.value)}>3</button>
          <button value='*' onClick={(e) => change( count => count + e.target.value)}>*</button>
        </div>
        <div className='line'>
          <button value='4' onClick={(e) => change( count => count + e.target.value)}>4</button>
          <button value='5' onClick={(e) => change( count => count + e.target.value)}>5</button>
          <button value='6' onClick={(e) => change( count => count + e.target.value)}>6</button>
          <button value='+' onClick={(e) => change( count => count + e.target.value)}>+</button>
        </div>
        <div className='line'>
          <button value='7' onClick={(e) => change( count => count + e.target.value)}>7</button>
          <button value='8' onClick={(e) => change( count => count + e.target.value)}>8</button>
          <button value='9' onClick={(e) => change( count => count + e.target.value)}>9</button>
          <button value='-' onClick={(e) => change( count => count + e.target.value)}>-</button>
        </div>
        <div className='line'>
          <button value='.' onClick={(e) => change( count => count + e.target.value)}>.</button>
          <button value='0' onClick={(e) => change( count => count + e.target.value)}>0</button>
          <button className='span-two' value='=' onClick={output}>=</button>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
