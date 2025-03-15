import React from 'react'

function TodoItem({ name}) {
  return (
    <li class="li">
        {name}
        <button>Supprimer</button>
    </li>
  )
}

export default TodoItem