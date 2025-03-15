import React from 'react'

function Login() {
  return (
    <>
    <form>
        <input type="text" placeholder="Nom d'utilisateur" />
        <input type="password" placeholder="Mot de passe" />
        <button type="submit">Connexion</button>
    </form>
    </>
  )
}

export default Login