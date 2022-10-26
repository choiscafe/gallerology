import React, { useState } from "react";

function NewCollectionForm({ handleAddCollection }) {

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

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  //Post New Art
  function handleSubmit(event) {
    event.preventDefault();

    const newCollection = {...formData}

    fetch('/artworks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newCollection),
      })
      .then((r) => r.json())
      .then((newCollection) => {
        setFormData({
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
        handleAddCollection(newCollection)
      })
  }

  
  return (
    <div className="new-collection-form">
      <div className="new-collection-form__header">
        <h1>New Collection</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" name="title" onChange={handleChange} value={formData.title} placeholder="Collection Title" /><br/>
          <input type="number" name="year" onChange={handleChange} value={formData.year} placeholder="Collection Year" /><br/>
          <input type="number" name="artist_id" onChange={handleChange} value={formData.artist_id} placeholder="Collection Artist" /><br/>
          <input type="number" name="user_id" onChange={handleChange} value={formData.user_id} placeholder="Collection User" /><br/>
          <input type="text" name="gallery" onChange={handleChange} value={formData.gallery} placeholder="Gallery/Museum name" /><br/>
          <input type="text" name="exhibition" onChange={handleChange} value={formData.exhibition} placeholder="Collection Exhibition" /><br/>
          <input type="text" name="notes" onChange={handleChange} value={formData.notes} placeholder="Notes" /><br/>
          <input type="date" name="seenDate" onChange={handleChange} value={formData.seenDate} placeholder="Date seen" /><br/>
          <input type="text" name="image" onChange={handleChange} value={formData.image} placeholder="Image URL" /><br/>
          <input type="submit" name="submit" value="Create New Collection" className="submit" />
        </form>
      </div>
    </div>
  )}

  export default NewCollectionForm