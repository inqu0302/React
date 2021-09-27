import React from "react";

function AddressInput({ address, setAddress }) {
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    /**
     * 계산식 송성 이름, computed property name
     * 변수이름을 변수값으로 생성하기
     * if(e.target.name === "u_name")
     * 	setAddress({...address, "u_name" : value})
     * else if(e.target.name === "u_addr")
     * 	setAddress({...address, "u_addr" : value})
     * JS ES6이상에서 새롭게 만들어진 변수 생성 문법
     * 변수를 [] 로 묶어주고 값을 저장하면 변수에 담긴 문자열로 변수를 생성해 주는 구조
     *
     * const [name] = "대한민국"
     * name 변수가아닌 문자열을 변수로 만드는 구조
     *
     * CPN : 표현식을 사용하여 객체의 key를 정의하는 문법
     *
     */
    setAddress({ ...address, [name]: value });
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
    </div>
  );
}

export default AddressInput;
