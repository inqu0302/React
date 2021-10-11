import React from "react";
import MainNav from "./MainNav";
import LoginForm from "./LoginForm";
import JoinForm from "./JoinForm";
import Logout from "./Logout";
import TodoComp from "./TodoComp";
import AuthRoute from "./AuthRoute";

import { Route } from "react-router-dom";
import { useUserContext } from "../context/UserContextProvider";

function MainComp() {
  const { user, setUser } = useUserContext();

  const NavList = [
    { id: 0, title: "Home", link: "/" },
    { id: 1, title: "List", link: "/list" },
    user?.userid
      ? { id: 3, title: "로그아웃", link: "/logout", align: true }
      : { id: 3, title: "로그인", link: "/login", align: true },
    user?.userid
      ? { id: 4, title: "마이페이지", link: "/mypage" }
      : { id: 4, title: "회원가입", link: "/join" },
  ];

  return (
    <MainNav NavList={NavList}>
      <Route path="/" exact>
        <div>여기는 홈화면 입니다</div>
      </Route>
      <Route path="/list" exact>
        <AuthRoute>
          <TodoComp />
        </AuthRoute>
      </Route>
      <Route path="/login" exact>
        <LoginForm />
      </Route>
      <Route path="/join" exact>
        <JoinForm />
      </Route>
      <Route path="/logout" exact>
        <Logout />
      </Route>
    </MainNav>
  );
}

export default MainComp;
