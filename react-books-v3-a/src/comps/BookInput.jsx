import React, { useContext } from "react";
import BookContext from "../context/BookContext";
import "../css/BookInput.css";
import BookView from "./BookView";
import MyButtons from "../My/MyButtons";

function BookInput() {
  const { book, setBook } = useContext(BookContext);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };
  return (
    <>
      <div className="book_input">
        <div>
          <label>도서명</label>
          <input name="b_name" value={book.b_name} onChange={onChangeHandler} />
        </div>
        <div>
          <label>장르</label>
          <input
            name="b_genre"
            value={book.b_genre}
            onChange={onChangeHandler}
          />
        </div>
        <MyButtons onClick={() => alert("안녕하세요")}>리스트 추가</MyButtons>
      </div>
      <BookView />
    </>
  );
}

export default BookInput;
