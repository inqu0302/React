import logo from "./logo.svg";
import "./App.css";
import ProopsDrilling from "./comps/ProopsDrilling";
import BookMain from "./comps/BookMain";
import BookContext from "./context/BookContext";
import { useState } from "react";

function App() {
  const [book, setBook] = useState("자바 스크립트");
  const [address, setAddress] = useState({ b_name: "", b_tel: "", b_addr: "" });
  const providerData = { book, setBook, setAddress };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <BookContext.Provider value={providerData}>
        <BookMain />
      </BookContext.Provider>
      <ProopsDrilling />
    </div>
  );
}

export default App;
