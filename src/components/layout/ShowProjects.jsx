import React, { useEffect, useState } from 'react'
import { getAllProjects, deleteProject } from '../../services/Api'
import { Link } from 'react-router-dom';

const ShowProjects = () => {
const [projects, setProjects] = useState([]);

useEffect( () => {
    getProjects();
}, [])

const getProjects = async () => {
    const response = await getAllProjects();
    setProjects(response.data);
}

const handleDelete = async (id) => {
    await deleteProject(id);
    getProjects();
}
return (
<div>
    <table>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Image</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                projects.map( (project) => (
                    <tr key={project.id}>
                        <td>{project.title}</td>
                        <td>{project.image_path}</td>
                        <td>{project.link}</td>
                        <td>
                            <Link to={`/edit/${project.id}`} className='btn btn-warning'>Edit</Link>
                            <button onClick={() => handleDelete(project.id)} className="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                ))
            }
        </tbody>
    </table>
</div>
)
}

export default ShowProjects;