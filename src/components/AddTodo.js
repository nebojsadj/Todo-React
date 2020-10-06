import React, { useState } from "react";
import { add_action } from "../redux/actionCreators";
import { useDispatch } from "react-redux";

function AddTodo() {
  const [todo, setTodo] = useState({ id: "", task: "", done: false });
  const dispatch = useDispatch();

  const addTodo = () => {
    dispatch(add_action(todo));
    setTodo({ ...todo, task: "" });
  };

  return (
    <div className="container">
      <div className="row mt-2">
        <div className="col-6 offset-3 mt-4">
          <input
            onChange={(e) =>
              setTodo({
                ...todo,
                id: Math.floor(Math.random() * (1000 - 10) + 10),
                task: e.target.value,
              })
            }
            type="text"
            placeholder="Enter task"
            className="form-control text-center"
            value={todo.task}
          />
          <button
            onClick={addTodo}
            className="btn btn-dark mx-auto d-block mt-3"
          >
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
