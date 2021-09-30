import "../css/BookList.css";
import BookItem from "./BookItem";

function BookList() {
  return (
    <table className="book_list">
      <thead>
        <tr>
          <th>ID</th>
          <th>도서명</th>
          <th>장르</th>
        </tr>
      </thead>
      <tbody>
        <BookItem />
      </tbody>
    </table>
  );
}

export default BookList;
