import "./styles.css";
import TodoInput from "./components/TodoInput/TodoInput";
import Todos from "./components/Todos/Todos";
import { useEffect, useState } from "react";

export default function App() {
  // states
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("All");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);

  // use effect
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  //functions
  const filterHandler = () => {
    switch (status) {
      case "Completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "Active":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  // save to local
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  return (
    <div className="App container">
      <header>
        <h1 className="header text-center mt-3">#todo</h1>
      </header>
      <TodoInput
        todoInput={todoInput}
        setTodoInput={setTodoInput}
        setTodos={setTodos}
        todos={todos}
        setStatus={setStatus}
        status={status}
      />
      <Todos
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
        status={status}
      />
    </div>
  );
}
