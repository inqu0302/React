import React, { useState } from "react";

import {} from "firebase";
import moment from "moment";
import { firestore } from "../config/BBSConfig";

// props 에서 history를 추출
/**
 * react-router-dom 을 사용하여 Routing을 구현하면
 * 메뉴에서 글쓰기를 클릭했을때 호출(Rendering)된 컴포넌트
 *
 * react-router-dom 은 매개변수로 history라는 변수를 전달
 * history변수는 routing과 관련된 변수이다
 *
 * history.push(URL) : URL로 redirect
 */
function BBsWrite({ history }) {
  const [bbs, setBBs] = useState({
    b_write: "",
    b_subject: "",
    b_content: "",
  });

  // onCahnge event 핸들러
  // 키보드로 입력한 데이터를 bbs 객체에 setting 하는 일을 수행
  const onChange = (e) => {
    const { value, name } = e.target;
    setBBs({ ...bbs, [name]: value });
  };

  const onClickSave = () => {
    // const str = JSON.stringify(bbs);
    // alert(str);

    const saveBBS = {
      ...bbs,
      b_date: moment().format("YYYY[-]MM[-]DD"),
      b_time: moment().format("HH:mm:ss"),
    };

    /**
     * firesotre 에 데이터 저장하기
     * add()를 사용하여 저장을 하면 only insert
     * doc(key).set을 병행하여 사용하면 Update Or Insert
     */
    firestore
      .collection("bbs")
      // .add(saveBBS)
      .doc()
      .set(saveBBS)
      .then((result) => {
        console.log(result);
        history.push("/");
      });
  };

  return (
    <div className="bbsWrite">
      <div>
        {/* tag cod 내에 작성하는 주성문 */}
        {/* 
		  	input tag의 onChange 이벤트 핸들러
			  input box에 데이터(문자열)를 입력하면
			  입력된 데이터를 상태(변수, 객체)에 보관하는 역할을 수행
		  */}
        <input
          type="text"
          name="b_write"
          onChange={onChange}
          placeholder="작성자"
        ></input>
      </div>
      <div>
        <input
          type="text"
          name="b_subject"
          onChange={onChange}
          placeholder="제목"
        ></input>
      </div>
      <div>
        <input
          type="text"
          name="b_content"
          onChange={onChange}
          placeholder="내용"
        ></input>
      </div>
      <div>
        <button onClick={onClickSave}>저장</button>
      </div>
    </div>
  );
}

export default BBsWrite;
