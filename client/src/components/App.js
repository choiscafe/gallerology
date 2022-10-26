import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from './NavBar';
import ArtsContainer from './ArtsContainer'

function App() {
  const [collections, setCollections] = useState([]);

  console.log('hi')

  useEffect(() => {
    fetch("/collections")
      .then((r) => r.json())
      .then((collectionsData) => setCollections(collectionsData));
  }, []);

  useEffect(() => {
    fetch("/users")
      .then((r) => r.json())
      .then((users) => console.log(users));
  }, []);

  
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Switch>
          <Route path="/login">
            <h1>Login</h1>
          </Route>
          <Route path="/collections">
            <ArtsContainer collections={collections}/><h1>Collections</h1>
          </Route>
          <Route path="/maestros">
            <h1>Maestros</h1>
          </Route>
          <Route path="/">
            <h1>Welcome to Gallerology</h1>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;