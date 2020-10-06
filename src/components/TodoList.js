import React from "react";
import Todo from "./Todo";
import { useSelector } from "react-redux";

function TodoList() {
  const todoList = useSelector((state) => state.todoList);

  let allList = todoList.map((todo, index) => (
    <div className="col-6 offset-3 mt-4" key={index}>
      <Todo todo={todo} />
    </div>
  ));

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-8 offset-2">
          <div className="row">{allList}</div>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
