import React, {useRef} from "react";

function Login() {
    const usernameRef = useRef();
    const passwordRef = useRef();
  function handleLogin(e) {
    e.preventDefault();
    console.log(usernameRef.current.value);
    console.log(passwordRef.current.value);
  }
  return (
    <>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Nom d'utilisateur" ref={usernameRef}/>
        <input type="password" placeholder="Mot de passe" ref={passwordRef}/>
        <button type="submit">Connexion</button>
      </form>
    </>
  );
}

export default Login;
