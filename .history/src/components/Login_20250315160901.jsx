import React from 'react'

function Login() {

function handleLogin(e){
    e.preventDefault();
console.log('Login');
}
  return (
    <>
    <form onSubmit={handleLogin}>
        <input type="text" placeholder="Nom d'utilisateur" />
        <input type="password" placeholder="Mot de passe" />
        <button type="submit">Connexion</button>
    </form>
    </>
  )
}

export default Login