import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const plus = (e) => {
    setCount(count + 1);
  };

  const minus = (e) => {
    setCount(count - 1);
  };
  return (
    <div>
      <div>카운트 : {count}</div>
      <button class-name="plus" onClick={plus}>
        증가
      </button>
      <button class-name="minus" onClick={minus}>
        감소
      </button>
    </div>
  );
};

export default Counter;
