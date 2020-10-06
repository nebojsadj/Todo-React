import React from "react";
import TodoList from "./components/TodoList";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <AddTodo />
        <TodoList />
      </Provider>
    </div>
  );
}

export default App;
