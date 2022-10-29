import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from './NavBar';
import ArtsContainer from './ArtsContainer'
import MaestrosContainer from './MaestrosContainer'
import NewCollectionForm from './NewCollectionForm'
import EditCollectionForm from './EditCollectionForm'
import Auth from './Auth'
import Login from './Login'


function App() {
  const [collections, setCollections] = useState([]);
  const [maestros, setMaestros] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [user, setUser] = useState(null);
  const [currentUser, setCurrentUser] = useState('')

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

  // useEffect(() => {
  //   fetch('/auth')
  //   .then(res => {
  //     if(res.ok){
  //       res.json().then(user => setCurrentUser(user))
  //     }
  //   })
  // }, [])
 
  useEffect(() => {
    fetch("/me")
    .then((response) => {
      if (response.ok) {
        response.json().then((user) => {
          setUser(user)
          setCurrentUser(user)
        });
      }
    });
  }, [])

  // function handleLogin(user) {
  //   setUser(null)
  // }

  // function handleLogout() {
  //   setUser(null)
  // }

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleAddCollection(newCollection) {
    setCollections([...collections, newCollection]);
  }

  function handleDeleteCollection(updatedCollection){
    const updatedCollections = collections.filter((collection) => 
      collection.id ===updatedCollection.id ? updatedCollection : collection
    )
    setCollections(updatedCollections)
  }
  
  function handleUpdateCollection(updatedCollection) {
    const updatedCollections = collections.map((collection) =>
      collection.id === updatedCollection.id? updatedCollection : collection
    )
    setCollections(updatedCollections)
  }

  // if(!currentUser) return <Login setCurrentUser={setCurrentUser} />
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar user={user} setUser={setUser}/>
        {user ? (
        <Switch>
          <Route exact path="/">
            <h1>Welcome to Gallerology</h1>
            <h2>Welcome, {currentUser.username}!</h2>
          </Route>
          <Route exact path="/artworks">
            <h1>Collections</h1>
            {showForm ? <NewCollectionForm handleAddCollection={handleAddCollection} /> : null}
            <div className="buttonContainer">
              <button onClick={handleClick}>Add Collection</button>
            </div>
            <ArtsContainer 
              collections={collections} 
              setCollections={setCollections}
              handleDeleteCollection={handleDeleteCollection} />
          </Route>
          <Route exact path="/artworks/:id/edit">
            <EditCollectionForm handleUpdateCollection={handleUpdateCollection}/>
          </Route>
          <Route exact path="/maestros">
            <h1>Maestros</h1><MaestrosContainer maestros={maestros}/>
          </Route>
        </Switch>
        ) : (
        <Switch>
          <Route exact path="/">
            <h1>Hello, Welcome to Gallerology</h1>
            <h2>The space where you become your own art collector</h2>
          </Route>
          <Route exact path="/login">
            <Login onLogin={setUser} />
          </Route>
          <Route exact path="/signup">
            <Auth setCurrentUser={setCurrentUser} />
          </Route>
        </Switch>
        )}
      </div>
    </BrowserRouter>
  );
} 


export default App;