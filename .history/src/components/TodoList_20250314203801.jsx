import React, { useState, useRef } from "react";
import TodoItem from "./TodoItem";

function TodoList() {
  const [todos, setTodos] = useState([
  ]);

  const inputRef = useRef();

  const addTask = (e) => {
    e.preventDefault();
    const todoName = inputRef.current.value;

    if(todoName == ""){
        alert("Merci de remplir les champs vides")
        return;
    }
    const newTodo = {id: new Date, name: todoName, completed: true}
    console.log(newTodo);
    setTodos((previousTodos)=>[...previousTodos, newTodo])

    inputRef.current.value = "";
  }

  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id != id))
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
            <TodoItem deleteTodo={deleteTask} key={todo.id} todo={todo} />
          ))}
        </ul>
      )}
    </>
  );
}

export default TodoList;
