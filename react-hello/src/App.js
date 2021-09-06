import logo from "./logo.svg";
import "./App.css";

// 모듈로 분리된 컴포넌트 import 하기
// 사용자 정의형(개발자가 임의로 만든) 컴포넌트를 사용하기 위해 import할때는
// 이름의 첫글자를 대문자로 사용한다
// react 자체적으로 제공하느 컴포넌트와 혼동하거나 충돌하는 것을 방지
import Hello from "./components/hello.js";

/**
 * HTML 의 h1 tag를 사용하여 문자열을 표현하는
 * 컴포넌트를 선언하기
 * 컴포넌트는 HTML tag를 만드는 코드를 return 한다
 *
 * 컴포넌트는 반드시 return( tag를 그리는 코드, HTML 작성과 유사)
 * 컴포넌트에 포함된 tag는 반드시 open 과 close 가 명확해야 한다.
 *
 * return 문에서 사용되는 tag 는 1개만 가능하다
 * <div>로 전체를 감싼것 처럼 1개만 선언하고 내부에 여러개를 선언하는 방식을 사용해야 한다
 * 가장 바깥에 있는 코드는 <></> 로 아무것도 없는 tag를 선언할 수 있다
 */
const MyBox = () => {
  return (
    <>
      <div>
        <h1>안녕하세요</h1>
        <p>우리나라 만세</p>
      </div>
      <div>
        <h1>리액트 배우기</h1>
      </div>
    </>
  );
};

/**
 * 선언된 컴포넌트에 사용할때는 마치 tag를 사용하는 것처럼 사용한다
 * <컴포넌트/>
 */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyBox />
        <Hello />
      </header>
    </div>
  );
}

export default App;
