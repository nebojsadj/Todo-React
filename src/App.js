import React, { StrictMode } from "react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

function App() {
  return (
    <StrictMode>
      <AddTodo />
      <TodoList />
    </StrictMode>
  );
}

export default App;
