import { useHistory } from "react-router-dom";
import { useUserContext } from "../context/UserContextProvider";
import { useCallback, useEffect } from "react";
import { fetchUser } from "../modules/fetchModules";

const AuthRoute = ({ children }) => {
  const { setUser } = useUserContext();
  const history = useHistory();

  const fetchCb = useCallback(async () => {
    const resultUser = await fetchUser();
    if (resultUser?.userid) {
      await setUser(resultUser);
    } else {
      history.replace("/login");
      //   alert("로그인 후 이용해 주세요");
    }
  }, [setUser]);

  // 페이지가 열릴때 실행
  useEffect(fetchCb, [fetchCb]);

  return <>{children}</>;
};

export default AuthRoute;
