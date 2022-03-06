import React from "react";
import TodoList from "../TodoList/TodoList";

const Todos = ({ todos, setTodos, filteredTodos }) => {
  console.log(todos);
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
          />
        ))}
      </ul>
    </div>
  );
};

export default Todos;
