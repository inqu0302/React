import React from "react";

function BucketMain() {
  return (
    <div className="bucket_main">
      <input
        className="input"
        type="text"
        placeholder="하고싶은 일을 입력해주세요"
      ></input>
      <table className="bucket_list">
        <tr>
          <th>FLAG</th>
          <th>날짜</th>
          <th>BUCKET</th>
          <th>완료</th>
          <th>취소</th>
        </tr>
        <tr>
          <td>샘플</td>
          <td>샘플</td>
          <td>샘플</td>
          <td>샘플</td>
          <td>샘플</td>
        </tr>
      </table>
    </div>
  );
}

export default BucketMain;
