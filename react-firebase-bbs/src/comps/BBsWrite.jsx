import React from "react";

function BBsWrite() {
  return (
    <div className="bbsWrite">
      <div>
        <input type="text" placeholder="작성자"></input>
      </div>
      <div>
        <input type="text" placeholder="제목"></input>
      </div>
      <div>
        <input type="text" placeholder="내용"></input>
      </div>
      <div>
        <button>저장</button>
      </div>
    </div>
  );
}

export default BBsWrite;
