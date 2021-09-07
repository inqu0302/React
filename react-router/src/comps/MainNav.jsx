import React from "react";

// Link
// Navigation Menu 를 구현할때 사용하는 컴포넌트
// 실제 rendering이 되면 a Tag 로 변환되는 컴포넌트
// React에서는 a Tag 를 사용하여 page를 전환하는 코드를 사용하지 않는다

// NavLink
// Link와 같으나 스타일을 별도로 지정하기위해서 사용
import { NavLink } from "react-router-dom";

function MainNav() {
  // component 코드에 inline style 생성
  const activeNavStyle = {
    backgroundColor: "green",
  };
  /**
   * Navigation menu 설정할때
   * Link 또는 NavLink 컴포넌트를 사용하게 된다
   *
   * NavLink 를 사용하면
   * NavLink에 의해 활성화된 페이지가 열리면 menu style을 지정하여 어떤 페이지가
   * 열려있는지 확인할 수 있다.
   * activeStyle={스타일 변수}
   *
   * css 에 클래스명을 지정하고 스타일 지정후
   * activClassName={클래스명}
   */
  return (
    <ul className="main_menu">
      <li>
        <NavLink to="/" activeStyle={activeNavStyle} exact>
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" activeStyle={activeNavStyle}>
          나의 소개
        </NavLink>
      </li>
      <li>
        <NavLink to="/bbs" activeStyle={activeNavStyle}>
          자유 게시판
        </NavLink>
      </li>
      <li>
        <input placeholder="검색어를 입력하세요" />
      </li>
    </ul>
  );
}

export default MainNav;
