import React from "react";
import "./styles.css";
import { Todo } from "../components/model";
import SingleTodo from "./SingleTodo";
import { Droppable } from "react-beautiful-dnd";
interface props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList: React.FC<props> = ({ todos, setTodos }: props) => {
  return (
    <div className="container">
      <Droppable droppableId="TodosList">
        {(provided) => (
          <div
            className="todos"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todos__heading">Active Task</span>
            {todos.map((todo) => (
              <SingleTodo todo={todo} todos={todos} setTodos={setTodos} />
            ))}
          </div>
        )}
      </Droppable>
      {/* <div>
        <h1>There will be completed task</h1>
      </div> */}
      {/* <Droppable droppableId="TodosRemove">
        {(provided) => (
          <div
            className="todos remove"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todos__heading">Completed Task</span>
            {todos.map((todo) => (
              <SingleTodo todo={todo} todos={todos} setTodos={setTodos} />
            ))}
          </div>
        )}
      </Droppable> */}
    </div>
  );
};

export default TodoList;
