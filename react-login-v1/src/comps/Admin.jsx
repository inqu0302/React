import { useEffect, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useUserContext } from "../context/UserContextProvider";

/**
 * 로그인이 되어있을때만 내용을 확인할 수 있고
 * 로그인이 않되어있을때는 로그인 페이지로 redirect
 * 매우 간단한 인즌(클라이언트 인증)
 * 1. user state 정보가 있는지?
 * 2. 있으면 관리자 페이지를 보여주고
 * 3. 없으면 login 으로 redirect
 * 		=> user state에 있는 사용자 정보가 server에서 인증된 정상사용자인지 확인방법이 없다
 * 이런상황이 발생하면 보안에 위험한 상태가 된다
 *
 * 그렇기 때문에 다음과 같은 절차를 수행
 * 1. 페이지를 선택하면 서버에 query를 전송하여 현재 로그인된 세션이 있는지확인
 * 2. 로그인 세션이 있으면 세션정보를 user에 담고 페이지를 열어 보여주기
 * 3. 로그인된 세션이 없다면 로그인 페이지로 redirect 수행
 */
function Admin() {
  const { user, setUser } = useUserContext();
  const history = useHistory();

  // user state 정보가 없으면 login페이지로 redirect
  //   if (!user?.userid) {
  //     history.replace("/login");
  //   }

  // user state 정보가 로그인한 정상 사용자인지 확인
  const fetchCb = useCallback(async () => {
    const response = await fetch("http://localhost:8080/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000",
      },
      credentials: "include",
    });

    if (response?.ok) {
      const resultUser = await response.json();
      if (resultUser?.userid) {
        await setUser(resultUser);
      } else {
        history.replace("/login");
      }
    } else {
      history.replace("/login");
    }
  }, [setUser]);

  // 페이지가 열릴때 자동으로 실행
  useEffect(fetchCb, [fetchCb]);

  // user state 정보가 있으면 관리자 페이지를 보여주기
  return (
    <div>
      <h1>여기는 관리자 페이지</h1>
    </div>
  );
}

export default Admin;
