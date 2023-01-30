import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createProject } from '../../services/Api'

const CreateProject = () => {
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [image_path, setImage_path] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
      await createProject({ title, link, image_path });
      navigate('/');
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
          <label className="form-label"> email </label>
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
            value={image_path}
            onChange={(e) => setImage_path(e.target.value)}
            type="text"
            className="form-control"
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