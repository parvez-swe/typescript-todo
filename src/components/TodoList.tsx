import React from "react";
import "./styles.css";
import { Todo } from "../components/model";
import SingleTodo from "./SingleTodo";
interface props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList: React.FC<props> = ({ todos, setTodos }: props) => {
  return (
    <div className="container">
      <div className="todos">
        <span className="todos__heading">Active Task</span>
        {todos.map((todo) => (
          <SingleTodo todo={todo} todos={todos} setTodos={setTodos} />
        ))}
      </div>
      <div className="todos remove">
        <span className="todos__heading">Completed Task</span>
        {todos.map((todo) => (
          <SingleTodo todo={todo} todos={todos} setTodos={setTodos} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
