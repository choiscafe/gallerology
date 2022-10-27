import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from './NavBar';
import ArtsContainer from './ArtsContainer'
import MaestrosContainer from './MaestrosContainer'
import NewCollectionForm from './NewCollectionForm'
import EditCollectionForm from './EditCollectionForm'

function App() {
  const [collections, setCollections] = useState([]);
  const [maestros, setMaestros] = useState([]);
  const [showForm, setShowForm] = useState(false);

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
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Switch>
          <Route exact path="/login">
            <h1>Login</h1>
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
          {/* <Route exact path="/form">
            <h1>Add New Gem</h1><NewCollectionForm collections={collections} setCollections={setCollections}/>
          </Route> */}
          <Route exact path="/">
            <h1>Welcome to Gallerology</h1>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;