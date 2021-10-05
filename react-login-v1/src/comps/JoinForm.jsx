import React, { useState } from "react";
import "../css/JoinForm.css";

function JoinForm() {
  const [account, setAccount] = useState({
    userid: "",
    password: "",
    re_password: "",
    eMail: "",
  });

  const onChange = (e) => {
    setAccount({ ...account, [e.target.name]: e.target.value });
  };

  const onJoin = (e) => {
    if (!account.userid) {
      alert("ID를 입력하세요");
      return;
    }
    if (!account.password) {
      alert("비밀번호를 입력하세요");
      return;
    }
    if (!account.re_password) {
      alert("비밀번호를 한번 더 입력하세요");
      return;
    }
    if (!account.eMail) {
      alert("E-mail을 입력하세요");
      return;
    }
    if (account.password !== account.re_password) {
      alert("비밀번호를 확인해 주세요");
      return;
    }
    alert("회원가입 문제없음");
  };

  return (
    <div className="join_form">
      <input
        name="userid"
        onChange={onChange}
        placeholder="아이디를 입력해주세요"
      />
      <input
        name="password"
        onChange={onChange}
        type="password"
        placeholder="비밀번호를 입력해주세요"
      />
      <input
        name="re_password"
        onChange={onChange}
        type="password"
        placeholder="비밀번호를 한번 더 입력해 주세요"
      />
      <input
        name="eMail"
        onChange={onChange}
        type="E-mail"
        placeholder="E-mail을 입력해 주세요"
      />

      <button onClick={onJoin}>회원가입</button>
    </div>
  );
}

export default JoinForm;
