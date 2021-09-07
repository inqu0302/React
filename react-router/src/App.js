import logo from "./logo.svg";
import "./App.css";
import "./css/menu.css";

import MainNav from "./comps/MainNav";
import Home from "./comps/Home";
import About from "./comps/About";
import BBsWrite from "./comps/BBsWrite";

// BrowserRouter
// React에서 navigation을 구현할때 navigation에 포함될
// 컴포넌트들을 감싸는 Super Navi 컴포넌트

// Route
// Navigation 의 menu를 선택했을때 선택적으로 컴포넌트를 나타나게 하는 도구
// 이 컴포넌트를 사용하여 Home, About, BBsWriter 컴포넌트와 Link 컴포넌트를 연결
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>나의 React 프로젝트</h3>
        </header>
        <MainNav />
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/bbs" component={BBsWrite} exact />
        <Route path="/bbs/write" component={BBsWrite} />
      </div>
    </BrowserRouter>
  );
}

export default App;
