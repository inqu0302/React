const express = require("express");
const router = express.Router();

const BUCKET = require("../models/bucket");

/**
 * RESTful
 * 클라이언트에서 요청을 할때 할일을 프로토콜 method로 분리하기
 * 		CREATE(Insert) : POST 요청
 * 		READ(Select) : GET 요청
 * 		UPDATE : PUT 요청
 * 		DELETE : delete 요청
 *
 * 자원의 명확한 지정
 * 		localhost:3000/book/delete?id=1234 로 보통 요청을 수행하지만
 * 		localhost:3000/book/1234/delete : RESTful 에서 할일을 명확히 설정
 *
 * RESTful 요청을 처리하기 위해서는 표준 HTML 코드만으로 연결이 불가능
 * 표준 HTML 에서는 POST와 GET만 지원하기 때문에 PUT과 DELETE를 사용하기 위해서는
 * Ajax(fetch)와 같은 별도의 도구를 사용해야 한다
 *
 * React와 API 연동을 할때는 RESTful 4가지 method를 사용하여 서버를 구축
 *
 * POST, PUT : 데이터를 body에 담아서 전송
 * GET, DELETE : 단순히 URL 요청만 수행하거나 pathVarriable 방식으로 데이터를 전송하여
 * 				처리를 수행한다
 *
 * client에서 요청을 할때
 * 같은 URL 을 통하여 요청을 해도 method가 다르면 서로 다른 역할을 수행할수 있다
 *
 * 		GET localhost:3000/book/delete
 * 		- 삭제된 데이터를 보여달라
 * 		router.get("/book/delete")
 *
 * 		DELETE localhost:3000/book/delete?id=1
 * 		- id값이 1인 데이터를 삭제해라
 * 		router.delete("/book/delete")
 */

/**
 * POST로 받는 데이터는 주로 form에 담긴 데이터
 * API Server에서는 fetch() 를 통하여 데이터를 전달받을때도 사용한다
 * request의 body에 담겨서 전달되기 때문에 req.body에서 데이터를 추출
 */
router.post("/bucket", async (req, res) => {
  const body = req.body;
  const result = await BUCKET.create(body);
  console.log("데이터 추가하기", result);
  console.log(body);
  res.json({ result: "OK" });
});

router.put("/bucket", async (req, res) => {
  const body = req.body;
  await BUCKET.findOneAndUpdate({ b_id: body.b_id }, body);
  res.json({ result: "OK" });
});

/**
 * 3 Tier(3layer App)
 * react -> node -> atlas
 * atlas -> node -> react
 * findOne() 이 return 하는 doc 가 성능상 문제로 인하여 overwrite()가
 * null 값으로 오류가 발생하게됨
 */

// router.put("/bucket/over", async (req, res) => {
//   const body = req.body;
//   // DB에서 b_id 값이 body.b_id와 같은 데이터를 SELECT 하기
//   const doc = await BUCKET.findOne({ b_id: body.b_id });
//   // doc = {...doc, b_id : body.b_id, b_title : body.b_title}
//   // select한 model 객체의 모든 요소 데이터를 body로 받은 데이터로 변경하라
//   await doc.overwrite(body);
//   // 변경된 데이터를 DB에 update
//   await doc.save();

//   await console.log("데이터 업데이트 하기");
//   await console.table(body);
// });

router.get("/get", async (req, res) => {
  const buckets = await BUCKET.find({});
  console.log("전체 리스트 요청하기");
  res.json(buckets);
});

router.get("/get/:id", (req, res) => {
  console.log("개별 데이터 요청하기");
  res.json(retData[0]);
});

router.get("/update/:id/:title", (req, res) => {
  const id = req.params.id;
  const title = req.params.title;
  console.log("수신된 데이터", id, title);
  // res.status(200).end("끝")
  // Http Status Code
  // 2xx : 정상처리가 되고 데이터를 보낼 준비를 하고있다
  // 3xx : 결과가 변함없으니 그대로 사용,  redirect
  // 4xx : 문제가 생김
  // 404 : Not found
  // 401,403 : 권한이없음
  // 405 : method 가 잘못됨
  // 400 : 보낸 데이터가 문제가 발생
  // 5xx : Server Internal Error
  //   res.end("끝");
  res.json({ title: "끝" });
});

router.put("/update", (req, res) => {});

router.delete("/cancel/:id", (req, res) => {
  const id = req.params.id;
  console.log("수신된 데이터", id);

  res.json({ title: "끝" });
});
module.exports = router;
