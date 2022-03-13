import React from "react";
import TodoList from "../TodoList/TodoList";

const Todos = ({ todos, setTodos, filteredTodos, status }) => {
  return (
    <div className="mt-4">
      <ul>
        {filteredTodos.map((todo) => (
          <TodoList
            todos={todos}
            todo={todo}
            setTodos={setTodos}
            key={todo.id}
            text={todo.text}
            status={status}
          />
        ))}
      </ul>
      <div className="d-flex justify-content-end">
        {filteredTodos.length !== 0 && status === "Completed" ? (
          <button className="btn btn-danger">delete all</button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Todos;
