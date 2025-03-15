import React, { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  return <>{todos < 1 ? "Aucune taches disponible " : null}</>;
}

export default TodoList;
