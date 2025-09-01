import React from 'react'
import { Link } from 'react-router-dom'
import { superbase } from '../client'
export const deleteCreator = async (id) => {await superbase
  .from('creators')
  .delete()
  .eq('id', `${id}`)
}
function CreatorCard(props) {
  return (
    <div>
      <Link to={'/creator/'+props.id}>
        <img src={props.imgURL} alt="creator image" />
      </Link>
      <div>

        <h3>{props.name}</h3>
        <a href={props.url}>{props.tag}</a>
        <p>{props.desc}</p>
        <button><Link to={'/edit/' + props.id} >edit</Link></button>
        <button onClick={()=>deleteCreator(props.id)}>Delete</button>
      </div>
    </div>
  )
}

export default CreatorCard
