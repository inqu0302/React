import React, { useContext } from "react";
import BookContext from "../context/BookContext";
import "../css/BookList.css";

function BookList() {
  const { bookList } = useContext(BookContext);

  // map을 사용하여 배열을 기준으로 컴포넌트 리스트 만들기
  const viewList = bookList.map((book, index) => {
    return (
      <tr key={book.b_id}>
        <td>{book.b_id}</td>
        <td colspan="4">{book.b_name}</td>
        <td>{book.b_genre}</td>
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>도서명</th>
          <th>장르</th>
        </tr>
      </thead>
      <tbody>{bookList}</tbody>
    </table>
  );
}

export default BookList;
