import React, { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, name: "Todo 1", completed: false },
    { id: 2, name: "Todo 2", completed: false },
    { id: 3, name: "Todo 3", completed: false },
  ]);
  return (
    <>
      {todos.length < 1 ? (
        "Aucune taches disponible "
      ) : (
        <>
          {todos.map((todo) => (
            <>{todo.name}</>
          ))}
        </>
      )}
    </>
  );
}

export default TodoList;
