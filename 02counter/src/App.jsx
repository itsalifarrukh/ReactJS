import "./App.css";
import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    if (counter === 25) {
      alert("Value should not be greater than 25");
    } else {
      setCounter(counter + 1);
    }
  };

  const removeValue = () => {
    if (counter === 0) {
      alert("Value should not be less than 0");
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Counter Project on React</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value</button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <footer>Farrukh Ali</footer>
    </>
  );
}

export default App;
