import { ACTION } from "../../js/actionTypes";

const ListItemComponent = ({ todos, state, dispatch }) => {
  const handleItemClick = (id) => {
    dispatch({
      type: ACTION.TODO_SELECT_DATA,
      payload: id,
    });
  };

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
                onChange={() => handleItemClick(item.id)}
                name=""
                id=""
              />
            </span>
            <span
              className={`text-slate-900 cursor-pointer ${
                item.isDone ? "line-through decoration-red-500" : ""
              }`}
              onClick={() => handleItemClick(item.id)}
            >
              {item.todoName}
            </span>
          </span>
          <span className="flex gap-1">
            <button
              className="cursor-pointer bg-amber-500 p-1 rounded-sm min-w-20"
              onClick={() =>
                dispatch({
                  type: ACTION.TODO_START_EDIT,
                  payload: {
                    id: item.id === state.editingId ? "" : item.id,
                    editValue: item.id === state.editingId ? "" : item.todoName,
                  },
                })
              }
            >
              {state.editingId === item.id ? "Cancel" : "Edit"}
            </button>
            <button
              className="cursor-pointer bg-red-500 p-1 rounded-sm min-w-20"
              onClick={() =>
                dispatch({ type: ACTION.TODO_DELETE, payload: item.id })
              }
            >
              Delete
            </button>
          </span>
        </li>
      ))}
    </ul>
  );
};

export default ListItemComponent;
