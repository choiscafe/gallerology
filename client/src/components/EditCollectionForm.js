import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"

function EditCollectionForm({ handleUpdateCollection }) {

  const [formData, setFormData] = useState({
    title: "",
    year: "",
    artist_id: "",
    user_id: "",
    gallery: "",
    exhibition: "",
    notes: "",
    seenDate: "",
    image: ""
  })

  const {id} = useParams()
//Get the Collection
  useEffect(() => {
    fetch(`/artworks/${id}`)
    .then(res => {
      if(res.ok){
        res.json().then(setFormData)
      }
    })
  }, [id])
//Patch
  function onSubmit(e){
    e.preventDefault()
    console.log('hi')
    fetch(`/artworks/${id}`, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({...formData, ongoing: true})
    })
    
    .then(res => {
      if(res.ok){
        res.json().then(handleUpdateCollection)
      }
    })
  }

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }
   
  return (
    <div className="new-collection-form">
      <div className="new-collection-form__header">
        <h1>New Collection</h1>
        <form onSubmit={onSubmit}>
          <input type="text" name="title" onChange={handleChange} value={formData.title} placeholder="Collection Title" /><br/>
          <input type="number" name="year" onChange={handleChange} value={formData.year} placeholder="Collection Year" /><br/>
          <input type="number" name="artist_id" onChange={handleChange} value={formData.artist_id} placeholder="Collection Artist" /><br/>
          <input type="number" name="user_id" onChange={handleChange} value={formData.user_id} placeholder="Collection User" /><br/>
          <input type="text" name="gallery" onChange={handleChange} value={formData.gallery} placeholder="Gallery/Museum name" /><br/>
          <input type="text" name="exhibition" onChange={handleChange} value={formData.exhibition} placeholder="Collection Exhibition" /><br/>
          <input type="text" name="notes" onChange={handleChange} value={formData.notes} placeholder="Notes" /><br/>
          <input type="date" name="seenDate" onChange={handleChange} value={formData.seenDate} placeholder="Date seen" /><br/>
          <input type="text" name="image" onChange={handleChange} value={formData.image} placeholder="Image URL" /><br/>
          <input type="submit" name="submit" value="Update Collection" className="submit" />
        </form>
      </div>
    </div>
  )}

  export default EditCollectionForm