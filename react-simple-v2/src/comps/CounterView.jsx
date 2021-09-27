import React from "react";

function CounterView({ number }) {
  const intNum = parseInt(number);

  return (
    <div>
      <div>
        {intNum} 와 20의 합 : {intNum + 20}
      </div>
      <div>
        {intNum} 와 8의 곱 : {intNum * 8}
      </div>
    </div>
  );
}

export default CounterView;
