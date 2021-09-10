import React, { useEffect, useState } from "react";
import { firestore } from "../config/BBSConfig";
import { useHistory } from "react-router-dom";

function BBsMain() {
  const router = useHistory();
  const [bbsData, setBBsData] = useState([]);
  const firebaseFetch = async () => {
    /**
     * 칼럼으로 정렬하기
     * collection("").orderBy("칼럼명") 칼럼을 기준으로 오름차순 정렬
     * collection("").orderBy("칼럼명","desc") 칼럼을 기준으로 내림차순 정렬
     *
     * collection("").where() 조건지정이 가능
     * 조건 지정시 부등호(<,>) 가 들어가는 조건을 부여하면 반드시 해당칼럼을
     * 먼저 정렬해주어야 한다
     *
     * collection.orderBy("b_date").where("b_date > '2021-09-01' ")
     *
     * orderBy() 두개이상의 칼럼에 지정할 경우
     * firestore 콘솔에서 복합색인을 추가해 주어야 한다
     *
     * orderBy("b_subject")
     * 만약 일부데이터에 b_subject칼럼의 데이터가 없으면 (null 등)
     * 해당 데이터는 리스트에 나오지 않는다
     *
     * orderBy로 지정하는 칼럼은 무조건 not null 이어야 한다
     */
    const result = await firestore
      .collection("bbs")
      .orderBy("b_date", "desc") // b_date 칼럼을 기준으로 내림차순 정렬
      .orderBy("b_time", "desc") // b_time 칼럼을 기준으로 내림차순 정렬
      .get();

    /**
     * firestore로 부터 수신된 데이터중에서
     * 실제 BBS 데이터 객체만 추출하여 bbsList 배열로 만들기
     */
    const bbsList = result.docs.map((doc) => {
      const id = doc.id;
      // {...객체, 칼럼: 값}
      // 객체에 담긴 데이터를 펼치고 복제하여 return 을 수행
      // return 하기 전에 id 칼럼을 추가하고 거기에 id 변수를 추가
      return { ...doc.data(), id: id };
    });
    setBBsData(bbsList);
  };
  useEffect(firebaseFetch, []);

  const bbsBody = bbsData.map((bbs) => {
    return (
      <tr
        key={bbs.id}
        data-id={bbs.id}
        onClick={(e) => {
          const id = e.target.closest("TR").dataset.id;
          //   alert("클릭" + id);

          // write URL 에 id 값을 가지고 redirect를 수행
          // push == redirect
          router.push(`/write/${id}`);
        }}
      >
        <td>{bbs.b_date}</td>
        <td>{bbs.b_time}</td>
        <td>{bbs.b_writer}</td>
        <td>{bbs.b_subject}</td>
      </tr>
    );
  });

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
