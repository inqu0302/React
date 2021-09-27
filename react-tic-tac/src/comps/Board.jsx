import React, { useState } from "react";
import { RenderSquare, calcWinner } from "../modules/main";

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [oxFlag, setOxFlag] = useState(true);

  const changeSquares = (index) => {
    if (calcWinner(squares)) {
      return;
    }

    if (squares[index]) return;

    const _squares = [...squares];
    _squares[index] = oxFlag ? "O" : "X";
    setSquares(_squares);
    setOxFlag(!oxFlag);
  };

  const clickReset = (e) => {
    const _squares = Array(9).fill(null);
    setSquares(_squares);
    setOxFlag(!oxFlag);
  };

  const winner = calcWinner(squares) ? (
    <h3 onClick={clickReset}>
      {calcWinner(squares)} 의 승리입니다
      <br /> 다시시작
    </h3>
  ) : (
    <h3>게임 진행중</h3>
  );

  const player = oxFlag ? "O" : "X";
  return (
    <div>
      <p>이번 플레이어 : {player}</p>
      <RenderSquare squares={squares} changeSquares={changeSquares} />
      {winner}
    </div>
  );
}

export default Board;
