import React, { useEffect } from "react";
import {
  load_action,
  mark_action,
  delete_action,
} from "../redux/actionCreators";
import { useDispatch } from "react-redux";

function Todo({ todo, index }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(load_action());
  }, []);

  return (
    <div className="card">
      <div className="card-body">
        <h2 className={todo.done ? "done" : "notDone"}>{todo.task}</h2>
        <button
          onClick={() => {
            dispatch(mark_action(index));
          }}
          className="btn btn-warning btn-sm float-left"
        >
          To mark
        </button>
        <button
          onClick={() => dispatch(delete_action(todo.id))}
          className="btn btn-danger btn-sm float-right"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Todo;
