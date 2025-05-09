import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React from "react";
import "./App.css";

const CreateTodo = React.lazy(() => import("add_todo_in_host/todo"));
const ListTodos = React.lazy(() => import("list_todo_in_host/list"));

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <h1>Microfrontends with React</h1>
        <nav>
          <Link to="/add">Create Todo Separately</Link>
          <Link to="/list">List Todos Separately</Link>
        </nav>
        <div className="content">
          <React.Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/add" element={<CreateTodo />} />
              <Route path="/list" element={<ListTodos />} />
            </Routes>
          </React.Suspense>
        </div>
      </div>
    </BrowserRouter>
  );
}
