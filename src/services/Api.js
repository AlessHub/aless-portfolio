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
      const response = await axios.post(`${url}/projects`, project, {
        'Content-Type': 'multipart/form-data'
      });
      return response.data;
    } catch (error) {
      console.log("ERRRR:: ",error.response.data);

    }
  };

  // export const editProject = async (id, project) => {
  //   try {
  //     const response = await axios.patch(`${url}/${id}`, project);
  //     console.log(response)
  //     return response.data;
  //   } catch (error) {
  //     console.error(error);
  //     return error.response.data;
  //   }
  // };