import React from "react";
/**
 * 배열.map() { return 값} : 배열개수를 그대로 유지하면서 새로운 배열을 만들기
 *
 *
 * react에서 forEach()의 함수를 사용하여 컴포넌트 list를 만들때
 * 반드시 가장 바깥쪽 tag 에는 UNIQUE한 값으로 key를 설정해주어야 한다
 * map() 을 사용할때 두번째 매개변수를
 */
function TodoList({ todoList }) {
  const tdList = todoList.map((todo) => {
    return (
      <tr key={todo.t_id}>
        <td>{todo.t_id}</td>
        <td>{todo.t_date}</td>
        <td>{todo.t_text}</td>
      </tr>
    );
  });
  return (
    <table className="todo_list">
      <thead>
        <tr>
          <th>ID</th>
          <th>날짜</th>
          <th>TODO</th>
        </tr>
      </thead>
      <tbody>{tdList}</tbody>
    </table>
  );
}

export default TodoList;
