import { markTodo, deleteTodo, addTodo } from "./types";

export const mark_action = (index) => {
  return {
    type: markTodo,
    payload: {
      index: index,
    },
  };
};

export const delete_action = (id) => {
  return {
    type: deleteTodo,
    payload: {
      id: id,
    },
  };
};

export const add_action = (task) => {
  return {
    type: addTodo,
    payload: {
      id: Math.floor(Math.random() * (1000 - 10) + 10),
      task: task,
      done: false,
    },
  };
};
