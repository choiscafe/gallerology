import ArtCard from './ArtCard'

function ArtsContainer({ collections, setCollections, handleDeleteCollection }) {

  const collection = collections.map((collection) => {
    return (
      <ArtCard
        key={collection.id}
        artwork={collection}
        setCollections={setCollections}
        onDelete={handleDeleteCollection}
      />  
    )
  })

  return (
    <ul className="arts-cards">{collection}</ul>
  )
}

export default ArtsContainer