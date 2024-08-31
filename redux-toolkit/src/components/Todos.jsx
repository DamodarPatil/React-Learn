import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";
import { useState } from "react";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [editingTodo, setEditingTodo] = useState(null);
  const [newTitle, setNewTitle] = useState("");

  const handleEditClick = (todo) => {
    setEditingTodo(todo);
    setNewTitle(todo.title);
  };

  const handleUpdateClick = () => {
    if (newTitle.trim()) {
      dispatch(
        updateTodo({
          id: editingTodo.id,
          newTitle: newTitle.trim(),
        })
      );
      setEditingTodo(null);
      setNewTitle("");
    }
  };

  return (
    <>
      <div className="text-2xl font-bold mb-4">Todos</div>
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center">
            <span className="mr-2">{todo.title}</span>
            <button
              className="px-2 py-1 bg-red-500 text-white rounded mr-2"
              onClick={() => dispatch(removeTodo(todo.id))}
            >
              Delete
            </button>
            <button
              className="px-2 py-1 bg-blue-500 text-white rounded"
              onClick={() => handleEditClick(todo)}
            >
              Edit
            </button>
          </li>
        ))}
      </ul>

      {/* Conditionally render the update form if a todo is being edited */}
      {editingTodo && (
        <div className="mt-4">
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="px-2 py-1 border rounded"
          />
          <button
            className="ml-2 px-2 py-1 bg-green-500 text-white rounded"
            onClick={handleUpdateClick}
          >
            Update
          </button>
          <button
            className="ml-2 px-2 py-1 bg-gray-500 text-white rounded"
            onClick={() => setEditingTodo(null)}
          >
            Cancel
          </button>
        </div>
      )}
    </>
  );
};

export default Todos;
