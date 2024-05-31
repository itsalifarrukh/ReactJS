import { useState } from "react";
import "./App.css";

function App() {
  console.log("App Rendered", Math.random());
  // const [value, setValue] = useState(2);
  // const [multipliedValue, setMultipliedValue] = useState(1);
  // const multiplybyfive = () => {
  //   setMultipliedValue(value * 5);
  //   setValue(value + 1);
  // };

  const [value, setValue] = useState({
    value: 1,
  });
  // let multipliedValue = value * 5;
  // const multiplybyfive = () => {
  //   setValue(value + 1);
  // };
  const clickMe = () => {
    setValue({
      value: 1,
    });
  };
  return (
    <>
      <h1>Main Value: {value.value}</h1>
      <button onClick={clickMe}>Click here to multiply the Value by 5</button>
      {/* <h2>Multiplied Value: {multipliedValue}</h2> */}
    </>
  );
}

export default App;
