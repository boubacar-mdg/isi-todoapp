import React, { useState, useRef } from "react";
import TodoItem from "./TodoItem";

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() =>{
    async function fetchTodos(){
      const response = await fetch("http://localhost:8080/api/v1/todos", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("token")
        },
      });
  
      const data = await response.json();
      setTodos(data);
    }
  }, [])

  const inputRef = useRef();

  const addTask = (e) => {
    e.preventDefault();
    const todoName = inputRef.current.value;

    if (todoName == "") {
      alert("Merci de remplir les champs vides");
      return;
    }
    const newTodo = { id: new Date(), name: todoName, completed: false };
    setTodos((previousTodos) => {
      const newTodos = [...previousTodos, newTodo];
      //localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    });

    inputRef.current.value = "";
  };

  const deleteTask = (todoId) => {
    const filteredTodos = todos.filter((todo) => todo.id != todoId);
    //localStorage.setItem("todos", JSON.stringify(filteredTodos));
    setTodos(filteredTodos);
  };

  const completeTask = (todoId) => {
    setTodos((previousTodos) => {
      const newTodos = previousTodos.map((todo) => {
        if (todo.id == todoId) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      //localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    });
  };

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
            <TodoItem
              deleteTodo={deleteTask}
              completeTodo={completeTask}
              key={todo.id}
              todo={todo}
            />
          ))}
        </ul>
      )}
    </>
  );
}

export default TodoList;
