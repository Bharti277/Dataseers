import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const SingleTodo = ({ todo, todos, setTodos, index }) => {
  const [edit, setEdit] = useState(false);
  const [editTodo, setEditTodo] = useState(todo.todo);

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (e, id) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
      {(provided) => (
        <form
          onSubmit={(e) => handleEdit(e, todo.id)}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div>
            {edit ? (
              <input
                type="text"
                value={editTodo}
                onChange={(e) => setEditTodo(e.target.value)}
              />
            ) : (
              <span>{todo.todo}</span>
            )}

            <span
              onClick={() => {
                if (!edit && !todo.isDone) {
                  setEdit(!edit);
                }
              }}
            >
              <EditIcon fontSize="6" />
            </span>
            <span onClick={() => handleDelete(todo.id)}>
              <DeleteIcon fontSize="6" />
            </span>
          </div>
        </form>
      )}
    </Draggable>
  );
};

export default SingleTodo;
