import React from "react";

/**
 * 객체지향의 탄생
 * 기존에 있는 클래스를 이용하여 프로그래밍을 하기위해 탄생
 * 상속을 받아 기능을 추가하거나 일부를 변경하여 재사용
 *
 * 객체지향의 가장 큰 단점
 * 상속받은 부모 클래스를 잘 알아야 한다
 * 상속받은 부모 클래스가 변경되면 자식클래스도 변경하거나 사용하지 못하게 된다
 * 부모와 자식 클래스 간의 결합도가 높고 응집도가 낮다
 *
 * 좋은 모듈일수록 결합도가 낮고 응집도는 높아야 한다.
 *
 * 이러한 상속의 단점을 보완하는 디자인패턴 - 확장
 * G.O.F - 파사드 패턴
 * 클래스에게 객체를 사용하여 일처리를 맡기고 결과만 받는다
 */
function MyButtons({ onClick, children }) {
  const myStyle = {
    backgroundColor: "darkblue",
    padding: "10px",
    margin: "10px auto",
    color: "white",
    borderRadius: "5px",
    outline: "none",
  };
  return (
    <button syle={myStyle} onClick={onClick}>
      {children}
    </button>
  );
}

export default MyButtons;
