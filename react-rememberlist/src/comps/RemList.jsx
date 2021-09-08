import React from "react";
import { useState, useEffect, useCallback } from "react";
// JS 코드에서 전반적으로 사용되는 날짜, 시간을 관리하는 객체
import moment from "moment";
import UUID from "react-uuid";

// 리스트의 제목을 배열로 선언
const headArray = ["날짜", "시간", "기억할 일"];

// const rememberSampleData = {
//   r_id: "0001",
//   r_date: "2021-09-08",
//   r_time: "10:36:00",
//   r_remember: "나의 리멤버 리스트",
//   r_comp: false, // 완료 표식
// };

function RemList() {
  const rem_header = useCallback(() => {
    // 제목배열을 map()을 이용하여 forEach하기
    // th tag를 map 으로 만들어서 리턴하기
    return headArray.map((text) => {
      // 제목배열의 문자열을 포함하는 th tag를 생성하여 return 하기
      return <th key={UUID()}>{text}</th>;
    });
  }, []);

  /**
   * remeberList를 담을 배열을 satae(상태)로 선언하기
   */
  const [rememberList, setRememberList] = useState([]);
  const saveStorage = () => {
    console.log("EFFECT");

    // rememberList배열에 데이터가 있을때만 저장
    if (rememberList.length > 0) {
      // 객체배열 sort 하기
      // 배열.sort(compareFunction(p,n))
      // compareFunction 의 return 값에 따라서 배열의 위치가 교환된다
      // return == 1 : next가 앞으로, pre 가 뒤로이동
      // return == -1 : pre가 앞으로
      // return == 0 : 그대로
      // map(), filter()는 결과를 return 하여 다른 배열을 생성하지만
      // sort()는 자기자신을 변경한다

      rememberList.sort((pre, next) => {
        if (pre.r_comp && !next.r_comp) return -1;
        if (!pre.r_comp && next.r_comp) return 1;
        if (next.r_date > pre.r_date && next.r_time > pre.r_time) return 1;
      });

      // rememberList 객체 배열에 담긴 데이터를 JSON String 문자열로
      // 변환하여 JSON.stringify()
      // localStorage에 rememberList라는 이름으로 저장
      localStorage.rememberList = JSON.stringify(rememberList);
    }
  };

  // useEffect가 실행(호출)할 함수를 선언
  // 화면이 rendering 될때 한번만 호출되면 되는 함수
  // 하지만 react에 의해서 현재 화면이 보여질때마다 함수를 계속 다시생성한다
  // 계속 반복되면 메모리 등에 문제를 일으킬 수 있기때문에
  // useCallback()을 사용해서 이전에 한번이라도 만들어져 있으면
  // 그대로 재사용하게 된다
  const fetchCallback = useCallback(() => {
    // localStorage로부터 rememberList를 가져오기
    const remString = localStorage.rememberList;
    if (remString) {
      console.log("Fetch rememberList");
      const remJSON = JSON.parse(remString);
      setRememberList(remJSON);
    }
  }, []);

  // 확인할 상태가 없으면 최초에 rendering 시에만 한번 함수를 호출
  // 변화를 감시할 데이터(상태)가 없을때 == 처음 페이지를열때
  useEffect(fetchCallback, [fetchCallback]);

  // 화면에 rendering 이 발생할때 실행되는 public event 연결
  // 호출하거나 실행하지 않아도 조건에 만족하면 자동으로 실행
  // useEffect(함수명, 상태대상)
  useEffect(saveStorage, [rememberList]);

  /**
   * list중 한 요소를 더블클릭하면
   * 선택된 요소의 UUID값을 추출하여
   * 1. 해당 요소를 삭제하기
   * 2. 해당 요소의 r_comp 값을 완료된 것으로 표시하기
   */
  const trOnClick = (e) => {
    const td = e.target;
    if (td.tagName === "TD") {
      const uuid = td.closest("TR").dataset.uuid;
      //   alert(uuid);

      // 선택된 요소의 UUID 값이 담긴것만 빼고(filtering) 새로운 복제 리스트(_list) 만들기
      //   const _list = rememberList.filter((remember) => {
      //     return remember.r_id !== uuid;
      //   });

      const _list = rememberList.map((remember) => {
        if (remember.r_id === uuid) {
          return { ...remember, r_comp: !remember.r_comp };
        }
        return remember;
      });
      // filtering 된 _list를 rememberList로 바꾸기
      setRememberList([..._list]);
    }
  };
  const list_body = rememberList.map((remember) => {
    return (
      <tr
        key={remember.r_id}
        data-uuid={remember.r_id}
        className={remember.r_comp ? "comp" : ""}
        onDoubleClick={trOnClick}
      >
        <td>{remember.r_date}</td>
        <td>{remember.r_time}</td>
        <td>{remember.r_remember}</td>
      </tr>
    );
  });

  /**
   * input box입력을 하는 과정에서 Enter를 누르면
   * 데이터를 추가하기
   */
  const onKeyDown = (e) => {
    // 키보드로 입력후 Enter 를 누르면
    if (e.keyCode === 13) {
      // 입력되있는 문자열을 추출
      // 문자열은 input box의 value속성에 담겨있다
      // const value = e.target.value
      const { value } = e.target;
      //   alert("Enter" + value);

      // input box에 입력된 문자열을 rememberList에 담기위해 객체 생성
      const remember = {
        r_id: UUID(),
        // 시스템에서 날짜와 시간 문자열로 가져오기
        r_date: moment().format("YYYY[-]MM[-]DD"),
        r_time: moment().format("HH:mm:ss"),
        r_remember: value,
        r_comp: false,
      };

      // 생성된 remember 객체 데이터를 rememberList 상태에 추가하기
      // 기존의 rememberList를 새로운 배열(remember)로 바꾸는것
      // setRememberList(rememberList.concat(remember));
      setRememberList([...rememberList, remember]);
      e.target.value = "";
    }
  };

  return (
    <table className="rem_list">
      <thead>
        <tr>{rem_header()}</tr>
      </thead>
      <tbody>
        {list_body}
        <tr>
          <td colSpan="2">기억할일</td>
          <td>
            <input
              onKeyDown={onKeyDown}
              name="r_remember"
              placeholder="입력하시고 ENTER"
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default RemList;
