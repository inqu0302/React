import React from "react";
// 서로 다른폴더에 있기때문에 .. 으로 시작해야한다
import "../css/about.css";

function About() {
  return (
    <div className="about">
      <h1>자기소개서</h1>
      <div>
        <label htmlFor="">이름</label>
        <span>오종관</span>
      </div>
      <div>
        <label htmlFor="">생년월일</label>
        <span>1994.02.11</span>
      </div>
      <div>
        <label htmlFor="">전화번호</label>
        <span>010-2727-1801</span>
      </div>
      <div>
        <label htmlFor="">특기</label>
        <span>코딩</span>
      </div>
      <div>
        <label htmlFor="">구현기술</label>
        <span>
          <ul>
            <li>Spring MVC</li>
            <li>Oracle DBMS</li>
            <li>mySQL DBMS</li>
            <li>HTML5</li>
            <li>CSS2 and CSS3</li>
            <li>nodejs Web Server</li>
            <li>MongoDB noSQL</li>
            <li>React App</li>
          </ul>
        </span>
      </div>
    </div>
  );
}

export default About;
