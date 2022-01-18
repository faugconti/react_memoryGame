import React from "react";

const RadioBox = ({ name, selectedItem, onChange }) => {
  const isChecked = name === selectedItem;

  return (
    <div>
      <input
        type="radio"
        name={name}
        id={name}
        value={name}
        onClick={onChange}
        checked={isChecked}
      />
      <label htmlFor={name}>{name}</label>
    </div>
  );
};

export default RadioBox;
