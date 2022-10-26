import ArtCard from './ArtCard'

function ArtsContainer({ collections }) {

  const collectionsList = collections.map((artwork) => {
    return (
      <ArtCard
      key={artwork.id}
        artwork={artwork}
      />  
    )
  })

  return (
    <ul className="arts-cards">{collectionsList}</ul>
  )
}

export default ArtsContainer