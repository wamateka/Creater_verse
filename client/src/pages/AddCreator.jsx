import React, { useEffect, useState } from 'react'
import { superbase } from '../client';
import { Link } from 'react-router-dom';
function AddCreator() {
    const [adding, setAdding] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        tag: "",
        url: "",
        description: "",
        imgurl: "",
    })
    useEffect(()=>{
    })
    async function addCreator(e) {
        e.preventDefault();
        setAdding(true) 
        const {error} = await superbase
            .from('creators')
            .insert(formData)
            setAdding(false)
        
        setFormData({
        name: "",
        tag: "",
        url: "",
        description: "",
        imgurl: "",
    })
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
        { adding ? 
         (
            <p>adding user</p>
         ):
         (    <div>
        <h1>Add creator</h1>
        <form 
        style={{display: 'flex', flexDirection: 'column', width: '50%'}}
        onSubmit={(e)=> {addCreator(e)}}
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

export default AddCreator
