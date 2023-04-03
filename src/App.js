import { useState } from 'react';
import './App.css';

function App() {
  const [result, setResult] = useState(0);
  const [variable, setVariable] = useState(0);

  const handleChange = (e) => {
    e.preventDefault();
    setVariable(parseInt(e.target.value));
  };

  return (
    <div className="app">
      <h1>Simplest Wroking Calculator</h1>
      <p>{result}</p>
      <input value={variable} onChange={handleChange} />
      <button onClick={() => setResult((prevResult) => prevResult + parseInt(variable))}>+</button>
      <button onClick={() => setResult((prevResult) => prevResult - parseInt(variable))}>-</button>
      <button onClick={() => setResult((prevResult) => prevResult * parseInt(variable))}>x</button>
      <button onClick={() => setResult((prevResult) => prevResult / parseInt(variable))}>/</button>
      <button onClick={() => setVariable(0)}>reset input</button>
      <button onClick={() => setResult(0)}>reset result</button>
    </div>
  );
}

export default App;
