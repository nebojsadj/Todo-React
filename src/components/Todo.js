import React, { useEffect } from "react";
import store from "../redux/store";
import {
  load_action,
  mark_action,
  delete_action,
} from "../redux/actionCreators";

function Todo({ todo }) {
  useEffect(() => {
    store.dispatch(load_action());
  }, []);

  return (
    <div className="card">
      <div className="card-body">
        <h2 className={todo.done ? "done" : "notDone"}>{todo.task}</h2>
        <button
          onClick={() => {
            store.dispatch(mark_action(todo.id));
          }}
          className="btn btn-warning btn-sm float-left"
        >
          To mark
        </button>
        <button
          onClick={() => store.dispatch(delete_action(todo.id))}
          className="btn btn-danger btn-sm float-right"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Todo;
