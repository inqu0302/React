const json = {
  name: "홍길동",
  addr: "광주광역시",
  tel: "010-1111-2222",
};

console.log(json);

const json1 = { ...json };
console.log(json1);

// json에 담긴 데이터를 json2로 복제하고
// tel 속성의 값만 변경
const json2 = { ...json, tel: "123-3456" };
console.log(json2);
