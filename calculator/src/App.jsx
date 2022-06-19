import './App.css';
import { useState } from 'react';

function App() {
  const [ count , change ] = useState('');
  const [ num , display ] = useState('');

  function back(){
      change(count => count = count.slice(0,-1))
  }

  function clear(){
    change(count => count = '')
    display(num => num = '')
  }

  function output(){
    display(num => num = eval(count))
  }

  return (
    <>
    <h1>Calculator using react</h1>
    <div className="main">
      <div className='top-container'>
        <div className='first-part'><span>{count}</span></div>
        <div className='last-part'><span>{num}</span></div>
      </div>
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
