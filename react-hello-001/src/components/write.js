// react에서 제공하는 useState() 함수를 사용하기 위한 import
// useState()
// react에서 "상태"를 생성하는 생성자 함수
// 상태(state) : 값을 변화시킬 수 있는, 값이 변화되어야 하는 변수, 객체
// 상태가 변하면 react는 화면을 다시 그린다
// 변수나 객체의 값이 바뀌면(변경되면) 그에 맞춰서 화면이 다시 rendering 된다
// 만약 코드에서 변수나 객체를 수시로 바꾼다면 화면이 무작위로 무한대로 다시 rendering 된다

import { useState } from "react";
import BBsView from "./view";

const bbs = {
  b_date: "2021-09-06",
  b_time: "11:24:06",
  b_writer: "홍길동",
  b_subject: "비가온다",
  b_content: "월요일인데 비가온다",
};

/**
 * bbs 객체의 요소들을 input box value속성에 지정(할당)
 * form 화면이 보여지는 상태에서 input box를 클릭하고 내용을 입력(변경)하면
 * 결국에 value 속성에 할당된 bbs 객체의 요소의 값들이 변경될 것이다
 *
 * HTML에서 <input name="b_name" value="b_name">이라는 코드는
 * 결국 화면에서 b_name input box를 클릭하고
 * 키보드로 이름(문자열)을 입력하면 내부에서
 * b_name = scan.nextString() 과 유사한 코드가 실행되어
 * b_name이라는 변수에 문자열을 저장하도록 코드가 작동 될 것이다.
 *
 * 하지만 react 에서는 b_name = 이름 과 같은 코드는 금지된다
 * 때문에 react로 form을 만들고 value속성에 변수명을 지정하는 순간
 * input box는 read only가 된다
 *
 *
 * 그렇다면 input에 뭔가를 입력하고 싶은데
 * read only가 되버리면 input 을 사용하는 의미가 없어진다
 * react에서는 input box에 change event를 설정하고
 * 키보드 입력된 문자열을 가로채서 state() 함수를 사용하여
 * 값을 변화시켜야 한다.
 *
 */

const Write = () => {
  // b_name 상태(변수)를 생성하고
  // 초기값을 이몽룡으로 설정하고
  // 상태(변수)의 값을 변화(변경)하고자 할때
  // setB_Name() 이라는 함수를 사용하겠다
  const [b_name, setB_Name] = useState("이몽룡");

  /**
   * event 객체를 매개변수로 갖는 핸들러 함수
   * input[name="b_writer"] box를 클릭하고
   * 키보드로 문자열을 입력하면 반응하는 event 핸들러 함수
   * 키보드로 입력된 문자열은 e.target.value에 담겨서 전달이 된다
   * 전달된 키보드 문자열은 b_writer_text 변수에 임시로 담고
   * setB_Name() 함수를 사용하여 b_name 변수에 값을 세팅한다
   *
   * React 내부 rendering 되는 알고리즘
   * setB_Name() 함수에 문자열이 전달되면
   * 내부에서는
   * 1. 전달된 문자열을 임시변수에 할당
   * 	const b_name = 전달된 문자열
   * 2. 실제 b_name 변수가 가르키고 있는 메모리의 주소를 b_name(임시변수) 주소로 변경한다
   * 3. 원래 b_name 변수는 그대로 유지되고 새로만들어진 b_name 변수가 생성이 된다
   * 4. react 에서는 기존 b_name 변수와 새로생성된 b_name 변수를 비교하여 변화가 있는지 확인후 rendering 을 하게 된다.
   */
  const onWriterChangeHandle = (e) => {
    const b_writer_text = e.target.value;
    // react 에서는 상태(변수, 객체)에 직접 값을 할당해서는 절대 안된다.
    // b_name = b_writer_text 와 같이 사용하면 안됨
    setB_Name(b_writer_text);
  };

  /**
   * bbsVO 상태(객체)를 생성하고
   * 초기값을 설정해준다
   * 상태(객체)의 값을 변화(변경) 하고자 할때 setBbsVO()라는 함수를 사용하겠다
   */
  const [bbsVO, setBbsVO] = useState({
    b_date: "2021-09-06",
    b_time: "11:24:06",
    b_writer: "홍길동",
    b_subject: "비가온다",
    b_content: "월요일인데 비가온다",
  });

  const onChangeHandle = (e) => {
    // e.target의 요소들을 분해(전개)하여 개별 변수로 선언
    // const name = e.target.name
    // const value = e.target.value

    const { name, value } = e.target;
    console.log("change", name, value);

    //   const _bbs_data = {...bbsVO, b_date : "2021-08-10"}

    //   setBbsVO({...bbsVO, b_date : value})
    /**
     * 전개연산자를 사용하여 bbsVO의 전체데이터를 복제하고
     * name 변수에 담긴 값과 같은 요소를 value값을 변경하여
     * 원래의 bbsVO와 교체하라
     *
     * bbsVO[name] = value : 절대 사용하면 안된다
     */
    setBbsVO({ ...bbsVO, [name]: value });
  };
  /**
   * <BBsView bbs={bbsVO} />
   * 1. import 된 BBSView를 화면에 연결하라
   * 2. 현재(write.js)에서 선언된 state 객체를
   * 	bbs라는 이름의 변수에 담아서
   * 	BBsView에게 전달하라
   */
  return (
    <form>
      <p>
        <input
          name="b_date"
          defaultvalue={bbs.b_date}
          onChange={onChangeHandle}
        />
      </p>
      <p>
        <input
          name="b_time"
          defaultvalue={bbs.b_time}
          onChange={onChangeHandle}
        />
      </p>
      <p>
        <input
          name="b_writer"
          defaultvalue={bbs.b_writer}
          onChange={onWriterChangeHandle}
        />
      </p>
      <p>
        <input
          name="b_subject"
          defaultvalue={bbs.b_subject}
          onChange={onChangeHandle}
        />
      </p>
      <p>
        <input
          name="b_content"
          defaultvalue={bbs.b_content}
          onChange={onChangeHandle}
        />
      </p>
      <div>
        <BBsView bbs={bbsVO} />
      </div>
    </form>
  );
};

export default Write;
