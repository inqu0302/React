import React from "react";
import { NavLink } from "react-router-dom";

function MainNav() {
  return (
    <ul className="main_menu">
      <li>
        <NavLink exact to="/">
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/write">
          글쓰기
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/login">
          로그인
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/join">
          회원가입
        </NavLink>
      </li>
    </ul>
  );
}

export default MainNav;
