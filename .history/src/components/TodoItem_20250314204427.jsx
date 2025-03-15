import React from "react";

function TodoItem({ deleteTodo, completeTodo, todo }) {
  const { name: todoName, id: todoId, completed } = todo;

  const completeStyle = {
    textDecoration: completed == true ? 'line-through' : '',
  }
  return (
    <li className="li">
      <div style={completeStyle}>{todoName}</div>
      <button onClick={() => deleteTodo(todoId)}>Supprimer</button>
      <button onClick={() => completeTodo(todoId)}>Completer</button>
    </li>
  );
}

export default TodoItem;
