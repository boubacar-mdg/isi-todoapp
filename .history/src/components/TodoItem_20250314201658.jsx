import React from 'react'

function TodoItem({ name}) {
  return (
    <li class="li">
        <p>{name}</p>
        <button>Supprimer</button>
    </li>
  )
}

export default TodoItem