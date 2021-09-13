import logo from "./logo.svg";
import "./App.css";
import { BucketMain, Header, Footer } from "./comps/index";

function App() {
  return (
    <div className="App">
      <Header />
      <BucketMain />
      <Footer />
    </div>
  );
}

export default App;
