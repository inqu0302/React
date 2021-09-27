import React, { useState } from "react";
import { RenderSquare, calcWinner } from "../modules/main";

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [oxFlag, setOxFlag] = useState(true);
  if (calcWinner(squares)) {
  }
  const changeSquares = (index) => {
    // squares 배열의 index 번째 요소의 값을 변경하려고 한다
    // 매개변수로 index을 가져온다
    // squares[index] = "B"; // 리액터에서는 절대 불가능

    if (calcWinner(squares)) {
      return;
    }

    // if(문자열 변수) : 문자열이 null, undefined 이면 false
    // squares[index]에 어떤 값(문자열)이 담겨있으면 진행하지 않는다
    if (squares[index]) return;
    // const _squares = squares
    // 배열을 다른 배열에 할당(저장)하면 배열의 값이 복제되지 않고
    // 배열이 저장된 저장소 위치가 복제된다
    // 결국 _squares와 squares는 같은 배열이다

    // 배열을 복제하는법
    // 전개연산자로 수행한다
    const _squares = [...squares]; // 배열 복제
    _squares[index] = oxFlag ? "O" : "X"; //_squares[index] === "A" ? "B" : "A"; // 복제된 배열의 요소 변경
    setSquares(_squares); // 복제된 배열을 원래 배열에 설정
    setOxFlag(!oxFlag);
  };
  // RenderSquare를 바닐라 함수로 불러 사용하는 방법
  // return <div>{RenderSquare()}</div>

  const restart_game = () => {
    // squars 배열을 초기화
    setSquares(Array(9).fill(null));
    // player 를 선택하는 flag 반전
    setOxFlag(!oxFlag);
  };

  // Rendersquare를 컴포넌트로 사용하는 방법
  const player = oxFlag ? "O" : "X";
  const winner = calcWinner(squares);
  const message = winner ? `승리자 : ${winner}` : `다음 플레이어 : ${player}`;
  return (
    <div>
      <p>{message}</p>
      <RenderSquare squares={squares} changeSquares={changeSquares} />
      {winner ? <h4 onClick={restart_game}>다시시작</h4> : ""}
    </div>
  );
}

export default Board;
