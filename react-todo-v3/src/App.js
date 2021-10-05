import logo from "./logo.svg";
import TodoMain from "./comps/TodoMain";
import "./App.css";
import CompButton from "./comps/CompButton";
import TodoInput from "./comps/TodoInput";
import TodoList from "./comps/TodoList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {/* TooMain.jsx Layout을 사용하여 UI 구형*/}
      <TodoMain header="금요일이다" form={<TodoInput />}>
        <TodoList></TodoList>
      </TodoMain>
      <CompButton>버튼</CompButton>
      <CompButton>복사</CompButton>
      <CompButton>테스트</CompButton>
      <CompButton>하기</CompButton>
    </div>
  );
}

export default App;
