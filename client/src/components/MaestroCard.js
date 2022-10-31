import { Link, useHistory } from 'react-router-dom'
import { useState } from 'react'

function MaestroCard({ maestro, setMaestros }) {

  const [errors, setErrors] = useState()

  const history = useHistory()

  const {id, name, birthPlace, activeYears} = maestro

  if(errors) return <h1>{errors}</h1>
  
  return (
    <div className="artist-card">
      <h4>{name}</h4>
      <p>{birthPlace}</p>
      <p>{activeYears}</p>{" "}
      {/* <span> <button className='edit-btn'><Link to={`/artists/${id}/edit`}>Edit Maestro</Link></button></span> */}
    </div>
  )
}
export default MaestroCard