import './App.css';
import { useState } from 'react';

function App() {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    const buttonName = e.target.name;
    switch (buttonName) {
      case "=":
        calculateResult();
        break;
      case "Clear":
        clear();
        break;
      case "c":
        backspace();
        break;
      default:
        setResult(result.concat(buttonName));
    }
  };

  const clear = () => {
    setResult("");
  };

  const backspace = () => {
    setResult(result.slice(0, -1));
  };

  const calculateResult = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="container">
      <form>
        <input type='text' value={result} placeholder='Enter number'/>
      </form>

      <div className="keypad">
        <button onClick={handleClick} name="Clear">Clear</button>
        <button onClick={handleClick} name="c">c</button>
        <button onClick={handleClick} name="/">&divide;</button>
        <button onClick={handleClick} name="7">7</button>
        <button onClick={handleClick} name="8">8</button>
        <button onClick={handleClick} name="9">9</button>
        <button onClick={handleClick} name="*">&times;</button>
        <button onClick={handleClick} name="4">4</button>
        <button onClick={handleClick} name="5">5</button>
        <button onClick={handleClick} name="6">6</button>
        <button onClick={handleClick} name="-">-</button>
        <button onClick={handleClick} name="1">1</button>
        <button onClick={handleClick} name="2">2</button>
        <button onClick={handleClick} name="3">3</button>
        <button onClick={handleClick} name="+">+</button>
        <button onClick={handleClick} name="0">0</button>
        <button onClick={handleClick} name=".">.</button>
        <button onClick={handleClick} name="=">=</button>
      </div>
    </div>
  );
}

export default App;
