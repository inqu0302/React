import "./App.css";

import Header from "./comps/Header";
import MainNav from "./comps/MainNav";
import BBsMain from "./comps/BBsMain";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <MainNav />
      <BBsMain />
    </div>
  );
}

export default App;
