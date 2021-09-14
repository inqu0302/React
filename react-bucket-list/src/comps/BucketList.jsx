import React from "react";
import BucketItem from "./BucketItem";

function BucketList() {
  return (
    <table className="w3-table w3-table-all w3-margin">
      <thead>
        <tr>
          <th>FLAG</th>
          <th>날짜</th>
          <th>BUCKET</th>
          <th>완료</th>
          <th>취소</th>
        </tr>
      </thead>
      <tbody>
        <BucketItem />
      </tbody>
    </table>
  );
}

export default BucketList;
