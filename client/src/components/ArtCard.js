import { Link, useHistory } from 'react-router-dom'
import { useState } from 'react'

function ArtCard({ artwork, onDelete }) {

  const [errors, setErrors] = useState()

  const history = useHistory()

  const {id, image, title, year, gallery, exhibition, notes, seenDate, artist_id} = artwork

  function handleDeleteClick() {
    fetch(`/artworks/${id}`, {
      method: 'DELETE'
    }).then((res) => {
      if (res.ok) {
        onDelete(id)
        history.push('/')
      } else {
        res.json().then(data => setErrors(data.errors))
      }
    })
  }

  if(errors) return <h1>{errors}</h1>
  

  return (
    <div className="art-card">
      <img src={image} alt={title} />
      <h4>{title}</h4>
      <p>{year}</p>
      <p>{gallery}</p>
      <p>{exhibition}</p>
      <p>{notes}</p>
      <p>{seenDate}</p>
      <p>{artist_id}</p>
      <span> <button className='edit-btn'><Link to={`/artworks/${id}/edit`}>Edit Collection</Link></button></span>
      <span> <button className='del-btn' onClick={handleDeleteClick}><strong>Delete Collection</strong></button></span>
    </div>
  )
}
export default ArtCard