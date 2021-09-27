import React from "react";

function CounterView({ number }) {
  const num = number;
  return (
    <div>
      <div>
        {num} 와 20의 합 : {num + 20}
      </div>
      <div>
        {num} 와 8의 곱 : {num * 8}
      </div>
    </div>
  );
}

export default CounterView;
