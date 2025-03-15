import React from "react";

function TodoItem({ deleteTodo, todo }) {
  const { name, id, completed } = todo;

  const completeClass = {
    textDecoration: 'line-through',
  }
  return (
    <li className="li">
      <div className={}>{name}</div>
      <button onClick={() => deleteTodo(id)}>Supprimer</button>
    </li>
  );
}

export default TodoItem;
