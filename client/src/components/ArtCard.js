function ArtCard({ artwork, onDelete }) {

  const {id, image, title, year, gallery, exhibition, notes, seenDate, artist_id} = artwork

  function handleDeleteClick() {
    fetch(`/artworks/${id}`, {
      method: 'DELETE',
    }).then((r) => {
      if (r.ok) {
        onDelete(artwork)
      }
    })
  }

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
      <span> <button className='del-btn' onClick={handleDeleteClick}><strong>X</strong></button></span>
    </div>
  )
}
export default ArtCard