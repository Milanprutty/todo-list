import React, { useState } from "react";

const Input = ({ todos, addItems }) => {
  const [currentItem, setCurrentItem] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (currentItem.length === 0) {
      return;
    }

    addItems(currentItem);
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
          placeholder="add to-do"
        />
      </form>
    </div>
  );
};

export default Input;
