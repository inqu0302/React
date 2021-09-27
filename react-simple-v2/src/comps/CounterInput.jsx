import React from "react";

function CounterInput({ setNumber }) {
  const onChangeHandler = (e) => {
    const number = e.target.value;
    console.log(number);
    setNumber(number);
  };
  return (
    <div>
      <input placeholder="숫자 입력" onChange={onChangeHandler} />
    </div>
  );
}

export default CounterInput;
