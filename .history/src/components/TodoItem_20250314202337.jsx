import React from 'react'

function TodoItem(props) {
    console.log(props);
  return (
    <li className="li">
        {name}
        <button onClick={() => deleteTodo(id)}>Supprimer</button>
    </li>
  )
}

export default TodoItem