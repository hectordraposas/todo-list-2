const ListItemComponent = ({ todos, state, dispatch }) => {
  return (
    <ul>
      {todos.map((item) => (
        <li
          className="flex justify-between items-center bg-white/60 p-1 border-2 border-bg-white/70 rounded-sm"
          key={item.id}
        >
          <span className="flex items-center justify-center gap-1">
            <span className="flex items-center justify-center">
              <input
                type="checkbox"
                checked={item.isDone}
                onChange={(e) =>
                  dispatch({
                    type: "changeCheckState",
                    payload: item.id,
                  })
                }
                name=""
                id=""
              />
            </span>
            <span
              className={`text-slate-900 ${
                item.isDone ? "line-through decoration-red-500" : ""
              }`}
            >
              {item.todoName}
            </span>
          </span>
          <span className="flex gap-1">
            <button
              className="cursor-pointer bg-amber-500 p-1 rounded-sm min-w-20"
              onClick={() =>
                dispatch({
                  type: "editID",
                  payload: {
                    id: item.id === state.editId ? null : item.id,
                    editValue: item.id === state.editId ? null : item.todoName,
                  },
                })
              }
            >
              {state.editId === item.id ? "Cancel" : "Edit"}
            </button>
            <button className="cursor-pointer bg-red-500 p-1 rounded-sm min-w-20">
              Delete
            </button>
          </span>
        </li>
      ))}
    </ul>
  );
};

export default ListItemComponent;
