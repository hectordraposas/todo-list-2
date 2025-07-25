import { ACTION } from "./actionTypes";

const stored = localStorage.getItem("todo2");

export const initialState = {
  todos: stored ? JSON.parse(stored) : [],
  todoInput: "",
  editingId: null,
  selectAll: false,
  mode: "save",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.TODO_STORED:
      return {
        ...state,
        todos: action.payload,
      };
    case ACTION.TODO_INPUT_VALUE:
      return { ...state, todoInput: action.payload };
    case ACTION.TODO_SAVE:
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: Date.now(), todoName: state.todoInput, isDone: false },
        ],
      };
    case ACTION.TODO_START_EDIT:
      return {
        ...state,
        todoInput: action.payload.editValue,
        editingId: action.payload.id,
        mode: "update",
      };

    case ACTION.TODO_UPDATE:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === state.editingId
            ? { ...todo, todoName: state.todoInput }
            : todo
        ),
        todoInput: "",
        editingId: null,
        mode: "save",
      };

    case ACTION.TODO_DELETE:
      const ask = confirm("Are you sure you want to delete this data?");
      if (!ask) return state;
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case ACTION.TODO_SELECT_ALL:
      return {
        ...state,
        selectAll: !state.selectAll,
        todos: state.todos.map((todo) => ({
          ...todo,
          isDone: !state.selectAll,
        })),
      };

    case ACTION.TODO_CLEAR_DATA:
      const askClear = confirm("Are you sure you want to clear all the data?");
      if (!askClear) return state;
      return { ...state, todos: [] };
  }
};
