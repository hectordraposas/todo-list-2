import ListItemComponent from "./ListItemComponent";

const TodoInputController = ({ dispatch, state }) => {
  return (
    <div className="relative">
      <p>Enter Todo:</p>
      <input
        className="p-2 w-full border-white border-2 mt-2"
        type="text"
        value={state.todoInput || ""}
        onChange={(e) =>
          dispatch({ type: "todoValue", payload: e.target.value })
        }
      />

      <div className="flex justify-between items-center">
        <button className="bg-red-500 p-2 mt-2 mb-5 min-w-3/12 rounded-sm cursor-pointer">
          Clear List
        </button>
        <button
          className={`bg-green-500 p-2 mt-2 mb-5 min-w-2/12 rounded-sm ${
            state.todoInput ? "cursor-pointer" : "cursor-not-allowed"
          }`}
          onClick={() => dispatch({ type: "saveTodo" })}
          disabled={state.todoInput ? false : true}
        >
          {state.editId ? "Update" : "Save"}
        </button>
      </div>
      <ListItemComponent
        todos={state.todos}
        state={state}
        dispatch={dispatch}
      />
    </div>
  );
};

export default TodoInputController;
