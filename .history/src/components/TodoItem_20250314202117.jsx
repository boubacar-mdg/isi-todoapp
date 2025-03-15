import React from 'react'

function TodoItem({name, id, delete}) {
  return (
    <li className="li">
        {name}
        <button >Supprimer</button>
    </li>
  )
}

export default TodoItem