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
    const todoName = inputRef.current.value;

    if(todoName == ""){
        alert("Merci de remplir les champs vides")
        return;
    }

    const newTodo = {id: new Date, name: todoName, completed: false}
    setTodos((previousTodos)=>[...previousTodos, newTodo])

    inputRef.current.value = "";


  }

  return (
    <>
    <form onSubmit={addTask}>
        <input type="text" placeholder="Nom de la tâche" ref={inputRef} />
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
