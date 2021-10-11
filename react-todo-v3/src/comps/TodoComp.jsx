import React from "react";
import TodoMain from "./TodoMain";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function TodoComp() {
  return (
    <div>
      <TodoMain header="TODO List" form={<TodoInput />}>
        <TodoList></TodoList>
      </TodoMain>
    </div>
  );
}

export default TodoComp;
