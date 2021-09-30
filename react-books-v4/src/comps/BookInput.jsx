import "../css/BookInput.css";
import { useRef } from "react";
import BookView from "./BookView";
import MyButtons from "../My/MyButtons";
import { useBookContext } from "../context/AppContextProvider";

function BookInput() {
  const { book, setBook, bookList, setBookList } = useBookContext();

  /**
   * react에서 일반적으로 선언된 변수는
   * 실제 화면전체가 변경되지 않더라도
   * 	화면 전체가 변경 : refresh
   * 	react는 화면을 refresh 하지 않고 rendering 한다
   *	데이터(state)가 변경 되었을때만 reRendering
   * 	변수는 무조건 초기화 되어버린다
   *
   * 초기화 되는 것을 방지하면서 현재 화면에서 어떤 변수(public 변수)의
   * 값을 유지하고 싶을때가 있다
   *
   * 그래서 referrence 변수로 선언을 해주어야 한다
   * 1. 화면이 refresh 되지 않는 상태에서 어떤 변수를 보관하고 싶을때
   * const 변수명 = useRef(초기값)
   *
   * 2. (주로) input box와 같은 특정 tag 요소를 일반적인 HTML JS처럼
   * 	핸들링 하고 싶을때 Ref 변수를 선언하고
   * 	컴포넌트 요소에 ref 속성에 해당 변수를 설정
   *
   * 	이때는 매개변수가 없거나 null 로 설정해야 한다
   *
   * const 변수명 = useRef();
   * const 변수명 = useRef(null);
   *
   * 사용시
   * <input ref={변수명} />
   *
   * 코드에서 핸들링 할때는
   * 변수명.current.함수() 처럼 핸들링
   */
  const nextId = useRef(0);
  const nameId = useRef();
  const genreId = useRef();
  /**
   * nextId 라는 변수를 만들고 입력창에 값이 입력되면
   * nextId 를 id에 저장하기
   */
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value, b_id: nextId.current });
  };

  const bookInsert = async () => {
    if (book.b_name === "") {
      alert("도서명을 입력해주세요");
      nameId.current.focus();
      return;
    }

    if (book.b_genre === "") {
      alert("장르를 입력해주세요");
      genreId.current.focus();
      return;
    }
    await setBookList([...bookList, book]);

    // Ref로 선언된 변수의 current 요소를 1증가하여
    // 다음번 list의 id 로 사용한다
    nextId.current++;

    /**
     * 리스트에 추가후 book state를 초기화 하여 입력창에 입력된 내용 삭제
     * 이 기능을 사용하려면 반드시 input box value 를 사용해야 한다
     */
    await setBook({ b_id: "", b_name: "", b_genre: "" });
  };

  return (
    <>
      <div className="book_input">
        <div>
          <label>도서명</label>
          <input
            name="b_name"
            ref={nameId}
            value={book.b_name}
            onChange={onChangeHandler}
          />
        </div>
        <div>
          <label>장르</label>
          <input
            name="b_genre"
            ref={genreId}
            value={book.b_genre}
            onChange={onChangeHandler}
          />
        </div>
        <MyButtons onClick={bookInsert}>리스트 추가</MyButtons>
      </div>
      <BookView />
    </>
  );
}

export default BookInput;
