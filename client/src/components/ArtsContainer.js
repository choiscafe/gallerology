import ArtCard from './ArtCard'

function ArtsContainer({ collections, handleDeleteCollection }) {

  const collection = collections.map((collection) => {
    return (
      <ArtCard
        key={collection.id}
        artwork={collection}
        onDelete={handleDeleteCollection}
      />  
    )
  })

  return (
    <ul className="arts-cards">{collection}</ul>
  )
}

export default ArtsContainer