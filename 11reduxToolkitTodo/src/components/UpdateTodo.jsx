import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTodo } from "../features/todo/todoSlice";

function UpdateTodo() {
  const [id, setId] = useState("");
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos); // Access the todos array correctly

  const updateTodoHandler = (e) => {
    e.preventDefault();
    if (id && text) {
      dispatch(updateTodo({ id, text }));
      setId("");
      setText("");
    }
  };

  return (
    <form onSubmit={updateTodoHandler} className="space-x-3 mt-12">
      <select
        value={id}
        onChange={(e) => setId(e.target.value)}
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      >
        <option value="" disabled>
          Select Todo to Update
        </option>
        {todos.map((todo) => (
          <option key={todo.id} value={todo.id}>
            {todo.text}
          </option>
        ))}
      </select>
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Update Todo text..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Update Todo
      </button>
    </form>
  );
}

export default UpdateTodo;
