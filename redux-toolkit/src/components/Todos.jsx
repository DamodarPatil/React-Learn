import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";
import { useState } from "react";

const Todos = () => {
  const todos = useSelector((state) => state.todos); // Assuming todos is an array here
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
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md">
      <ul className="space-y-4">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <span className="text-lg font-medium text-gray-700">{todo.title}</span>
            <div className="space-x-2">
              <button
                className="px-3 py-1.5 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition-colors"
                onClick={() => dispatch(removeTodo(todo.id))}
              >
                Delete
              </button>
              <button
                className="px-3 py-1.5 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition-colors"
                onClick={() => handleEditClick(todo)}
              >
                Edit
              </button>
            </div>
          </li>
        ))}
      </ul>

      {editingTodo && (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg shadow-lg">
          <div className="mb-4 text-center">
            <span className="text-lg font-semibold text-gray-700">Edit Todo</span>
          </div>
          <div className="flex items-center">
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <div className="ml-3 space-x-2">
              <button
                className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition-colors"
                onClick={handleUpdateClick}
              >
                Update
              </button>
              <button
                className="px-4 py-2 bg-gray-500 text-white rounded-lg shadow hover:bg-gray-600 transition-colors"
                onClick={() => setEditingTodo(null)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Todos;
