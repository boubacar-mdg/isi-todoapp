import React, { useState, useRef } from "react";

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, name: "Todo 1", completed: false },
    { id: 2, name: "Todo 1", completed: false },
    { id: 3, name: "Todo 3", completed: false },
  ]);

  const inputRef = useRef();

  const addTask = (e) => {
    e.preventDefault();
    console.log("addTask");
  }

  return (
    <>
    <form onSubmit={addTask}>
        <input type="text" placeholder="Nom de la tâche" ref= />
        <button type="submit">Ajouter</button>
    </form>
      {todos.length < 1 ? (
        "Aucune taches disponible "
      ) : (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.name}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default TodoList;
