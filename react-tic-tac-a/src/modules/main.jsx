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

export { RenderSquare };
