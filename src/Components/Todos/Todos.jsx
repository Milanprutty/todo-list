import React, { useState } from "react";
import Input from "../Input/input";

import "../../App.css";

import MappedTodos from "./MappedTodos";

const Todos = ({
  handleCheck,
  handleEdit,
  handleDelete,
  handleAddItems,
  todos,
  setTodos,
}) => {
  return (
    <div className="todoContainer">
      <div>
        <Input addItems={handleAddItems} todos={todos} setTodos={setTodos} />

        <div className="mappedTodosContainer">
          <MappedTodos
            todos={todos}
            setTodos={setTodos}
            handleCheck={handleCheck}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default Todos;
