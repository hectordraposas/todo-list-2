import { act, useReducer } from "react";
import TodoInputController from "./bodycomponent/TodoInputController";

const initialState = {
  todos: [],
  todoInput: "",
  editId: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "todoValue":
      return { ...state, todoInput: action.payload };
    case "saveTodo":
      const newID = Date.now();

      if (!state.todoInput) return state;

      return {
        ...state,
        todos: [
          ...state.todos,
          { id: newID, todoName: state.todoInput, isDone: false },
        ],
        todoInput: "",
      };

    case "changeCheckState":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
        ),
      };
    case "editID":
      return {
        ...state,
        editId: action.payload.id,
        todoInput: action.payload.editValue,
      };
  }
};

const BodyComponent = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="md:w-[80%] w-[98%] h-auto bg-white/30 mx-auto md:p-5 p-2 rounded-sm text-white border-t-5 border-t-amber-300">
      <h1 className=" font-semibold">Todo List</h1>
      <hr className="text-amber-50 mt-5 mb-5" />

      <TodoInputController dispatch={dispatch} state={state} />
    </div>
  );
};

export default BodyComponent;
