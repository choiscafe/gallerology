import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import ArtCard from './ArtCard'

function UserPage({setCollections, handleDeleteCollection }){
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)
    const [errors, setErrors] = useState(false)
    
    const params = useParams()
    const {id} = params

    useEffect(()=>{
        fetch(`/users/${id}`)
        .then(res => {
            if(res.ok){
                res.json().then(user => {
                    setUser(user)
                    setLoading(false)
                })
            }else {
                res.json().then(data => setErrors(data.errors))
            }
        })
       
    },[])

    const collection = user.collections.map((collection) => {
      return (
        <ArtCard
          key={collection.id}
          artwork={collection}
          setCollections={setCollections}
          onDelete={handleDeleteCollection}
        />  
      )
    })

    if(loading) return <h1>Loading</h1>
    if(errors) return <h1>{errors}</h1>
    return (
        <div>
            <h1>{user.username}</h1>
            <h3>Collections</h3>
            <ul className="arts-cards">{collection}</ul>
        </div>
    )
}

export default UserPage