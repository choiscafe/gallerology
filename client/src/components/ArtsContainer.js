import ArtCard from './ArtCard'

function ArtsContainer({ collections, setCollections, handleDeleteCollection, currentUser }) {
  
    let currentUserArts = collections.filter((art) => art.user_id === currentUser.id)
   
    const collection = currentUserArts.map((collection) => {

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