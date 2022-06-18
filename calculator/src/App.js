import './App.css';

function App() {
  return (
    <div className="main">
      <div className='top-container'>
        <div className='first-part'>1000</div>
        <div className='last-part'>100</div>
      </div>
      <div className='bottom-container'>
        <div className='line'>
          <button className='span-two'>AC</button>
          <button>DEL</button>
          <button>/</button>
        </div>
        <div className='line'>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>*</button>
        </div>
        <div className='line'>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>+</button>
        </div>
        <div className='line'>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>-</button>
        </div>
        <div className='line'>
          <button>.</button>
          <button>0</button>
          <button className='span-two'>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
