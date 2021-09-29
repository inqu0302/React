import React from "react";

function AddressInput({ address, setAddress, addrList, setAddrList }) {
  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setAddress({ ...address, [name]: value });
    console.log(address);
  };

  const onClick = () => {
    setAddrList([...addrList, address]);
    console.log(addrList);
  };
  return (
    <div className="input_form">
      <div>
        <label>이름</label>
        <input name="u_name" type="text" onChange={onChangeHandler} />
      </div>
      <div>
        <label>주소</label>
        <input name="u_addr" type="text" onChange={onChangeHandler} />
      </div>
      <div>
        <label>전화번호</label>
        <input name="u_tel" type="text" onChange={onChangeHandler} />
      </div>
      <div>
        <label>나이</label>
        <input name="u_age" type="text" onChange={onChangeHandler} />
      </div>
      <button onClick={onClick}>추가</button>
    </div>
  );
}

export default AddressInput;
