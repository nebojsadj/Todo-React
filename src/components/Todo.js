import React from "react";
import { mark_action, delete_action } from "../redux/actionCreators";
import { useDispatch } from "react-redux";
import { Card, Form } from "react-bootstrap";
import { MdDeleteForever } from "react-icons/md";

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
        <Card.Text className="text-success">Task {index + 1}</Card.Text>
        <Card.Title
          className={todo.done ? "done" : "notDone"}
          style={{ fontSize: "25px" }}
        >
          {todo.task}
        </Card.Title>
        <Form.Check
          onClick={() => {
            dispatch(mark_action(index));
          }}
          type="checkbox"
          label="MARK"
          className="btn-sm text-warning float-left"
        />
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
