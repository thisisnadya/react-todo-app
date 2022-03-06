import React from "react";
import "./TodoList.css";

const TodoList = ({ text, todos, setTodos, todo }) => {
  const statusHandler = (e) => {
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

  return (
    <div className="form-check py-2">
      <input
        type="checkbox"
        className="form-check-input"
        onChange={statusHandler}
      />
      <label
        htmlFor="flexCheckDefault"
        className={`form-check-label todo-item ${
          todo.completed ? "complete" : ""
        }`}
      >
        {text}
      </label>
    </div>
  );
};

export default TodoList;
