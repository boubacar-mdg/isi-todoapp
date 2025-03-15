import React from 'react'

function TodoItem({name, id, deleteTodo}) {
  return (
    <li className="li">
        {name}
        <button onClick={() => deleteTodo(id)} >Supprimer</button>
    </li>
  )
}

export default TodoItem