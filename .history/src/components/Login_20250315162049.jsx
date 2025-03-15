import React, { useRef } from "react";

function Login() {
  const usernameRef = useRef();
  const passwordRef = useRef();
  async function handleLogin(e) {
    e.preventDefault();

    const loginPayload = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };

    console.log(loginPayload);

    const response = await fetch("http://localhost:8080/api/v1/auth/login", {
      method: "POST",
      body: JSON.stringify(loginPayload),
      headers: {
        "Content-Type": "application/json"
      }
    });

    const data = await response.json();

    localStorage.setItem("token", data.accessToken);
  }
  return (
    <>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Nom d'utilisateur" ref={usernameRef} />
        <input type="password" placeholder="Mot de passe" ref={passwordRef} />
        <button type="submit">Connexion</button>
      </form>
    </>
  );
}

export default Login;
