// 2개의 변수(상수) 선언
const comp = "컴포넌트만들기";
const nation = "Republic of Korea";

// JOSN객체 선언
const buyer = {
  name: "홍길동",
  addr: "서울",
  age: 30,
};

// 미리 선언된 변수를 컴포넌트 코드에서 사용할때는 {변수명}과 같이 사용한다
const HelloBox = () => {
  return (
    <>
      <h1>컴포넌트 만들기</h1>
      <h3>{comp}</h3>
      <ul>
        <li>이름 : {buyer.name}</li>
        <li>주소 : {buyer.addr}</li>
      </ul>
    </>
  );
};

// 모듈(file)로 분리한 컴포넌트 만들기
const Hello = () => {
  return (
    <>
      <h1>Requplic of Korea</h1>
      <HelloBox />
    </>
  );
};

// 모듈로 분리된 컴포넌트는 반드시 export 해야 한다
// module.exports 와 같은 코드(ES6+)
export default Hello;
