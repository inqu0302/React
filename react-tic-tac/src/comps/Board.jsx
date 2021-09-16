import React, { useState } from "react";
import { RenderSquare } from "../modules/main";

function Board() {
  const [squares, setSquares] = useState(Array(9).fill("A"));
  return (
    <div>
      <p>다음 플레이어 : O</p>
      <RenderSquare squares={squares} />
    </div>
  );
}

export default Board;
