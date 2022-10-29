import { useState } from "react";

function Auth({ setCurrentUser }) {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState("");
  const [errors, setErrors] = useState([])

  function onSubmit(e) {
    e.preventDefault()
    const user = {
      name,
      username,
      password
    }
    fetch("/users", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(user)
    })
    .then((r) => {
        if (r.ok) {
          r.json().then(setCurrentUser)
         } else {
           r.json().then( e => setErrors(Object.entries(e.error).flat()))
           console.log('hi')
        }
      })
    }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h1>Gallerology</h1>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          autoComplete="off"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />{" "}
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />{" "}
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />{" "}
      
        <input type="submit" value="Sign up" />{" "}
        <input type="submit" value="Login" onClick={() => setLogin(true)} />
      </form>
    </div>
  );
}

export default Auth