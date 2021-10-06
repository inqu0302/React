import "../css/JoinForm.css";
import React, { useState } from "react";

function JoinForm() {
  const [joinUser, setJoinUser] = useState({
    userid: "",
    password: "",
    re_password: "",
    email: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setJoinUser({ ...joinUser, [name]: value });
  };

  const onJoin = async (e) => {
    if (!joinUser?.userid) {
      alert("ID를 입력하세요");
      return;
    }
    if (!joinUser?.password) {
      alert("비밀번호를 입력하세요");
      return;
    }
    if (!joinUser?.re_password) {
      alert("비밀번호를 한번 더 입력하세요");
      return;
    }
    if (!joinUser?.e_mail) {
      alert("E-mail을 입력하세요");
      return;
    }
    if (joinUser.password !== joinUser.re_password) {
      alert("비밀번호를 확인해 주세요");
      return;
    }

    const joinData = {
      userid: joinUser.userid,
      password: joinUser.password,
      email: joinUser.email,
    };

    const response = await fetch("http://localhost:8080/users/join", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(joinData),
    });

    if (response.ok) {
      const json = await response.json();
      alert(JSON.stringify(json));
    }
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
        name="e_mail"
        onChange={onChange}
        type="E-mail"
        placeholder="E-mail을 입력해 주세요"
      />

      <button onClick={onJoin}>회원가입</button>
    </div>
  );
}

export default JoinForm;
