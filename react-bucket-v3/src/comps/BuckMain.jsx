import React, { useState, useEffect, useCallback } from "react";
import BuckList from "./BuckList";
import BuckInput from "./BuckInput";
import uuid from "react-uuid";
import moment from "moment";

function BuckMain() {
  // 버킷리스트를 담을 배열
  const [bucketList, setBuckList] = useState([]);
  // db에 update할 state
  const [saveBucket, setSaveBucket] = useState({});

  const bucketFetch = useCallback(async () => {
    const res = await fetch("http://localhost:5000/api/get");
    const bucketList = await res.json();
    // console.log("BUCKET");
    setBuckList(bucketList);
  }, []);

  useEffect(bucketFetch, [bucketFetch]);

  const buck_insert = async (bucket_text) => {
    // 저장할 데이터를 생성하고
    const bucket = {
      b_id: uuid(),
      b_start_date: moment().format("YYYY[-]MM[-]DD HH:mm:ss"),
      b_title: bucket_text,
      b_flag: 0,
      b_end_date: "",
      b_end_check: false,
      b_cancel: false,
    };
    // 화면에 보여질 리스트에 추가
    // 원래있던 bucketList에 새로운 bucket을 추가하기
    await setBuckList([...bucketList, bucket]);

    const fetch_option = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bucket),
    };
    await fetch("http://localhost:5000/api/bucket", fetch_option);
    await bucketFetch();
  };

  const putBucket = async () => {
    console.log(saveBucket);
    const putFetchOption = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(saveBucket),
    };
    const result = await fetch(
      "http://localhost:5000/api/bucket",
      putFetchOption
    );
    console.log(result.json());
  };
  useEffect(putBucket, [saveBucket]);

  // 리스트에서 FLAG항목을 클릭하면 실행할 함수
  const flag_change = (id) => {
    const _bucketList = bucketList.map((bucket) => {
      /**
       * 전달받은 id와 같은 항목의 flag를 1 증가시키기
       */
      if (bucket.b_id === id) {
        const _temp = { ...bucket, b_flag: bucket.b_flag + 1 };
        setSaveBucket(_temp);
        return _temp;
      } else {
        return bucket;
      }
    });
    // 원래의 bucketList를 _bucketList로 바꾸기
    setBuckList(_bucketList);
  };

  /*
  int[] nums = {1,2,3,4,5,6,7}
  for(int i = 0 ; i < nums.length ; i++) {
	  if(nums[i] == 3) {
		  break;
	  }
  }
 */

  // 리스트에서 input box에 버킷을 변경한 후 Enter를 누르면
  // 실행할 함수
  const bucket_update = (id, title) => {
    const _bucketList = bucketList.map((bucket) => {
      if (bucket.b_id === id) {
        // b_id가 id값과 같으면
        // bucket에 담긴 항목중에서 b_title 항목만
        // 변경하여 통째로 return
        const _temp = { ...bucket, b_title: title };
        setSaveBucket(_temp);
        return _temp;
      } else {
        // b_id가 id와 같지 않으면
        // 아무것도 변경없이 bucket을 그대로 return
        return bucket;
      }
    });
    // 원래의 list를 새로운 list로 바꾸기
    setBuckList(_bucketList);
  };

  /**
   * JS에서
   * 문자열 변수에 담긴 값이 "" 이거나 null이거나 undefined이거나
   * 숫자형 변수에 담긴 값이 0 이거나 NaN(숫자가 아니다) 이러한 값이면
   *
   * 변수와 함께 논리연산자가 묶였을때
   *
   * 예)
   * let 변수 = ""
   * 변수 || 와 같은 코드를 만나면 false 가 된다
   *
   * 변수 = 변수 || "대한민국" 과같은 코드가 실행이되면
   * 변수에 담긴 값이 없으면 변수에 대한민국이라는 문자열을 담고 변수에 값이있다면
   * 변수에 값이 그대로 유지가 된다
   */

  const bucket_complet = (id) => {
    const _bucketList = bucketList.map((bucket) => {
      if (bucket.b_id === id) {
        const _temp = {
          ...bucket,
          b_end_date: bucket.b_end_check
            ? ""
            : moment().format("YYYY[-]MM[-]DD HH:mm:ss"),
          b_end_check: !bucket.b_end_check,
        };
        setSaveBucket(_temp);
        return _temp;
        //  {
        //   ...bucket,
        //   b_end_date: bucket.b_end_check
        //     ? ""
        //     : moment().format("YYYY[-]MM[-]DD HH:mm:ss"),
        //   b_end_check: !bucket.b_end_check,
        // };
      } else {
        return bucket;
      }
    });
    setBuckList(_bucketList);
  };

  const bucket_cancel = (id) => {
    const _bucketList = bucketList.map((bucket) => {
      if (bucket.b_id === id) {
        const _temp = { ...bucket, b_cancel: !bucket.b_cancel };
        setSaveBucket(_temp);
        return _temp;
      } else {
        return bucket;
      }
    });
    setBuckList(_bucketList);
  };

  const args = {
    bucketList: bucketList,
    flag_change: flag_change,
    bucket_update: bucket_update,
    bucket_complet: bucket_complet,
    bucket_cancel,
  };

  return (
    <div className="w3-container-fluid">
      <BuckInput buck_insert={buck_insert} />
      {/* BuckList 컴포넌트에 bucketList 상태(변수) 전달하기  */}
      {/* 
	  BucketItem.jsx에서 실행할 flag_change() bucket_update() 
	  함수를 매개변수로 전달하기

	  */}
      <BuckList args={args} />
    </div>
  );
}

export default BuckMain;
