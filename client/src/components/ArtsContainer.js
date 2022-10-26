import ArtCard from './ArtCard'

function ArtsContainer({ collections }) {

  const collection = collections.map((collection) => {
    return (
      <ArtCard
        key={collection.id}
        artwork={collection}
      />  
    )
  })

  return (
    <ul className="arts-cards">{collection}</ul>
  )
}

export default ArtsContainer