import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createProject } from '../../services/Api'
import axios from 'axios';

const CreateProject = () => {
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [image_path, setImage_path] = useState('');
  const navigate = useNavigate();

  const url = 'http://localhost:8000/api/projects/'

  const handleChange = (event) => {
    let value = event.target.files ? event.target.files[0] : event.target.files;
    if (event.target.files) {
      setImage_path(value)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let formData = new FormData();
    formData.append("title", title)
    formData.append("link", link)
    formData.append("image_path", image_path);
    axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      window.location.reload(true)
    };

  return (
    <div>
      <h3>Create</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label"> Title </label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label"> Link </label>
          <input
            value={link}
            onChange={(e) => setLink(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label"> Image </label>
          <input
            onChange={handleChange}
            type="file"
            className="form-control"
            accept ="image/*"
          />
        </div>
        <button type="submit" className="btn btn-success">
          Store
        </button>
      </form>
    </div>
  );
};

export default CreateProject;