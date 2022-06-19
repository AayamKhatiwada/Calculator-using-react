import './App.css';
import { useState } from 'react';

function App() {
  const num = 0;
  const [ count , change ] = useState(0);

  function AC(){
    change(count => count = '')
  }

  function DEL(){
    change('')
  }

  function one(){
    if(count === 0 || count === ''){
      change(count => count = '1')
    }
    else{
      change(count => count = count + '1')      
    }
  }

  function two(){
    if(count === 0 || count === ''){
      change(count => count = '2')
    }
    else{
      change(count => count = count + '2')      
    }
  }

  function three(){
    if(count === 0 || count === ''){
      change(count => count = '3')
    }
    else{
      change(count => count = count + '3')      
    }
  }

  function four(){
    if(count === 0 || count === ''){
      change(count => count = '4')
    }
    else{
      change(count => count = count + '4')      
    }
  }

  function five(){
    if(count === 0 || count === ''){
      change(count => count = '5')
    }
    else{
      change(count => count = count + '5')      
    }
  }

  function six(){
    if(count === 0 || count === ''){
      change(count => count = '6')
    }
    else{
      change(count => count = count + '6')      
    }
  }

  function seven(){
    if(count === 0 || count === ''){
      change(count => count = '7')
    }
    else{
      change(count => count = count + '7')      
    }
  }

  function eight(){
    if(count === 0 || count === ''){
      change(count => count = '8')
    }
    else{
      change(count => count = count + '8')      
    }
  }

  function nine(){
    if(count === 0 || count === ''){
      change(count => count = '9')
    }
    else{
      change(count => count = count + '9')      
    }
  }

  function zero(){
    if(count === 0 || count === ''){
      change(count => count = '0')
    }
    else{
      change(count => count = count + '0')      
    }
  }

  function add(){
    change(count => count + '+')
  }

  function divide(){
    change(count => count + '/')
  }

  function multiply(){
    change(count => count + '*')
  }

  function subtract(){
    change(count => count + '-')
  }

  function equal(){
    change('')
  }

  function decima(){
    change(count => count + '.')
  }

  return (
    <>
    <div className="main">
      <div className='top-container'>
        <div className='first-part'><span>{num}</span></div>
        <div className='last-part'><span>{count}</span></div>
      </div>
      <div className='bottom-container'>
        <div className='line'>
          <button className='span-two' onClick={AC}>AC</button>
          <button onClick={DEL}>DEL</button>
          <button onClick={divide}>/</button>
        </div>
        <div className='line'>
          <button onClick={one}>1</button>
          <button onClick={two}>2</button>
          <button onClick={three}>3</button>
          <button onClick={multiply}>*</button>
        </div>
        <div className='line'>
          <button onClick={four}>4</button>
          <button onClick={five}>5</button>
          <button onClick={six}>6</button>
          <button onClick={add}>+</button>
        </div>
        <div className='line'>
          <button onClick={seven}>7</button>
          <button onClick={eight}>8</button>
          <button onClick={nine}>9</button>
          <button onClick={subtract}>-</button>
        </div>
        <div className='line'>
          <button onClick={decima}>.</button>
          <button onClick={zero}>0</button>
          <button className='span-two' onClick={equal}>=</button>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
