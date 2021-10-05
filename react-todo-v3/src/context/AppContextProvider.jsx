import React, { useState, createContext, useContext, useRef } from "react";

/**
 * React Context API 기능을 활용하여
 * state를 관리하는 도구
 *
 * 다중 구조의 컴포넌트가 겹쳐있는 경우
 * state 를 전파하는 것이 매우 불편한 코들 작성될 수 있다
 *
 * 이때는 Context API를 활용하여
 * state와 공용으로 사용할 여러가지 함수를 Store에 보관하고
 * 필요한 곳에서만 useContext()를 사용하여 쉽게 getter 할 수 있도록
 * 도와주는 컴포넌트 이다
 *
 * Context를 생성하기
 * 생성된 Context에 state 등을 보관하고
 * uesContext() Hook 을 커스터 마이징 하여 손쉽게 사용할 수 있도록 하는
 * Context를 사용할 컴포넌트 들을 합성 패턴을 이용하여 관리 할 수있도록 한다
 */

// 컨텍스트 생성
const AppContext = createContext();

// 컨텍스트의 Store에 보관된 정보들을 추출하기 위한 Hook 함수 선언
export const useTodoContext = () => useContext(AppContext);

// Provider를 합성패턴으로 선언하여 필요한 곳에서 사용할 수 있도록 한다
function AppContextProvider({ children }) {
  // TODO 정보 1개를 보관할 state
  const [todo, setTodo] = useState({
    t_id: 0,
    t_text: "리액트",
    t_comp: false,
  });

  const [todoList, setTodoList] = useState([todo]);

  // Referrence 변수 선언하기
  const nextId = useRef(1);

  const onChange = (e) => {
    const t_text = e.target.value;
    // ES6 이후에는 객체에 값을 담을때
    // 객체의 키 이름과 같은 변수에 담긴 값을 담을때는
    // 키 이름을 한번만 사용해도 된다
    // {t_text : t_text} == {t_text}
    setTodo({ ...todo, t_text, t_id: nextId.current });
  };

  // 리스트에 추가하기
  const todoInsert = () => {
    setTodoList([...todoList, todo]);
    nextId.current++;
    todoClear();
  };

  // 입력창(input box) clear 하기
  const todoClear = () => {
    setTodo({ t_id: nextId.current, t_text: "", t_comp: false });
  };

  // 입력된 todo를 todoList에 추가하기
  const onClick = (e) => {
    todoInsert();
  };

  // 삭제버튼 클릭시
  const onDeleteClick = (e) => {
    if (window.confirm("삭제할까요?")) {
      // data-todo-id 로 값을 지정하고
      // 값을 호출할때는
      // dataset.todoId 로 호출한다
      const t_id = Number(e.target.dataset.todoId);

      // 배열중에서 t_id 가 같은 요소를 찾아서 삭제
      // todo리스트 내에서 t_id가 위의 t_id와 같지 않은 요소만 출력
      const _todoList = todoList.filter((todo) => todo.t_id !== t_id);
      setTodoList(_todoList);
      //   alert("삭제됨");
    }
  };

  // 입력박스에서 Enter키가 눌리면
  const onKeyPress = (e) => {
    //e.keyCode === 13
    if (e.key === "Enter") {
      todoInsert();
    } else if (e.key === "Escape") {
      todoClear();
    }
  };

  // 완료처리
  const onCompClick = (e) => {
    const t_id = Number(e.target.dataset.todoId);

    // 배열요소중에서 조건에 맞는 값이 있으면 그 값이 몇번째 요소인지
    // index값을 return 해준다
    const index = todoList.findIndex((todo) => todo.t_id === t_id);

    // index 값이 바르게 넘어오면
    if (index) {
      // 해당 요소만 추출하여 selectTodo에 담기
      const selectTodo = todoList[index];
      const _todoList = [...todoList];
      _todoList[index] = {
        ...selectTodo,
        t_comp: true,
      };

      setTodoList(_todoList);
    }
  };

  // context 에 한번에 담기위해 변수에 저장
  const propsData = {
    todo,
    todoList,
    onChange,
    onClick,
    onKeyPress,
    onDeleteClick,
    onCompClick,
  };

  return (
    <AppContext.Provider value={propsData}>{children}</AppContext.Provider>
  );
}

export default AppContextProvider;
