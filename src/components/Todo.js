import React from "react";
import { mark_action, delete_action } from "../redux/actionCreators";
import { useDispatch } from "react-redux";
import { Card } from "react-bootstrap";
import { MdDeleteForever } from "react-icons/md";
import {
  RiCheckboxCircleLine,
  RiCheckboxBlankCircleLine,
} from "react-icons/ri";

function Todo({ todo, index }) {
  const dispatch = useDispatch();

  return (
    <Card
      className="card"
      style={{
        width: "400px",
        border: "2px solid #0275d8",
        borderRadius: "20px",
      }}
    >
      <Card.Body>
        <Card.Text style={{ fontSize: "20px" }} className="text-success">
          Task {index + 1}
        </Card.Text>
        <Card.Title
          className={todo.done ? "done" : "notDone"}
          style={{ fontSize: "25px" }}
        >
          {todo.task}
        </Card.Title>
        {todo.done ? (
          <RiCheckboxCircleLine
            onClick={() => {
              dispatch(mark_action(index));
            }}
            style={{ color: "#5cb85c", width: "30px", height: "30px" }}
          />
        ) : (
          <RiCheckboxBlankCircleLine
            onClick={() => {
              dispatch(mark_action(index));
            }}
            style={{ color: "#d9534f", width: "30px", height: "30px" }}
          />
        )}
        <MdDeleteForever
          size="2em"
          onClick={() => dispatch(delete_action(todo.id))}
          className="float-right text-danger"
        />
      </Card.Body>
    </Card>
  );
}

export default Todo;
