import React from "react";
import "./TodoInput.css";

const TodoInput = ({
  setTodoInput,
  todoInput,
  setTodos,
  todos,
  setStatus,
  status
}) => {
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
          className="filters d-flex justify-content-between mt-4"
          onClick={statusHandler}
        >
          {["All", "Active", "Completed"].map((key) => (
            <li key={key} className={key === status ? "selected" : ""}>
              {key}
            </li>
          ))}
        </ul>
      </div>
      <hr />
      <form
        className="d-flex justify-content-around text-center mt-4"
        onSubmit={submitHandler}
      >
        <input
          type="text"
          className="form-control input p-4"
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
