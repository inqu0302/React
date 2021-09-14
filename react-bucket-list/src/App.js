import "./App.css";
import { BucketMain, Header, Footer } from "./comps/index";

function App() {
  return (
    <div className="App">
      <section className="w3- container w3-margin">
        <Header />
        <BucketMain />
      </section>
      <Footer />
    </div>
  );
}

export default App;
