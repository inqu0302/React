/**
 * 다차원 배열
 * 배열속에 요소가 배열로 이루어진 배열
 */
const RenderSquare = () => {
  let index = 0;
  const arrayBox = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  const onClick = (e) => {
    let id = e.target.dataset.id;
    alert(id);
  };
  const buttons = arrayBox.map((subBox) => {
    const buttonCols = subBox.map(() => {
      // 한 라인의 button 만들기
      return (
        <button data-id={index} onClick={onClick}>
          {index++}
        </button>
      );
    });
    // 각 라인의 컴포넌트 만들기
    return <div className="box_row">{buttonCols}</div>;
  });
  return buttons;
};

export { RenderSquare };
