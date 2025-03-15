import React from 'react'

function TodoItem({ name}) {
  return (
    <li className="li">
        <div></div>{name}
        <button >Supprimer</button>
    </li>
  )
}

export default TodoItem