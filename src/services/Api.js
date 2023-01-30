import axios from 'axios';

const url = 'http://localhost:8000/api'

export const getAllProjects = () => {
    return axios.get(`${url}/projects`);
}

export const deleteProject = (id) => {
    return axios.delete(`${url}/projects/${id}`);
}

export const createProject = async (project) => {
    try {
      const response = await axios.post(`${url}/projects`, project);
      return response.data;
    } catch (error) {
      throw error;
    }
  };