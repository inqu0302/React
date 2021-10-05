import logo from "./logo.svg";
import "./App.css";
import MainNav from "./comps/MainNav";
import LoginForm from "./comps/LoginForm";
import JoinForm from "./comps/JoinForm";
import { BrowserRouter, Route } from "react-router-dom";

const NavList = [
  { id: 0, title: "Home", link: "/" },
  { id: 1, title: "공지사항", link: "/notice" },
  { id: 2, title: "자유게시판", link: "/bbs" },
  { id: 3, title: "로그인", link: "/login", align: true },
  { id: 4, title: "회원가입", link: "/join" },
];

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <MainNav NavList={NavList}>
          <Route path="/login" component={LoginForm} exact />
          <Route path="/join" component={JoinForm} exact />
        </MainNav>
      </div>
    </BrowserRouter>
  );
}

export default App;
