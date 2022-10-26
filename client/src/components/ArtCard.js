function ArtCard({ artwork }) {

  const {image, title, year, gallery, exhibition, notes, seenDate, artist_id} = artwork

  return (
    <ul className="art-card">
      <img src={image} alt={title} />
      <h4>{title}</h4>
      <p>{year}</p>
      <p>{gallery}</p>
      <p>{exhibition}</p>
      <p>{notes}</p>
      <p>{seenDate}</p>
      <p>{artist_id}</p>
    </ul>
  )
}
export default ArtCard