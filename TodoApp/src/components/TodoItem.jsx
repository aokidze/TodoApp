import styles from "./css/design.module.css";
import deleteItem from "./assets/delete.svg";
import cursorPointer from "./assets/cursorpointer.svg";
import { useState } from "react";
export default function TodoItem({ item, todos, setTodos }) {
  const [lineThrough, setLineThrough] = useState(false);
  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo !== item));
  }
  function handleLineThrough() {
    setLineThrough(!lineThrough);
  }
  return (
    <div className={styles.TodosBlock}>
      <div className={styles.Todos}>
        <div
          onClick={handleLineThrough}
          style={{
            textDecoration: lineThrough ? "line-through" : "none",
            cursor: `url(${cursorPointer}), auto`,
          }}
          className={styles.Todo}
        >
          {item}
        </div>
        <button onClick={() => handleDelete(item)} className={styles.deletebtn}>
          <img src={deleteItem} />
        </button>
      </div>
    </div>
  );
}
