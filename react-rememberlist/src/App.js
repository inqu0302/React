import "./App.css";

// 개별로 하나씩 컴포넌트 import
// import Header from "./comps/Header";
// import RemBody from "./comps/RemBody";
// import Footer from "./comps/Footer";

// index.js 파일을 사용하여 한번에 import 하기
// import { Header, RemBody, Footer } from "./comps/Index";

// comps로된 파일을 먼저찾아보고 없으면 폴더를 찾는다
// .comps 폴더에서 index.js파일을 찾아서 import
// {사용할 컴포넌트만 입력가능}
import { Header, Footer, RemBody } from "./comps";

function App() {
  return (
    <div className="App">
      <Header />
      <RemBody />
      <Footer />
    </div>
  );
}

export default App;
