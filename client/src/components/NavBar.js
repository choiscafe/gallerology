import { NavLink } from 'react-router-dom'

function NavBar(){
  return(
    <div className="App-header">
      <NavLink to="/collections">Collections</NavLink>{" "}
      <NavLink to="/maestros" className="navBarLink">Maestors</NavLink>{" "}
      <NavLink to="/logout" className="navBarLink">Log Out</NavLink>
    </div>
  )
}

export default NavBar