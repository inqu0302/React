import React, { useState } from "react";
import { RenderSquare } from "../modules/main";

function Board() {
  const [squares, setSquares] = useState(Array(9).fill("A"));
  const changeSquares = (index) => {
    // squares 배열의 index 번째 요소의 값을 변경하려고 한다
    // 매개변수로 index을 가져온다
    // squares[index] = "B"; // 리액터에서는 절대 불가능

    // const _squares = squares
    // 배열을 다른 배열에 할당(저장)하면 배열의 값이 복제되지 않고
    // 배열이 저장된 저장소 위치가 복제된다
    // 결국 _squares와 squares는 같은 배열이다

    // 배열을 복제하는법
    // 전개연산자로 수행한다
    const _squares = [...squares]; // 배열 복제
    _squares[index] = _squares[index] === "A" ? "B" : "A"; // 복제된 배열의 요소 변경
    setSquares(_squares); // 복제된 배열을 원래 배열에 설정
  };
  // RenderSquare를 바닐라 함수로 불러 사용하는 방법
  // return <div>{RenderSquare()}</div>

  // Rendersquare를 컴포넌트로 사용하는 방법
  return (
    <div>
      <p>다음 플레이어 : O</p>
      <RenderSquare squares={squares} changeSquares={changeSquares} />
    </div>
  );
}

export default Board;
