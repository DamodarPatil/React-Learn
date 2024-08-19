import { useContext, createContext } from "react";

export const TodoContext = createContext({
  todoList: [
    {
      id: 1,
      text: "Sample Todo",
      isCompleted: false,
    },
  ],
  addTodoItem: () => {},
  updateTodoItem: () => {},
  removeTodoItem: () => {},
  toggleTodoCompletion: () => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
