import React, { useState } from "react";

const EditInput = ({ handleEdit, todos, i }) => {
  const [currentItem, setCurrentItem] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (currentItem.length === 0) {
      return;
    }

    handleEdit(currentItem, todos[i].id);

    setCurrentItem("");
  };

  const handleChange = (event) => {
    setCurrentItem(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={currentItem}
          onChange={handleChange}
          type="text"
          placeholder="edit to-do"
        />
      </form>
    </div>
  );
};

export default EditInput;
