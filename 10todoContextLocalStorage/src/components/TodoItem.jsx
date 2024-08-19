import { useState } from "react";
import PropTypes from "prop-types";
import { useTodo } from "../contexts";

const TodoItem = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [todoText, setTodoText] = useState(todo.text);
  const { updateTodoItem, toggleTodoCompletion, removeTodoItem } = useTodo();

  const handleUpdate = () => {
    updateTodoItem(todo.id, { ...todo, text: todoText });
    setIsEditing(false);
  };

  const handleToggle = () => {
    toggleTodoCompletion(todo.id);
  };

  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        todo.isCompleted ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.isCompleted}
        onChange={handleToggle}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isEditing ? "border-black/10 px-2" : "border-transparent"
        } ${todo.isCompleted ? "line-through" : ""}`}
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        readOnly={!isEditing}
      />
      {/* Edit, Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todo.isCompleted) return;

          if (isEditing) {
            handleUpdate();
          } else setIsEditing((prev) => !prev);
        }}
        disabled={todo.isCompleted}
      >
        {isEditing ? "📁" : "✏️"}
      </button>
      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => removeTodoItem(todo.id)}
      >
        ❌
      </button>
    </div>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired,
  }).isRequired,
};

export default TodoItem;
