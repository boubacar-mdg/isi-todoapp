import React, { useState, useRef, useEffect } from "react";
import TodoItem from "./TodoItem";
import { baseUrl } from "../config/api";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchTodos() {
    setLoading(true);
    const url = `${baseUrl}/api/v1/todos`;
    const response = await fetch(url, {
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
      alert("Merci de saisir un nom de tâche");
      return;
    }

    const newTodo = { name: todoName, completed: false };

    try {
      const response = await fetch(`${baseUrl}/api/v1/todos/save`, {
        method: "POST",
        body: JSON.stringify(newTodo),
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });

      const data = await response.json();
      setTodos((previousTodos) => {
        const newTodos = [...previousTodos, data.data.item];
        return newTodos;
      });
    } catch (error) {
      console.error(error);
    }

    inputRef.current.value = "";
  };

  const deleteTask = async (todoId) => {
    //localStorage.setItem("todos", JSON.stringify(filteredTodos));
    try {
      const response = await fetch(
        `${baseUrl}/api/v1/todos/delete/${todoId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );

      const data = await response.json();
      //console.log(data);
      //fetchTodos();

      const filteredTodos = todos.filter((todo) => todo.id != todoId);
      setTodos(filteredTodos);
    } catch (error) {
      console.log(error);
    }
  };

  const completeTask = async (todoId) => {
    try {
      const todo = todos.find((todo) => todo.id === todoId);
      const requestBody = { ...todo, completed: !todo.completed };

      const response = await fetch(
        `${baseUrl}/api/v1/todos/update`,
        {
          method: "POST",
          body: JSON.stringify(requestBody),
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );

      const data = await response.json();

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
    } catch (error) {
      console.error(error);
    }
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
