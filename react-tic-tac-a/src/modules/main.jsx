const arrayEx = () => {
  const arrayRow = [0, 0, 0];
  const arrayCol = [0, 0, 0];

  arrayRow.map((row) => {
    const cols = arrayCol.map((col) => {
      // 한 라인의 button 만들기
    });
    // 각 라인의 컴포넌트 만들기
  });

  // script 를 이용해서 만들기
  const arrFuncCol = Array(3).fill(0);
  const arrFuncRow = Array(3).fill(arrFuncCol);

  const arrFucBox = Array(3).fill(Array(3).fill(0));
};

/**
 * 다차원 배열
 * 배열속에 요소가 배열로 이루어진 배열
 */

//   const RenderSquare =(props)=>{
// 	  const {squares} = props;
//   }
const RenderSquare = ({ squares, changeSquares }) => {
  // const squares = props.squares
  const arrayBox = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  const onButtonClick = (e) => {
    const index = e.target.dataset.index;
    changeSquares(index);
  };
  let index = 0;
  const buttons = arrayBox.map((subBox) => {
    const buttonCols = subBox.map(() => {
      // 한 라인의 button 만들기
      return (
        <button data-index={index} onClick={onButtonClick}>
          {squares[index++]}
        </button>
      );
    });
    // 각 라인의 컴포넌트 만들기
    return <div className="box_row">{buttonCols}</div>;
  });
  return buttons;
};

const winList = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const calcWinner_v1 = (squares) => {
  for (let i = 0; i < winList.length; i++) {
    // 배열의 분해, 배열의 비 구조화 코드
    const [a, b, c] = winList[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
      return squares[a];
  }
  return null;
};

const calcWinner = (squares) => {
  // const 결과 = 배열.map()
  // 결과의 개수와 배열의 개수가 항상 같다
  // 내용은 map의 return 결과에 따라 달라진다

  // const 결과 = 원본.filter()
  // 결과의 배열개수 <= 원본보다 작거나 같다
  // filter()의 return 이 true 일때만 결과에 배열을 추가한다

  // 코드에서 비교결과가 true 이면 return true 한것과 같고
  // win의 값이 rsult 에 담기게 된다
  // result는 개수가 없거나 1개인 배열이 된다
  const result = winList.filter((win) => {
    const [a, b, c] = win;
    return squares[a] && squares[a] === squares[b] && squares[a] === squares[c];
  });

  return result.length && squares[result[0][0]];
};
export { RenderSquare, calcWinner };
