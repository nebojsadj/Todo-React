import React, { StrictMode } from "react";
import TodoList from "./components/TodoList";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";

function App() {
  return (
    <StrictMode>
      <Header />
      <AddTodo />
      <TodoList />
    </StrictMode>
  );
}

export default App;
