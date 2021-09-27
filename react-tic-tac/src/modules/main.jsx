/**
 * 다차원 배열
 * 배열속에 요소가 배열로 이루어진 배열
 */
const RenderSquare = ({ squares, changeSquares }) => {
  const arrayBox = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  const onClick = (e) => {
    const index = e.target.dataset.id;

    changeSquares(index);
    // alert(id);
  };
  let index = 0;
  const buttons = arrayBox.map((subBox) => {
    const buttonCols = subBox.map(() => {
      // 한 라인의 button 만들기
      return (
        <button data-id={index} onClick={onClick}>
          {squares[index++]}
        </button>
      );
    });
    // 각 라인의 컴포넌트 만들기
    return <div className="box_row">{buttonCols}</div>;
  });
  return buttons;
};

const calcWinner = (squares) => {
  if (
    (squares[0] && squares[0] === squares[1] && squares[0] === squares[2]) ||
    (squares[0] === squares[4] && squares[0] === squares[8]) ||
    (squares[0] === squares[3] && squares[0] === squares[6])
  ) {
    console.log(squares[0] + "승리");
    return squares[0];
  } else if (
    (squares[4] && squares[4] === squares[1] && squares[4] === squares[7]) ||
    (squares[4] === squares[5] && squares[4] === squares[3]) ||
    (squares[4] === squares[2] && squares[4] === squares[6])
  ) {
    console.log(squares[4] + "승리");
    return squares[4];
  } else if (
    (squares[8] && squares[8] === squares[7] && squares[8] === squares[6]) ||
    (squares[8] === squares[2] && squares[8] === squares[5])
  ) {
    console.log(squares[8] + "승리");
    return squares[8];
  }
  return null;
};

export { RenderSquare, calcWinner };
