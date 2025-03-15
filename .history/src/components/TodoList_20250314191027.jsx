import React, { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([
    {},
    {},
    {},
    {},
    {},
    {},
  ]);
  return <>{todos.length < 1 ? "Aucune taches disponible " : <>{todos.map((todo) => <>OK</>)}</>}</>;
}

export default TodoList;
