import axios from "axios";
const baseUrl = `http://localhost:4000/class`;

export const ClassService = {
  getAllClass,
  getByIdClass,
  createClass,
  updateClass,
  deleteClass, 
};

function getAllClass() {
  return axios.get(`${baseUrl}/show`);
}

function getByIdClass(id) {
  return axios.get(`${baseUrl}/show/${id}`);
}

function createClass(params) {
  return axios.post(`${baseUrl}/create`, params);
}

function updateClass(id, params) {
  return axios.put(`${baseUrl}/edit/${id}`, params);
}

function deleteClass(id) {
  return axios.delete(`${baseUrl}/delete/${id}`);
}
