import React from "react";
import { Route } from "react-router-dom";
import BookInput from "./BookInput";
import BookList from "./BookList";
import { useState } from "react";
import UUID from "react-uuid";

/**
 * 컴포넌트의 선택적 Rendering
 * 어떤 조건에 따라 컴포넌트를 보이거나 보이지 않도록 하는 방법
 * Navlink를 클릭했을때 선택적으로 화면을 보여주기
 */
function BookMain() {
  const [book, setBook] = useState({
    b_id: UUID(),
    b_name: "리액터",
    b_genre: "IT",
  });

  const [bookList, setBookList] = useState([]);

  // 상위 컴포넌트에서 이벤트를 생성하고 하위 컴포넌트로 전달할때는
  // 반드시 e(event) 매개변수를 포함하는것이 좋다
  const onClick = (e) => {
    alert("onClick");
  };

  // 데이터 종류에 관계없이 함수도 같이 전송가능
  const providerData = { book, setBook, bookList, setBookList, onClick };
  /**
   * 가장 바깥쪽 tag 는 이름을 지워도 상관없음
   */
  return (
    <>
      <BookContext.Provider value={providerData}>
        <Route path="/" exact>
          여기는 Home 화면
        </Route>
        <Route path="/insert" exact>
          <BookInput />
        </Route>
        <Route path="/list" exact>
          <BookList />
        </Route>
      </BookContext.Provider>
    </>
  );
}

export default BookMain;
