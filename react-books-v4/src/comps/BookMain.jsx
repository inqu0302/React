import { Route } from "react-router-dom";
import BookInput from "./BookInput";
import BookList from "./BookList";
import AppContextProvider from "../context/AppContextProvider";

function BookMain() {
  // 내부의 Route 코드들이 AppContextProvider {childre} 에담기게되어
  // 컨텍스트 안에 컴포넌트가 생성이 된다
  return (
    <>
      <AppContextProvider>
        <Route path="/" exact>
          여기는 Home 화면
        </Route>
        <Route path="/insert" exact>
          <BookInput />
        </Route>
        <Route path="/list" exact>
          <BookList />
        </Route>
      </AppContextProvider>
    </>
  );
}

export default BookMain;
