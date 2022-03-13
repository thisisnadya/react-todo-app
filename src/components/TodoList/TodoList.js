import React from "react";
import "./TodoList.css";

const TodoList = ({ text, todos, setTodos, todo, status }) => {
  const statusHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    );
  };

  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  return (
    <div>
      <div className="form-check my-2">
        <input
          type="checkbox"
          className="form-check-input"
          onChange={statusHandler}
          checked={todo.completed}
        />
        <label
          htmlFor="flexCheckDefault"
          className={`form-check-label todo-item ${
            todo.completed ? "complete" : ""
          }`}
        >
          {text}
        </label>
        <span className="material-icons text-right" onClick={deleteHandler}>
          {status === "Completed" ? "delete" : ""}
        </span>
      </div>
    </div>
  );
};

export default TodoList;
