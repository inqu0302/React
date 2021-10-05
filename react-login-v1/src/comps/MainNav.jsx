import React from "react";
import { BrowserRouter, NavLink } from "react-router-dom";
import "../css/MainNav.css";

const align_right = {
  marginLeft: "auto",
};
function MainNav({ children, NavList }) {
  const nav_items = NavList.map((nav) => {
    return (
      <li className="nav_item" key={nav.id} style={nav.align && align_right}>
        <NavLink to={nav.link}>{nav.title}</NavLink>
      </li>
    );
  });
  return (
    <BrowserRouter>
      <ul>{nav_items}</ul>
      {children}
    </BrowserRouter>
    // <div className="main_nav">
    //   <ul>
    //     <li>HOME</li>
    //     <li>공지사항</li>
    //     <li>자유게시판</li>
    //   </ul>
    // </div>
  );
}

export default MainNav;
