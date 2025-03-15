import React from 'react'
import TodoList from './components/TodoList'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'

function App() {
  return (
    <Routes>
      <Route path="/todolist" element={<TodoList />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  )
}

export default App