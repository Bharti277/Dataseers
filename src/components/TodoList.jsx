import React from "react";
import SingleTodo from "./SingleTodo";
import { Droppable } from "react-beautiful-dnd";

const TodoList = ({ todos, setTodos, setCompletedTodos, completedTodos }) => {
  return (
    <div className="todolist__container">
      <Droppable droppableId="Todoslist">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <h2 className="active__task"> Active task</h2>
            {todos.map((todo, index) => (
              <SingleTodo
                index={index}
                todo={todo}
                key={todo.id}
                todos={todos}
                setTodos={setTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      <div>
        <Droppable droppableId="Completed">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <h2 className="completed__task">Completed task</h2>
              {completedTodos.map((todo, index) => (
                <SingleTodo
                  index={index}
                  todo={todo}
                  key={todo.id}
                  todos={completedTodos}
                  setTodos={setCompletedTodos}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </div>
  );
};

export default TodoList;
