import "./App.css";
import Cards from "./components/Cards";

function App() {
  return (
    <>
      <h1>Tailwind test</h1>
      <Cards username="Macbook" btnText="Click me" />
      <Cards username="iPhone" />
      <Cards username="Mac Studio" />
    </>
  );
}

export default App;
