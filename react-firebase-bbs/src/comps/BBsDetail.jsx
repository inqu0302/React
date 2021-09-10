import React, { useState, useEffect } from "react";
import {} from "firebase";
import { firestore } from "../config/BBSConfig";
import { useRouteMatch } from "react-router-dom";

function BBsDetail() {
  const match = useRouteMatch();
  const docId = match.params.id;
  const [bbs, setBBs] = useState({
    b_writer: "",
    b_subject: "",
    b_content: "",
    b_date: "",
    b_time: "",
  });
  const findByFetch = async () => {
    if (docId) {
      const result = await firestore.collection("bbs").doc(docId).get();
      setBBs(result.data());
    }
  };

  useEffect(findByFetch, []);
  return (
    <div className="detail">
      <div className="detail_head">
        <li>작성일자</li>
        <li>작성시각</li>
        <li>글쓴이</li>
        <li>제목</li>
        <li>내용</li>
      </div>
      <div calssName="detail_content">
        <li>{bbs.b_date}</li>
        <li>{bbs.b_time}</li>
        <li>{bbs.b_writer}</li>
        <li>{bbs.b_subject}</li>
        <li>{bbs.b_content}</li>
      </div>
    </div>
  );
}

export default BBsDetail;
