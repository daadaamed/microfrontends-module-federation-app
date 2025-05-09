import "./App.css";

const App = () => {
  const handleAdd = () => {
    const val = (document.getElementById("todo") as HTMLInputElement).value;
    const todos = JSON.parse(localStorage.getItem("todos") || "[]");
    todos.push(val);
    localStorage.setItem("todos", JSON.stringify(todos));
    window.dispatchEvent(new Event("todos-updated"));
  };

  return (
    <div>
      <h1>Add Todo Microapp</h1>
      <input id="todo" placeholder="New todo" />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default App;
