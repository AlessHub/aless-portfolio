import axios from 'axios';
import { getAllProjects } from './getAllProjects';

jest.mock('axios');
const url = 'http://localhost:8000/api'

describe('getAllProjects', () => {
  it('should make a GET request to the correct URL', async () => {
    const response = { data: [] };
    axios.get.mockResolvedValue(response);

    const result = await getAllProjects();

    expect(axios.get).toHaveBeenCalledWith(`${url}/projects`);
    expect(result).toEqual(response);
  });
});