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
  const [currentUser, setCurrentUser] = useState('')
  const [errors, setErrors] = useState(false)

  useEffect(() => {
    fetch("/me")
    .then(response => {
      if (response.ok) {
        response.json().then(user => {
          updateUser(user)
          fetchCollections()
          fetchArtists()
        });
      }
    });
  }, [])

  const fetchCollections = () => {
    fetch("/artworks")
      .then(r => {
        if(r.ok){
          r.json().then(setCollections)
        }else {
          r.json().then(data => setErrors(data.error))
        }
    })
  }
  const addCollection = (collection) => setCollections(current => [...current,collection])
 
  const updateCollection= (updatedCollection) => setCollections(current => {
    return current.map(collection => {
      if(collection.id === updatedCollection.id){
        return updatedCollection
       } else {
         return collection
       } 
      })
    })
  
  const updateUser = (user) => setCurrentUser(user)

  const fetchArtists = () => {
    fetch("/artists")
      .then(r => {
        if(r.ok){
          r.json().then(setMaestros)
        }else {
          r.json().then(data => setErrors(data.error))
        }
    })
  }

  const addArtist = (maestro) => setMaestros(current => [...current, maestro])

  const updateArtist = (updatedArtists) => setMaestros(current => {
    return current.map(maestro => {
      if(maestro.id === updatedArtists.id){
        return updatedArtists
      }else {
        return maestros
      }
    })
  })

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleDeleteCollection(updatedCollection){
    const updatedCollections = collections.filter((collection) => 
      collection.id ===updatedCollection.id ? updatedCollection : collection
    )
    setCollections(updatedCollections)
  }
  

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar updateUser={updateUser} currentUser={currentUser}/>
        {!currentUser ? 
          <Switch>
            <Route exact path="/login">
              <Login updateUser={updateUser} />
            </Route> 
            <Route exact path="/">
              <h1>Hello, Welcome to Gallerology</h1>
              <h2>The space where you become your own art collector</h2>
            </Route>
            
            <Route exact path="/signup">
              <Auth setCurrentUser={setCurrentUser} />
            </Route>
          </Switch> :
          <Switch>
              <Route exact path="/">
                <h1>Welcome to Gallerology</h1>
                <h2>Welcome, {currentUser.username}!</h2>
              </Route>
              <Route exact path="/artworks">
                <h1>Collections</h1>
                {showForm ? <NewCollectionForm updateCollection={updateCollection} /> : null}
                <div className="buttonContainer">
                  <button onClick={handleClick}>Add Collection</button>
                </div>
                <ArtsContainer 
                  collections={collections} 
                  currentUser={currentUser}
                  setCollections={setCollections}
                  handleDeleteCollection={handleDeleteCollection} />
              </Route>
              <Route path='/users/:id'>
              </Route>
              <Route exact path="/artworks/:id/edit">
                <EditCollectionForm updateCollection={updateCollection}/>
              </Route>
              <Route exact path="/maestros">
                <h1>Maestros</h1>
                <MaestrosContainer 
                  maestros={maestros} 
                  setMaestros={setMaestros}
                  currentUser={currentUser}/>
              </Route>
          </Switch>
        }
      </div>
    </BrowserRouter>
  );
} 


export default App;