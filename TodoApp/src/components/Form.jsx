import styles from "./css/design.module.css";
import sendIcon from "./assets/send.svg";
import { useState } from "react";

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState("");
  function handleSend(e) {
    e.preventDefault();
    if (todo.length !== 0) {
      setTodos([...todos, todo]);
    }
    setTodo("");
  }
  return (
    <form onSubmit={handleSend} className={styles.FormTodo}>
      <div className={styles.bls}>
        <input
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          value={todo}
          className={styles.InputTodo}
        />
      </div>
      <button type="submit" className={styles.sendTodo}>
        <img src={sendIcon} />
      </button>
    </form>
  );
}
