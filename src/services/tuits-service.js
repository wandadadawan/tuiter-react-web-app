import axios from 'axios';

const TUITS_API = 'http://localhost:4000/api/tuits'; // must use full address starting from http://

export const createTuit = async (tuit) => {};
export const findTuits = async () => {
  const response = await axios.get(TUITS_API);
  return response.data;
};
export const deleteTuit = async (tid) => {
  const response = await axios.delete(`${TUITS_API}/${tid}`);
  return response.data;
};
export const updateTuit = async (tuit) => {};