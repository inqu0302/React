import React, { useEffect, useState } from "react";
import { firestore } from "../config/BBSConfig";

function BBsMain() {
  const [bbsBody, setBBsBody] = useState([]);
  const firebaseFetch = () => {
    firestore
      .collection("bbs")
      .get()
      .then((bbsList) => {
        bbsList.forEach((bbs) => {
          const item = bbs.data();
          setBBsBody([
            ...bbsBody,
            <tr>
              <td>{item.b_date}</td>
              <td>{item.b_time}</td>
              <td>{item.b_write}</td>
              <td>{item.b_subject}</td>
            </tr>,
          ]);
        });
      });
  };

  // 화면이 열릴때 firebaseFetch를 실행해서 데이터를 가져오는 명령어
  useEffect(firebaseFetch, []);

  return (
    <table className="bbsMain">
      <thead className="table_head">
        <tr>
          <th>작성일자</th>
          <th>작성시각</th>
          <th>작성자</th>
          <th>제목</th>
        </tr>
      </thead>
      <tbody>{bbsBody}</tbody>
    </table>
  );
}

export default BBsMain;
