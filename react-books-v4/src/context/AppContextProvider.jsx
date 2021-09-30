import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

/**
 * Hook 함수
 * react 에서 state rendering 등을 관리하기 위한 함수 들
 * use 로 시작되는 함수들
 * useState(), useEfect(), useCallback, useContext
 *
 * react 초기에는 class 방식으로 코딩을 했다
 * 기존의 JS코드와 문법적으로 달라서 함수방식을 도입하게 되었다
 *
 * class 방식에서는 기본적으로 제공하는 method 가 10가지가 있다
 * 이 method를 react에서는 lifeCycle method라고 불렀다
 * 프로젝트가 시작될때, rendering 이 시작될때, rendering 이 완료되었을대
 * 현재 화면이 닫힐때 등등 상황에서 event를 일으키고 상황에 맞게
 * react의 기능을 바꾸는 역할을 수행
 *
 * class 방식의 method 를 함수방식의 react 에서 구현
 * ==> Hook 함수들
 */

// user Hook
// react에서 기본적으로 제공하는 hook()을 커스터마이징
// useContext()는 초기에 생성한 Context를 항상 import 하여
// 매개변수로 전달해야 한다
// AppContext에 직접 접근할수 있는 곳에서 useContext(Context)를 실행하여
// 매개변수를 지정하지 않아도 사용할 수 있도록 변경한 Hook

// Hook은 무조건 use 로 시작해야 한다
// Camle Case로 이름을 정해야 한다
export const useBookContext = () => {
  return useContext(AppContext);
};

/**
 * 합성패턴을 사용하여 Context를 upgrade 하기
 * 1. State를 생성하고 관리(setState)할  컴포넌트의 주요 코드를 이곳으로 이동
 * 2. createContext()를 사용하여 Context를 하나 생성
 * 3. <Context.Provider > 로 시작되는 컴포넌트 코드로 변경
 * 4. 컴포넌트 함수의 매개변수에 {children}을 추가
 * 5. 컴포넌트 body 에 {children}을 포함한다
 */
function AppContextProvider({ children }) {
  const [book, setBook] = useState({
    b_id: 0,
    b_name: "",
    b_genre: "",
  });

  const [bookList, setBookList] = useState([]);

  const providerData = { book, setBook, bookList, setBookList };

  return (
    <>
      <AppContext.Provider value={providerData}>{children}</AppContext.Provider>
    </>
  );
}

export default AppContextProvider;
