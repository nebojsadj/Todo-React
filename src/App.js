import React from "react";
import TodoList from "./components/TodoList";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";

function App() {
  return (
    <React.Fragment>
      <Header />
      <AddTodo />
      <TodoList />
    </React.Fragment>
  );
}

export default App;
