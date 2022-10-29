import { NavLink } from 'react-router-dom'

function NavBar({ user, setUser }){

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    })
  }

  return(
    <div className="App-header">
      <NavLink to="/artworks">Collections</NavLink>{" "}
      <NavLink to="/maestros" className="navBarLink">Maestros</NavLink>{" "}

      {user? (
        <header>
          <p>Welcome, {user.username}!</p>
          <button onClick={handleLogoutClick}>Logout</button>
        </header>
      ) : (
        <>
          <NavLink to="/signup">Signup</NavLink>{" "}
          <NavLink to="/login">Login</NavLink>
        </>
      )}
    </div>
  )
}

export default NavBar