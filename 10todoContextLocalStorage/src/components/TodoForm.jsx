import { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

const TodoForm = () => {
  const [todoText, setTodoText] = useState("");

  const { addTodoItem } = useTodo();

  const handleAddTodo = (e) => {
    e.preventDefault();

    if (!todoText) return;

    addTodoItem({ text: todoText, isCompleted: false });
    setTodoText("");
  };

  return (
    <form onSubmit={handleAddTodo} className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
