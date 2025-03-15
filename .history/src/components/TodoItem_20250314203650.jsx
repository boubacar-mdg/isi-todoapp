import React from "react";

function TodoItem({ deleteTodo, todo }) {
  const { name, id, completed } = todo;

  const completeStyle = {
    textDecoration: completed == true ? "" : 'line-through',
  }
  return (
    <li className="li">
      <div style={completeStyle}>{name}</div>
      <button onClick={() => deleteTodo(id)}>Supprimer</button>
    </li>
  );
}

export default TodoItem;
