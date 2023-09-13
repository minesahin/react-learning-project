import React, { useState } from "react";
import "./App.css";
import TodoTable from "./components/TodoTable";
import NewTodoForm from "./components/NewTodoForm";

function App() {
  const [todos, setTodos] = useState([
    { rowNumber: 1, rowDescription: "Feed puppy", rowAssigned: "User One" },
    { rowNumber: 2, rowDescription: "Water plants", rowAssigned: "User Two" },
    { rowNumber: 3, rowDescription: "Make dinner", rowAssigned: "User three" },
    {
      rowNumber: 4,
      rowDescription: "Charge phone battery",
      rowAssigned: "User four",
    },
  ]);

  const addTodo = (description,assigned) => {
    if (todos.length > 0) {
      const newTodo = {
        rowNumber: todos.length + 1,
        rowDescription: description,
        rowAssigned: assigned,
      };
      setTodos((todos) => [...todos, newTodo]);
    }
  };

  return (
    <div class="mt-5 container">
      <div class="card">
        <div class="card-header">Your Todo's</div>
        <div class="card-body">
          <TodoTable todos={todos} />
          <button className="btn btn-primary" onClick={addTodo}>
            Add new todo
          </button>
          <NewTodoForm addTodo={addTodo}/> 
        </div>
      </div>
    </div>
  );
}

export default App;
