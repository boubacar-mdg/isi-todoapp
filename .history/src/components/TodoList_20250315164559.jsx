import React, { useState, useRef, useEffect } from "react";
import TodoItem from "./TodoItem";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchTodos() {
    setLoading(true);
    const response = await fetch("http://localhost:8080/api/v1/todos", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });

    const data = await response.json();
    setTodos(data.data.items);
    setLoading(false);
  }

  useEffect(() => {
    fetchTodos();
  }, []);

  const inputRef = useRef();

  const addTask = async (e) => {
    e.preventDefault();
    const todoName = inputRef.current.value;

    if (todoName == "") {
      alert("Merci de remplir les champs vides");
      return;
    }
    const newTodo = { name: todoName, completed: false };

    const response = await fetch(`http://localhost:8080/api/v1/todos/save`, {
      method: "POST",
      body: JSON.stringify(newTodo),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });

    const data = await response.json();
    setTodos(async (previousTodos) => {
      const newTodos = [...previousTodos, data.data.item];
      return newTodos;
    });

    inputRef.current.value = "";
  };

  const deleteTask = async (todoId) => {
    const filteredTodos = todos.filter((todo) => todo.id != todoId);
    //localStorage.setItem("todos", JSON.stringify(filteredTodos));
    const response = await fetch(`http://localhost:8080/api/v1/todos/delete/${todoId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });

    const data = await response.json();
    console.log(data);
    //fetchTodos();
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
      {loading ? (
        <>Chargement...</>
      ) : (
        <>
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
      )}
    </>
  );
}

export default TodoList;
