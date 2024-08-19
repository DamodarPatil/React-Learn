import { useState, useEffect } from "react";
import { TodoProvider } from "./contexts/TodoContext";
import { TodoForm, TodoItem } from "./components";

const App = () => {
  const [todoList, setTodoList] = useState([]);

  const addTodoItem = (newTodo) => {
    setTodoList((prevTodos) => [{ id: Date.now(), ...newTodo }, ...prevTodos]);
  };

  const updateTodoItem = (todoId, updatedTodo) => {
    setTodoList((prevTodos) =>
      prevTodos.map((todo) => (todo.id === todoId ? updatedTodo : todo))
    );
  };

  const removeTodoItem = (todoId) => {
    setTodoList((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  };

  const toggleTodoCompletion = (todoId) => {
    setTodoList((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === todoId ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todoList"));

    if (storedTodos && storedTodos.length > 0) {
      setTodoList(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <TodoProvider
      value={{
        todoList,
        addTodoItem,
        updateTodoItem,
        removeTodoItem,
        toggleTodoCompletion,
      }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todoList.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
};

export default App;
