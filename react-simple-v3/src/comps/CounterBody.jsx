import CounterInput from "./CounterInput";
import CounterView from "./CounterView";

function CounterBody({ setNumber, number }) {
  return (
    <div>
      <CounterInput setNumber={setNumber} />
      <CounterView number={number} />
    </div>
  );
}

export default CounterBody;
