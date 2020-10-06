import { loadTodo, markTodo, deleteTodo, addTodo } from "./types";

export const load_action = () => {
  return {
    type: loadTodo,
  };
};

export const mark_action = (id) => {
  return {
    type: markTodo,
    payload: {
      id: id,
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

export const add_action = (add) => {
  return {
    type: addTodo,
    payload: {
      add: add,
    },
  };
};
