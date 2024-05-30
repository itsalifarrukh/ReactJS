import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState(2);
  const [multipliedValue, setMultipliedValue] = useState(1);
  const multiplybyfive = () => {
    setMultipliedValue(value * 5);
    setValue(value + 1);
  };
  return (
    <>
      <h1>Main Value: {value}</h1>
      <button onClick={multiplybyfive}>
        Click here to multiply the Value by 5
      </button>
      <h2>Multiplied Value: {multipliedValue}</h2>
    </>
  );
}

export default App;
