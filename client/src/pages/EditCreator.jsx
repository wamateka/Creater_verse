import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { superbase } from '../client';

function EditCreator() {
    const [updating, setUpdating] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        tag: "",
        url: "",
        description: "",
        imgurl: "",
    })
    const {id} = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
        async function getInfo() {
            const {data,err} = await superbase
                .from('creators')
                .select()
                .eq('id', `${id}`)
            if (!data) console.log('nothing returned')
            if (err) console.log('error getting data: ', 
                    err);
            setFormData(data[0])
            
        }
        getInfo();
    }, [])
    async function updateCreator(e){
        e.preventDefault();
        setUpdating(true)
        const {error} = await superbase
            .from('creators')
            .update(formData)
            .eq('id', `${id}`)
        
        navigate('/home')
        
    }
        function handleChange(e){
        const {value,name} = e.target
        setFormData(prevData =>{
            return{...prevData, [name]:value}
        })
    }
  return (
<div>
        <p><Link to ='/home'>{'<- back'}</Link></p>
        { updating ? 
         (
            <p>updating Creator</p>
         ):
         (    <div>
        <h1>Edit creator</h1>
        <form 
        style={{display: 'flex', flexDirection: 'column', width: '50%'}}
        onSubmit={(e)=> {updateCreator(e)}}
        >
            <label htmlFor="name"> Name</label>
            <input type="text" name='name' value={formData.name} onChange={handleChange}/>
            <label htmlFor="url"> link</label>
            <input type="text" name='url' value={formData.url} onChange={handleChange} />
            <label htmlFor="name"> tag</label>
            <input type="text" name='tag' value={formData.tag} onChange={handleChange} />
            <label htmlFor="description"> description</label>
            <input type="text" name='description'value={formData.description} onChange={handleChange} />
            <label htmlFor="imgurl"> image Link</label>
            <input type="text" name='imgurl' value={formData.imgurl} onChange={handleChange} />
            <input type="submit" placeholder='add creator' />
        </form>      
    </div>)
        }
    </div>
  )
}

export default EditCreator
