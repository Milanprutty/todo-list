import React from "react";
import EditTodo from "./EditTodo";
import {
  AiOutlineClose,
  AiFillCheckCircle,
  AiFillCloseCircle,
  AiFillEdit,
} from "react-icons/ai";
const MappedTodos = ({
  todos,
  setTodos,
  handleCheck,
  handleDelete,
  handleEdit,
}) => {
  const mappedTodos = todos.map((todo, i) => {
    return (
      <div
        key={i}
        className={`${
          todo.checked ? "checked" : "todoListContainer"
        } todoListContainer`}
      >
        <span className="todoItemSpan">{todo.item}</span>
        <div className="checkedDiv">
          {todo.checked ? (
            <div
              style={{ cursor: "pointer" }}
              onClick={() => handleCheck(todo.id)}
            >
              <AiFillCloseCircle />
            </div>
          ) : (
            <div
              style={{ cursor: "pointer" }}
              onClick={() => handleCheck(todo.id)}
            >
              <AiFillCheckCircle />
            </div>
          )}
          <div onClick={() => handleEdit(todo.id)}>
            <AiFillEdit style={{ cursor: "pointer" }} />
          </div>
          <AiOutlineClose
            style={{ cursor: "pointer" }}
            onClick={() => handleDelete(i)}
          ></AiOutlineClose>
        </div>
        {todo.editing ? (
          <EditTodo todos={todos} setTodos={setTodos} i={i} />
        ) : (
          ""
        )}
      </div>
    );
  });

  return <div>{mappedTodos}</div>;
};

export default MappedTodos;
