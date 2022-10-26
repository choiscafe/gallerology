import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from './NavBar';
import ArtsContainer from './ArtsContainer'
import MaestrosContainer from './MaestrosContainer'

function App() {
  const [collections, setCollections] = useState([]);
  const [maestros, setMaestros] = useState([]);


  useEffect(() => {
    fetch("/artworks")
      .then((r) => r.json())
      .then((collectionsData) => setCollections(collectionsData));
  }, []);

  useEffect(() => {
    fetch("/artists")
      .then((r) => r.json())
      .then((maestrosData) => setMaestros(maestrosData));
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
            <h1>Collections</h1><ArtsContainer collections={collections}/>
          </Route>
          <Route path="/maestros">
            <h1>Maestros</h1><MaestrosContainer maestros={maestros}/>
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