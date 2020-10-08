import React, { useState } from "react";
import { add_action } from "../redux/actionCreators";
import { useDispatch } from "react-redux";

function AddTodo() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const addTodo = () => {
    dispatch(add_action(task));
    setTask("");
  };

  return (
    <div className="container">
      <div className="row mt-2">
        <div className="col-6 offset-3 mt-4">
          <input
            onChange={(e) => setTask(e.target.value)}
            type="text"
            placeholder="Enter task"
            className="form-control text-center"
            value={task}
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
