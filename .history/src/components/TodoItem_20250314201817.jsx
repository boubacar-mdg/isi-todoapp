import React from 'react'

function TodoItem({ name}) {
  return (
    <li className="li">
        <div>{name}</div>
        <button >Supprimer</button>
    </li>
  )
}

export default TodoItem