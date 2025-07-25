import { useEffect, useReducer } from "react";
import TodoInputController from "./bodycomponent/TodoInputController";
import { initialState, reducer } from "../js/reducer";
import { ACTION } from "../js/actionTypes";

const BodyComponent = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("todo2", JSON.stringify(state.todos));
  }, [state.todos]);

  return (
    <div className="md:w-[80%] w-[98%] h-auto bg-white/30 mx-auto md:p-5 p-2 rounded-sm text-white border-t-5 border-t-amber-300">
      <h1 className=" font-semibold">Todo List</h1>
      <hr className="text-amber-50 mt-5 mb-5" />

      <TodoInputController dispatch={dispatch} state={state} />
    </div>
  );
};

export default BodyComponent;
