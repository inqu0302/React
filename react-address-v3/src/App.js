import logo from "./logo.svg";
import "./App.css";
import AddressInput from "./comps/AddressInput";
import AddressList from "./comps/AddressList";
import { useState } from "react";
import UUID from "react-uuid";

function App() {
  // 주소 한개의 데이터를 저장할 state 를 선언
  const [address, setAddress] = useState({
    a_id: UUID(),
    a_name: "",
    a_tel: "",
    a_addr: "",
    a_age: 0,
  });

  const [addrBook, setAddrBook] = useState([address]);

  const stateGroup = {
    address,
    setAddress,
    addrBook,
    setAddrBook,
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <AddressInput stateGroup={stateGroup} />
      <AddressList addrBook={addrBook} />
    </div>
  );
}

export default App;
