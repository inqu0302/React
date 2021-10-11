import React, { useState } from "react";
import { fetchJoin } from "../modules/fetchModules";
import { useHistory } from "react-router-dom";
import "../css/JoinForm.css";

function JoinForm() {
  const [joinUser, setjoinUser] = useState({
    userid: "",
    password: "",
    re_password: "",
    e_mail: "",
  });

  const history = useHistory();

  const onChangeAccount = (e) => {
    const { name, value } = e.target;
    setjoinUser({ ...joinUser, [name]: value });
  };

  const onSubmitAccount = async (e) => {
    if (!joinUser?.userid) {
      alert("아이디를 입력하세요");
      return;
    }

    if (!joinUser?.password) {
      alert("비밀번호를 입력하세요");
      return;
    }

    if (!joinUser?.re_password) {
      alert("비밀번호 확인을 입력하세요");
      return;
    }

    if (joinUser.password !== joinUser.re_password) {
      alert("비밀번호가 일치하지 않습니다. 확인해주세요");
      return;
    }

    if (!joinUser?.e_mail) {
      alert("이메일을 입력하세요");
      return;
    }

    const joinData = {
      userid: joinUser.userid,
      password: joinUser.password,
      e_mail: joinUser.e_mail,
    };

    fetchJoin(joinData);
    alert("회원가입이 완료되었습니다!");
    history.replace("/login");
  };

  return (
    <div className="join_form">
      <input
        name="userid"
        value={joinUser.userid}
        placeholder="아이디를 입력해주세요"
        onChange={onChangeAccount}
      />
      <input
        name="password"
        value={joinUser.password}
        placeholder="비밀번호를 입력해주세요"
        type="password"
        onChange={onChangeAccount}
      />
      <input
        name="re_password"
        value={joinUser.re_password}
        placeholder="비밀번호를 한번 더 입력해주세요"
        type="password"
        onChange={onChangeAccount}
      />
      <input
        name="e_mail"
        value={joinUser.e_mail}
        placeholder="E-mail을 입력해주세요"
        onChange={onChangeAccount}
      />

      <button onClick={onSubmitAccount}>회원가입</button>
    </div>
  );
}

export default JoinForm;
