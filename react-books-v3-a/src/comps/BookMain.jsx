import React from "react";
import { Route } from "react-router-dom";
import BookInput from "./BookInput";
import { useState } from "react";
import BookContext from "../context/BookContext";

/**
 * 컴포넌트의 선택적 Rendering
 * 어떤 조건에 따라 컴포넌트를 보이거나 보이지 않도록 하는 방법
 * Navlink를 클릭했을때 선택적으로 화면을 보여주기
 */
function BookMain() {
  const [book, setBook] = useState({
    b_name: "리액터",
    b_genre: "IT",
  });

  const providerData = { book, setBook };
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
          여기는 list 화면
        </Route>
      </BookContext.Provider>
    </>
  );
}

export default BookMain;
