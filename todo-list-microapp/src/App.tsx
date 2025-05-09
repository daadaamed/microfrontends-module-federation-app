import "./App.css";
import { useState, useEffect } from "react";

const App = () => {
  const [todos, setTodos] = useState<string[]>([]);

  const loadTodos = () => {
    const stored = JSON.parse(localStorage.getItem("todos") || "[]");
    setTodos(stored);
  };

  useEffect(() => {
    loadTodos();
    window.addEventListener("todos-updated", loadTodos);
    return () => window.removeEventListener("todos-updated", loadTodos);
  }, []);

  return (
    <div>
      <h1>Todo List Microapp</h1>
      <ul>
        {todos.map((todo, i) => (
          <li key={i}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
