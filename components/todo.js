import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function JiraTodos() {
  const [todo, setTodo] = useState("");

  const todos = [{ todo: "Created" }, { todo: "update" }, { todo: "delete" }];

  const [todoList, setTodoList] = useState(todos);

  const [todoPending, setTodoPending] = useState([{ todo: "header" }]);

  const [todoCompleted, setTodoCompleted] = useState([{ todo: "footer " }]);

  const addTodo = (todo) => {
    const newTodos = [...todoList, { todo: todo }];
    setTodoList(newTodos);
  };

  const handleDeleteTask = (todoIndex) => {
    const newTodos = todoList.filter((_, index) => index !== todoIndex);
    setTodoList(newTodos);
  };

  const handleTodoPending = (todo) => {
    const newTodos = [...todoPending, { todo: todo }];
    setTodoPending(newTodos);
  };

  const handleDeletePending = (todoIndex) => {
    const newTodos = todoPending.filter((_, index) => index !== todoIndex);
    setTodoPending(newTodos);
  };

  const handleTodoFinished = (todo) => {
    console.log(todo);
    const newTodos = [...todoCompleted, { todo: todo }];
    setTodoCompleted(newTodos);
  };

  const handleDeleteFinished = (todoIndex) => {
    const newTodos = todoCompleted.filter((_, index) => index !== todoIndex);
    setTodoCompleted(newTodos);
  };

  // const handleCompleted = (index) => {
  //   const newTodos = [...todoList];
  //   newTodos[index].isCompleted = true;
  //   setTodoList(newTodos);
  // };

  const handleSubmit = (e) => {
    console.log("todo", todo);
    e.preventDefault();
    addTodo(todo);
    setTodo("");
  };

  return (
    <div className={styles.mainWrap}>
      <h2> Jira Tickets App </h2>

      <div className={styles.mainInputWrap}>
        <input
          type="text"
          placeholder="Jira task"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          validation="true"
        />

        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </div>

      <div className={styles.taskMainWrap}>
        {/* task created  */}
        <div className={styles.taskColumnWrapper}>
          <h3>Task</h3>
          {todoList &&
            todoList.length > 0 &&
            todoList.map((item, index) => (
              <div key={index} className={styles.taskWrap}>
                <p>{item.todo}</p>
                <button
                  type="button"
                  onClick={() => {
                    handleDeleteTask(index);
                    handleTodoPending(item.todo);
                  }}
                >
                  pending
                </button>
              </div>
            ))}
        </div>

        <hr style={{ padding: "0px", margin: "5px" }} />

        <div className={styles.taskColumnWrapper}>
          <h3>Pending</h3>
          <div>
            {todoPending &&
              todoPending.length > 0 &&
              todoPending.map((item, index) => (
                <div key={index} className={styles.taskWrap}>
                  <p>{item.todo}</p>
                  <button
                    type="button"
                    onClick={() => {
                      handleDeletePending(index);
                      handleTodoFinished(item.todo);
                    }}
                  >
                    Finished
                  </button>
                </div>
              ))}
          </div>
        </div>

        <hr style={{ padding: "0px", margin: "5px" }} />

        <div className={styles.taskColumnWrapper}>
          <h3>Finished </h3>

          {todoCompleted &&
            todoCompleted.length > 0 &&
            todoCompleted.map((item, index) => (
              <div key={index} className={styles.taskWrap}>
                <p>{item.todo}</p>
                <button
                  type="button"
                  onClick={() => handleDeleteFinished(index)}
                >
                  X
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
