import "./App.css";

import {
  MainNav,
  BBsMain,
  Header,
  Footer,
  BBsWrite,
  BBsDetail,
} from "./comps/index";

// BrowserRouter는 리액터에서 제공하는 기능명
// as 를 사용해서 변수명을 바꿔줄수 있다
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <MainNav />
        <section className="main_section">
          <Route path="/" component={BBsMain} exact />
          <Switch>
            <Route path="/write" component={BBsWrite} exact />
            <Route path="/write/:id" component={BBsWrite} exact />
            <Route exact path="/detail/:id" component={BBsDetail} />
          </Switch>
        </section>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
