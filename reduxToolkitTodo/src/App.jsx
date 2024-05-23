import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import UpdateTodo from "./components/UpdateTodo"; // Import the UpdateTodo component

function App() {
  return (
    <>
      <h1 className="text-white font-bold text-4xl">
        Learn about Redux Toolkit
      </h1>
      <AddTodo />
      <UpdateTodo /> {/* Use the UpdateTodo component */}
      <Todos />
    </>
  );
}

export default App;
