import React, { useState } from "react";
import Todos from "./Todos";

const TodoCreator = () => {
  const [todos, setTodos] = useState([]);

  const getRandomId = () => {
    return crypto.randomUUID();
  };

  const handleAddItems = (item) => {
    const updatedItems = [
      ...todos,
      { id: getRandomId(), item, checked: false, editing: false },
    ];

    setTodos(updatedItems);
  };

  const handleDelete = (i) => {
    const updatedTodos = todos.filter((todo, index) => {
      return i !== index;
    });

    setTodos(updatedTodos);
  };

  const handleCheck = (id) => {
    const checkTodo = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, checked: !todo.checked };
      }
      return todo;
    });
    setTodos(checkTodo);
  };

  const handleEdit = (id) => {
    const checkEdit = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, editing: !todo.editing };
      }
      return todo;
    });
    setTodos(checkEdit);
  };

  return (
    <div>
      <Todos
        handleCheck={handleCheck}
        handleAddItems={handleAddItems}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  );
};

export default TodoCreator;
