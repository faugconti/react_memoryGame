import React from "react";

const STEP = 2;

const Counter = ({ cardsCount, onClick }) => {
  const onDecrement = (e) => {
    e.preventDefault();
    const number = cardsCount - STEP;
    if (number >= 2) onClick(number);
  };
  const onIncrement = (e) => {
    e.preventDefault();
    const number = cardsCount + STEP;
    if (number <= 160) onClick(number);
  };
  return (
    <div>
      <button onClick={onDecrement}>-</button>
      <span>{cardsCount}</span>
      <button onClick={onIncrement}>+</button>
    </div>
  );
};

export default Counter;
