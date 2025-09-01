import React, { useEffect, useState } from 'react'
import { superbase } from '../client'
import CreatorCard from '../components/CreatorCard'
import { Link, useNavigate } from 'react-router-dom'
function ShowCreators() {
    const [data,setData] = useState(null)
    const navigate = useNavigate();
    useEffect(()=>{
        async function getCreators() {
            const {data,err} =await superbase.from('creators').select()
            if (!data) console.log('nothing returned');
            if (err) console.log('error getting data: ', 
                err);
            setData(data)
        }
        getCreators();
    },[])
    if (!data){
        return(
            <div>
                <h1>no content creators</h1>
            </div>
        )
    }
  return (
    <div>
      <p>My creators</p>
      <div>
        <p><Link to= "/add">
        New creator +
        </Link>
        </p>
      </div>
      <ul>
      {data && data.map((creator,i) =>
        <li 
            key={creator.id}
        >
            
            <CreatorCard
                id = {creator.id}
                name = {creator.name}
                url = {creator.url}
                desc = {creator.description}
                imgURL = {creator.imgurl}  
                tag = {creator.tag}             
            />
        </li>
      )}
      </ul>
    </div>
  )
}

export default ShowCreators
