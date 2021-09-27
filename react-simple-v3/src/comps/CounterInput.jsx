import React from "react";

function CounterInput({ setNumber }) {
  const onChange = (e) => {
    const inputNum = e.target.value;
    setNumber(inputNum);
  };
  return (
    <div>
      <input placeholder="숫자를 입력하세요" onChange={onChange} />
    </div>
  );
}

export default CounterInput;
