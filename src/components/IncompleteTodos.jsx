import React from "react";

export const IncompleteTodos = (props) => {
  const { incompleteTodos, onClick1, onClick2 } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {incompleteTodos.map((todo, index) => {
          return (
            <div className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClick1(index)}>完了</button>
              <button onClick={() => onClick2(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
