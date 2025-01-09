import { useState } from "react";
import TodoItem from "./TodoItem";
export default function TodoList({ todos, setTodos }) {
  return (
    <div>
      {todos.map((item) => (
        <TodoItem key={item} item={item} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
}
