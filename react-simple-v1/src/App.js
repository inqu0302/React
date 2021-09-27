import "./App.css";
import Counter from "./comps/CounterView";
import CounterButton from "./comps/CounterButton";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const plus = () => {
    setCount(count + 1);
  };

  const minus = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Counter count={count} />
        <CounterButton plus={plus} minus={minus} />
      </header>
    </div>
  );
}

export default App;