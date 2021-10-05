import UUID from "react-uuid";
import "../css/AddressInput.css";

function AddressInput({ stateGroup }) {
  // const { stateGroup } = props;
  const { address, setAddress, addrBook, setAddrBook } = stateGroup;

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  };

  const addrBookInsert = () => {
    if (!address.a_name) {
      alert("이름을 입력해주세요");
      return;
    }
    if (!address.a_addr) {
      alert("주소를 입력해주세요");
      return;
    }
    if (!address.a_tel) {
      alert("전화번호를 입력해주세요");
      return;
    }
    if (!address.a_age) {
      alert("나이를 입력해주세요");
      return;
    }
    setAddress({ ...address, a_id: UUID() });
    setAddrBook([...addrBook, address]);
  };

  return (
    <div className="input_box">
      <input
        value={address.a_name}
        name="a_name"
        placeholder="이름을 입력해주세요"
        onChange={onChangeHandler}
      />
      <input
        value={address.a_addr}
        name="a_addr"
        placeholder="주소를 입력해주세요"
        onChange={onChangeHandler}
      />
      <input
        value={address.a_tel}
        name="a_tel"
        placeholder="전화번호를 입력해주세요"
        onChange={onChangeHandler}
      />
      <input
        value={address.a_age}
        name="a_age"
        placeholder="나이를 입력해주세요"
        onChange={onChangeHandler}
      />
      <button onClick={addrBookInsert}>주소 추가하기</button>
    </div>
  );
}

export default AddressInput;
