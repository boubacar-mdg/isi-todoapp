import React from "react";

function TodoItem({ deleteTodo, todo }) {
  const { name, id, completed } = todo;
  return (
    <li className="li">
      {name}
      <button onClick={() => deleteTodo(id)}>Supprimer</button>
    </li>
  );
}

export default TodoItem;
