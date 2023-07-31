import React from "react";
import EditInput from "../Input/EditInput";

const EditTodo = ({ todos, setTodos, i }) => {
  const handleEdit = (newText, id) => {
    const editedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, item: newText };
      }
      return todo;
    });

    setTodos(editedTodos);
  };

  return (
    <div>
      <EditInput handleEdit={handleEdit} todos={todos} i={i} />
    </div>
  );
};

export default EditTodo;
