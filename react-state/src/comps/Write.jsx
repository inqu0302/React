import React from "react";
import "./write.css";

/**
 * Write = ({bbs})=>{}
 *
 * 매개변수로 전달받은 변수중에서 bbs만 받겠다
 *
 * App.js 에서 전달받은 상태(bbsVO를 bbs 로 받음)는 전달받아서
 * 매개변수로 추출하는 순간 상태의 기능을 상실한다
 * 고정된(Read Only)형태의 props(properties)가 된다
 *
 * props가 된 변수 객체는 보여주는(UI)용도로 사용은 할수 있지만 값을
 * 변경하는 것은 불가능해진다
 * 값을 변경하려는 시도를 하면 오류가 발생한다
 *
 * 상태(변수, 객체)는 반드시 선언된 컴포넌트에서만 변경이 가능
 * 입력은 Write.js에서 실행하지만 입력된 데이터를 전파하기 위해서는
 * App.js 에서 상태를 변경할수 있도록 요청을 해야한다
 *
 * 이러한 기능을 해결하기 위해서 App.js 에서 상태를 변경하는 함수를 선언하고
 * 그 함수를 다시 하위(Write.js)컴포넌트에게 전달하여 대리 실행하도록 한다
 *
 * Write = ({bbs, onBBsChange}) 코드는
 * Write = ( props ) =>{
 * 	const {bbs, onBBsChange} = props
 * }
 * 와 같다
 */
const Write = ({ bbs, onBBsChange }) => {
  // bbs 변수 안의 객체들을 분리해서 설정
  // 분해를 했기때문에 요소 이름만으로도 사용가능
  const { b_date, b_time, b_writer, b_subject, b_content } = bbs;
  return (
    <div className="bbs_write_form">
      <div>
        <label>작성일자</label>
        <input
          name="b_date"
          type="date"
          defaultValue={b_date}
          onChange={onBBsChange}
        />
      </div>
      <div>
        <label>작성시각</label>
        <input
          name="b_time"
          type="time"
          defaultValue={b_time}
          onChange={onBBsChange}
        />
      </div>
      <div>
        <label>글쓴이</label>
        <input name="b_writer" defaultValue={b_writer} onChange={onBBsChange} />
      </div>
      <div>
        <label>제목</label>
        <input
          name="b_subject"
          defaultValue={b_subject}
          onChange={onBBsChange}
        />
      </div>
      <div>
        <label>내용</label>
        <input
          name="b_content"
          defaultValue={b_content}
          onChange={onBBsChange}
        />
      </div>
    </div>
  );
};

export default Write;
