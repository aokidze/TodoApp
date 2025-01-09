import { useState } from "react";
import TodoItem from "./TodoItem";
import "@fontsource/montserrat";
import BackgroundAnimation from "./Background";
import Header from "./Header";
import Form from "./Form";
import TodoList from "./TodoList";
import Indicators from "./Indicators";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <BackgroundAnimation />
      <Header />
      <Indicators todos={todos} />
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}
