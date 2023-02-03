import React, { useEffect, useState } from 'react'
import { getAllProjects } from '../../../services/Api'
import { Link } from 'react-router-dom';

const PortfolioSection = () => {
const imgUrl = 'http://127.0.0.1:8000/storage/';
const [projects, setProjects] = useState([]);

useEffect( () => {
    getProjects();
}, [])

const getProjects = async () => {
    const response = await getAllProjects();
    setProjects(response.data);
}
return (
<div>
            {
                projects.map( (project) => (
                   <img src={imgUrl + project.image_path} alt="project"/>
                ))
            }
</div>
)
}

export default PortfolioSection;