import logo from "./logo.svg";
import "./App.css";
import MainNav from "./comps/MainNav";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <MainNav />
    </div>
  );
}

export default App;
