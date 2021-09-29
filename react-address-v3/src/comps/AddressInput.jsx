import React from "react";

function AddressInput(props, { stateGroup }) {
  // const {stateGroup} = props
  const { address, setAddress, addrBook, setAddrBook } = stateGroup;

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  };

  const addrBookInsert = () => {
    setAddrBook([...addrBook, address]);
  };
  return (
    <div>
      <input type="text" onChange={onChangeHandler} placeholder="이름" />
      <input type="text" onChange={onChangeHandler} placeholder="주소" />
      <input type="text" onChange={onChangeHandler} placeholder="전화번호" />
      <input type="text" onChange={onChangeHandler} placeholder="나이" />
      <button onClick={addrBookInsert}>추가</button>
    </div>
  );
}

export default AddressInput;
