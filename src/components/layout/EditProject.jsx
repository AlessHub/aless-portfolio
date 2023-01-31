import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { editProject, getElementById } from '../../services/Api'

const url = 'http://localhost:8000/api/projects/'


const Edit = () => {
    
    const [title, setTitle] = useState('');
    const [link, setLink] = useState('');
    const [image_path, setImage_path] = useState('');
    const navigate = useNavigate();
    const {id} = useParams()

  const handleUpdate = async (e) => {
    e.preventDefault();
    await axios.put(`${url}${id}`, {
      title: title,
      link: link,
      image_path: image_path
    } )
    navigate('/')
  }
  useEffect( () => {
    const getElementsById = async () => {
      const response = await axios.get(`${url}${id}`);
        console.log(response)

        setTitle(response.data.title || '');
        setLink(response.data.link || '');
        setImage_path(response.data.image_path || '');
    }
    getElementsById();
  }, [])
  return (
    <div>
              <h3>Edit</h3>
        <form onSubmit={handleUpdate}>
            <div className='mb-3'>
                <label className='form-label'> title </label>
                <input 
                value={title} 
                onChange={(e)=> setTitle(e.target.value)} 
                type="text"  className='form-control'/>
            </div>
            <div className='mb-3'>
                <label className='form-label'> link </label>
                <input 
                value={link} 
                onChange={(e)=> setLink(e.target.value)} 
                type="text"  className='form-control'/>
            </div>
            <div className='mb-3'>
                <label className='form-label'> image </label>
                <input 
                value={image_path} 
                onChange={(e)=> setImage_path(e.target.value)} 
                type="text"  className='form-control'/>
            </div>
            <button type="submit" className='btn btn-success'>Edit</button>
        </form>
    </div>
  )
}

export default Edit;