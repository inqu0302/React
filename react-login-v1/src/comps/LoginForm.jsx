import React, { useState } from "react";
import "../css/LoginForm.css";
import { useUserContext } from "../context/UserContextProvider";
import { useHistory } from "react-router-dom";

function LoginForm() {
  const { setUser } = useUserContext();
  const [account, setAccount] = useState({
    userid: "",
    password: "",
  });

  const history = useHistory();

  const onChange = (e) => {
    setAccount({ ...account, [e.target.name]: e.target.value });
  };

  const onLogin = async (e) => {
    if (!account.userid) {
      alert("ID를 입력하세요");
      return;
    }
    if (!account.password) {
      alert("비밀번호를 입력하세요");
      return;
    }
    const res = await fetch("http://localhost:8080/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000",
      },
      credentials: "include",
      body: JSON.stringify({
        userid: account.userid,
        password: account.password,
      }),
    });

    // 서버로부터 정상적인 응답이 오면
    // 서버가 멈춰있는 상태일 경우 res가 undefinded 또는 null값을 return 한다
    // if(res) {} 연산을 하면 res 가 정상인지 확인 할 수 있다.
    // res가 정상이 아닐때는 res.ok 에서 오류가 발생한다
    // ES6+ 버전에서 safe null 검사를 수행하는 코드가 있다
    // if(res?.ok)
    // res가 정상적(null, undefined가 아니면)으로 출력이 되면 ok속성을 검사
    console.log("res", res);
    if (res.status === 401) {
      alert("ID 또는 비밀번호 를 확인하세요");
    }
    if (res?.ok) {
      const resultUser = await res.json();
      console.log("user", account.userid);

      //   const user = users.find((item) => item.userid === account.userid);
      console.log("user", resultUser);

      if (!resultUser?.userid) {
        alert("없는 ID 입니다");
        return;
      }

      if (resultUser.password !== account.password) {
        alert("비밀번호가 틀렸습니다");
        return;
      }
      alert("로그인 성공");
      setUser(resultUser);
      history.replace("/");
    }
  };

  return (
    <div className="login_form">
      <input
        name="userid"
        placeholder="아이디를 입력해주세요"
        onChange={onChange}
      />
      <input
        name="password"
        type="password"
        placeholder="비밀번호를 입력해 주세요"
        onChange={onChange}
      />
      <button onClick={onLogin}>로그인</button>
    </div>
  );
}

export default LoginForm;
