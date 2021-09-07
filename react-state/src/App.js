import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Write from "./comps/Write";
import View from "./comps/View";

// 프로젝트가 시작될때 임시로 보여줄 데이터
const bbsSample = {
  b_date: "2021-09-07",
  b_time: "10:24:50",
  b_writer: "홍길동",
  b_subject: "React Project",
  b_content: "프로젝트 시작",
};

function App() {
  // 상태(변수, 객체) bbs를 선언하고 값의 변경이 필요할때 사용할
  // setBBs() 함수를 선언
  // useState() 함수를 이용하여 상태를 생성
  // 상태를 만들때 bbsSample을 이용하여 초기값 설정
  // bbsSample을 초기값으로 설정하는 이유는 bbsVO가 null값이되어 이후 코드에서 오류가 나지않게하기 위해서

  // const [변수이름, 이벤트 이름] = useState(초기값)
  const [bbsVO, setBBs] = useState(bbsSample);

  // input box 의 데이터 change event 를 처리할 함수 선언
  const bbsChange = (event) => {
    const { name, value } = event.target;
    setBBs({ ...bbsVO, [name]: value });
  };
  /**
   * <Write bbs={bbsVO}/> 코드 설명
   * import된 Write.js 컴포넌트를 결합하고 선언된 bbsVO 상태 변수를
   * bbs라는 이름으로 Write.js 에게 전달
   *
   * Call By Name
   * 매개변수를 전달할때 전달받을 변수이름을 지정하고 변수값을 전달하는 방식
   *
   * <Write onBBsChange={bbsChage} /> 코드 설명
   * App.js 에 선언된 bbsChange() 함수를 onBBsChange로 전달
   */
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section className="main_section">
        <article>
          <Write bbs={bbsVO} onBBsChange={bbsChange} />
        </article>
        <article>
          <View bbs={bbsVO} />
        </article>
      </section>
    </div>
  );
}

export default App;
