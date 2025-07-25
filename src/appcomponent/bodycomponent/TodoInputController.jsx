import { ACTION } from "../../js/actionTypes";
import ListItemComponent from "./ListItemComponent";

const TodoInputController = ({ dispatch, state }) => {
  return (
    <div className="">
      <p>Enter Todo:</p>
      <input
        className="p-2 w-full border-white border-2 mt-2"
        type="text"
        value={state.todoInput}
        onChange={(e) =>
          dispatch({ type: ACTION.TODO_INPUT_VALUE, payload: e.target.value })
        }
      />
      <div className="flex justify-between items-center">
        <button
          className={`bg-red-500 p-2 mt-2 mb-5 min-w-3/12 rounded-sm  ${
            state.todos.length > 0 ? "cursor-pointer" : "cursor-not-allowed "
          }`}
          disabled={!state.todos.length > 0}
          onClick={() => dispatch({ type: ACTION.TODO_CLEAR_DATA })}
        >
          Clear List
        </button>
        <button
          className={`bg-green-500 p-2 mt-2 mb-5 min-w-2/12 rounded-sm ${
            state.todoInput ? "cursor-pointer" : "cursor-not-allowed"
          }`}
          onClick={() =>
            dispatch({
              type:
                state.mode === "update" ? ACTION.TODO_UPDATE : ACTION.TODO_SAVE,
            })
          }
          disabled={state.todoInput ? false : true}
        >
          {state.editingId ? "Update" : "Save"}
        </button>
      </div>
      {state.todos.length > 0 && (
        <span className="flex items-center gap-1 ml-1.5">
          <input
            type="checkbox"
            name="checkall"
            id="chkall"
            value={state.selectAll}
            onChange={() => dispatch({ type: ACTION.TODO_SELECT_ALL })}
          />
          <span>Select all</span>
        </span>
      )}

      <ListItemComponent
        todos={state.todos}
        state={state}
        dispatch={dispatch}
      />
    </div>
  );
};

export default TodoInputController;
