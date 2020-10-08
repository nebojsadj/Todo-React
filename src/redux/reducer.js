import initState from "./initState";
import { loadTodo, markTodo, deleteTodo, addTodo } from "./types";

function reducer(state = initState, action) {
  switch (action.type) {
    case loadTodo:
      return state;
    case markTodo:
      state.todoList[action.payload.index].done = !state.todoList[
        action.payload.index
      ].done;
      return { ...state, todoList: [...state.todoList] };
    case deleteTodo:
      let filtered = state.todoList.filter((el) => el.id !== action.payload.id);
      return { ...state, todoList: filtered };
    case addTodo:
      return { ...state, todoList: [...state.todoList, action.payload.add] };

    default:
      return state;
  }
}

export default reducer;
