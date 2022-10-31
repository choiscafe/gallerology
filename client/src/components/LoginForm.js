import React, { useState } from "react";
import {useHistory} from 'react-router-dom'

function LoginForm({ updateUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const history = useHistory()

  function onSubmit(e) {
    e.preventDefault();
    const user = {
      username, password
    }
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user)
    })
    .then(r => {
      if (r.ok) {
        r.json().then(user => {
          updateUser(user)
          history.push(`/users/${user.id}`)
      })
     } else {
        r.json().then(json => setErrors(json.errors))
      }
    })
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h1>Login</h1>
        <label htmlFor="username">Username</label>{" "}
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />{" "}
        <label htmlFor="password">Password</label>{" "}
        <input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />{" "}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;