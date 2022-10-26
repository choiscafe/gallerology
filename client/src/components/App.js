import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from './NavBar';

function App() {
  const [count, setCount] = useState(0);

  console.log('hi')

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
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
          <Route path="/artworks">
            <h1>Artworks</h1>
          </Route>
          <Route path="/maestros">
            <h1>Maestros</h1>
          </Route>
          <Route path="/">
            <h1>Page Count: {count}</h1>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;