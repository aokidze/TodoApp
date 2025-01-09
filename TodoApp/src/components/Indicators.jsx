import styles from "./css/design.module.css";

export default function Indicators({ todos }) {
  return (
    <div>
      <div className={styles.ats}>
        <div style={{ width: "550px" }}>
          <div className={styles.AllTodoScore}>
            Всего задач : {todos.length}
          </div>
          ;
        </div>
      </div>
    </div>
  );
}
