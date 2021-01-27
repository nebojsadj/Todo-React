import React from "react";
import Todo from "./Todo";
import { useSelector } from "react-redux";
import { Container, Col, Row } from "react-bootstrap";

function TodoList() {
  const todoList = useSelector((state) => state.todoList);

  return (
    <Container className="mt-4">
      <Row>
        <Col md={{ span: 8, offset: 2 }} xs={{ span: 10, offset: 1 }}>
          <Row>
            {todoList.map((todo, index) => (
              <div className="mx-auto mt-4" key={index}>
                <Todo todo={todo} index={index} />
              </div>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default TodoList;
