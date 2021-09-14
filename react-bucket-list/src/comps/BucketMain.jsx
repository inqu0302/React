import React from "react";
import BucketInput from "./BucketInput";
import BucketList from "./BucketList";

function BucketMain() {
  const [bucketList, setbucketList] = useState([
    {
      b_id: 0,
      b_flag: 0,
      b_start_date: "2021-09-13",
      b_title: "리액트 정복",
      b_end_date: "",
      b_end_check: false,
      b_cancle: false,
    },
  ]);
  return (
    <div classname="w3-container-fluid">
      <BucketInput />
      {/* BuckList 컴포넌트에 bucketList 상태(변수) 전달하기 */}
      <BucketList bucketList={bucketList} />
    </div>
  );
}

export default BucketMain;
