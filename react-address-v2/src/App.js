import AddressInput from "./comps/AddressInput";
import AddressView from "./comps/AddressView";
import { useState } from "react";
import "./App.css";

function App() {
  const [address, setAddress] = useState({
    u_name: "",
    u_addr: "",
    u_tel: "",
    u_age: 0,
  });
  return (
    <div className="App">
      <header className="App-header">
        <AddressInput address={address} setAddress={setAddress} />
        <AddressView address={address} />
      </header>
    </div>
  );
}

export default App;
