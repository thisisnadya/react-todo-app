import React from "react";
import "./TodoInput.css";

const TodoInput = ({ setTodoInput, todoInput, setTodos, todos, setStatus }) => {
  const inputHandler = (e) => {
    setTodoInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text: todoInput,
        completed: false,
        id: Math.random() * 1000
      }
    ]);
    setTodoInput("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.innerHTML);
  };

  return (
    <div>
      <div>
        <ul
          className="filters d-flex justify-content-evenly mt-4"
          onClick={statusHandler}
        >
          <li>All</li>
          <li>Active</li>
          <li>Completed</li>
        </ul>
      </div>
      <hr />
      <form className="d-flex justify-content-between" onSubmit={submitHandler}>
        <input
          type="text"
          className="form-control input p-3"
          placeholder="add details"
          value={todoInput}
          onChange={inputHandler}
        />
        <button className="btn btn-primary py-2 px-5">Add</button>
      </form>
    </div>
  );
};

export default TodoInput;