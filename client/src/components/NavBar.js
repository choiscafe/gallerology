import { NavLink } from 'react-router-dom'

function NavBar({ updateUser, currentUser }){

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        updateUser(null);
      }
    })
  }

  return(
    <div className="App-header">
      <NavLink to="/artworks">Collections</NavLink>{" "}
      <NavLink to="/maestros" className="navBarLink">Maestros</NavLink>{" "}

      {currentUser? (
        <header>
          <p>Welcome, {currentUser.username}!</p>
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