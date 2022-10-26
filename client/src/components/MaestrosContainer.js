
function MaestrosContainer({ maestros }) {

const maestroList = maestros.map((maestro) => {
    return (
      <ul className="maestros-container" key={maestro.id}>
        <h4>{maestro.name}</h4>
        <p>{maestro.birthPlace}</p>
        <p>{maestro.activeYears}</p>
      </ul>
    )  
  })
  return (
    maestroList
  )
}

export default MaestrosContainer