import React, { useState } from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
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
    <Container>
      <h2 className="text-white text-center mt-4">Todo React App</h2>
      <Row className="mt-2">
        <Col
          md={{ span: 6, offset: 3 }}
          xs={{ span: 10, offset: 1 }}
          className="mt-4"
        >
          <Form.Control
            onChange={(e) => setTask(e.target.value)}
            type="text"
            placeholder="Enter task"
            className="form-control text-center"
            value={task}
          />
          <Button
            variant="dark"
            disabled={!task}
            onClick={addTodo}
            className="mx-auto d-block mt-3"
          >
            Add Task
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default AddTodo;
