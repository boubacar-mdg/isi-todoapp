import React, { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, name: "Todo 1", completed: false },
    { id: 2, name: "Todo 1", completed: false },
    { id: 3, name: "Todo 3", completed: false },
  ]);

  const addTask = () => {
    
  }

  return (
    <>
    <form onSumbit={addTask}>
        <input type="text" placeholder="Nom de la tâche" />
        <button type="button">Ajouter</button>
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
