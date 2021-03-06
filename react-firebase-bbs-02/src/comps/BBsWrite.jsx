import React, { useState, useEffect, useCallback } from "react";

import {} from "firebase";
import moment from "moment";
import { firestore } from "../config/BBSConfig";
import { useHistory, useRouteMatch } from "react-router-dom";

// props 에서 history를 추출
/**
 * react-router-dom 을 사용하여 Routing을 구현하면
 * 메뉴에서 글쓰기를 클릭했을때 호출(Rendering)된 컴포넌트
 *
 * react-router-dom 은 매개변수로 history라는 변수를 전달
 * history변수는 routing과 관련된 변수이다
 *
 * history.push(URL) : URL로 redirect
 *
 * react-router-dom 최신버전에서는
 * 매개변수를 지정하지 않고 use 함수를 사용하여 history 를 사용할 수 있다
 *
 * react 에서 use 로 시작되는 함수들은 Hook함수라고 한다
 * Hook 함수 : 가로채기 함수, 시스템(react)에 의해서
 * 자동으로 실행되거나, 작동되는 일을 수행한다
 */
function BBsWrite() {
  const history = useHistory();
  // useRouteMatch()
  // URL을 통해서 전달된 데이터들
  // queryString, pathVarriable
  // ?변수=값   , /URL/값
  const match = useRouteMatch();
  // /write/:id 로 설정된 Route에서
  // id 위치에 담긴 변수 값 가져오기
  const docId = match.params.id;
  const [bbs, setBBs] = useState({
    b_writer: "",
    b_subject: "",
    b_content: "",
    b_date: "",
    b_time: "",
  });
  const findByFetch = useCallback(async () => {
    if (docId) {
      const result = await firestore.collection("bbs").doc(docId).get();
      setBBs(result.data());
    }
  }, [docId]);

  useEffect(findByFetch, [findByFetch]);

  // onCahnge event 핸들러
  // 키보드로 입력한 데이터를 bbs 객체에 setting 하는 일을 수행
  const onChange = (e) => {
    const { value, name } = e.target;
    setBBs({ ...bbs, [name]: value });
  };

  const onClickSave = () => {
    // const str = JSON.stringify(bbs);
    // alert(str);

    // bbs데이터를 복제하면서 값이없으면
    // b_date, b_time 칼럼을 추가
    // b_date, b_time에 값이 있으면 그대로 사용하겠다
    const saveBBS = {
      ...bbs,
      b_date: bbs.b_date || moment().format("YYYY[-]MM[-]DD"),
      b_time: bbs.b_time || moment().format("HH:mm:ss"),
    };

    /**
     * firesotre 에 데이터 저장하기
     * add()를 사용하여 저장을 하면 only insert
     * doc(key).set을 병행하여 사용하면 Update Or Insert
     */
    firestore
      .collection("bbs")
      // .add(saveBBS)
      .doc(docId)
      .set(saveBBS)
      .then((result) => {
        console.log(result);
        history.push("/");
      });
  };

  return (
    <div className="bbsWrite">
      <div>
        {/* tag cod 내에 작성하는 주석문 */}
        {/* 
		  	input tag의 onChange 이벤트 핸들러
			  input box에 데이터(문자열)를 입력하면
			  입력된 데이터를 상태(변수, 객체)에 보관하는 역할을 수행
		  */}
        <input
          type="text"
          name="b_writer"
          onChange={onChange}
          placeholder="작성자"
          defaultValue={bbs.b_writer}
        />
      </div>
      <div>
        <input
          type="text"
          name="b_subject"
          onChange={onChange}
          placeholder="제목"
          defaultValue={bbs.b_subject}
        />
      </div>
      <div>
        <input
          type="text"
          name="b_content"
          onChange={onChange}
          placeholder="내용"
          defaultValue={bbs.b_content}
        />
      </div>
      <div>
        <button onClick={onClickSave}>저장</button>
      </div>
    </div>
  );
}

export default BBsWrite;
