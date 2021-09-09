import "./App.css";

import { MainNav, BBsMain, Header, Footer, BBsWrite } from "./comps/index";

// BrowserRouter는 리액터에서 제공하는 기능명
// as 를 사용해서 변수명을 바꿔줄수 있다
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <MainNav />
        <Route path="/" component={BBsMain} exact />
        <Route path="/write" component={BBsWrite} exact />
        <section className="main_section"></section>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
