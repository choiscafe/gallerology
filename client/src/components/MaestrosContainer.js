import MaestroCard from './MaestroCard'

function MaestrosContainer({ maestros, setMaestros, currentUser }) {

  
  let currentUserArtists = maestros.filter((artist) => artist.users.find(user => user.id === currentUser.id))

  const artist = currentUserArtists.map((maestro) => {

    return (
      <MaestroCard
        key={maestro.id}
        maestro={maestro}
        setMaestros={setMaestros}
      />
    )  
  })
  return (
    <ul className="artist-cards">{artist}</ul>
  )
}

export default MaestrosContainer