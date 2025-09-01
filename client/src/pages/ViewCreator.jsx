import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { superbase } from '../client'
import { Link } from 'react-router-dom';
import { deleteCreator } from '../components/CreatorCard';
function ViewCreator() {
    const [creator, setCreator] = useState(null);
    const{id} = useParams();
        useEffect(()=>{
            async function getCreators() {
                // console.log('creator id: ', id)
                const {data,err} =await superbase.from('creators').select().eq('id', `${id}`)
                if (!data) console.log('nothing returned');
                if (err) console.log('error getting data: ', 
                    err);
                setCreator(data[0])
            }
            getCreators();
        }, [])
  return (
    <div>
      <p><Link to ='/home'>{'<- back'}</Link></p>
      <h1>{creator?.name}</h1>
      <img src={creator?.imgurl} alt="creator image" />
      <p><a href={creator?.url}>{creator?.tag}</a></p>
      <p>{creator?.description}</p>
      <button><Link to = {'/edit/'+ creator?.id} >edit</Link></button>
      <button onClick={()=>deleteCreator(creator?.id)}>Delete</button>

    </div>
  )
}

export default ViewCreator
