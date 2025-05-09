import axios from "axios";

const API_URL = "http://localhost:8185/api/tasks";

export const getAllTasks = () => axios.get(`${API_URL}/`);
export const getTasksById = (id) => axios.get(`${API_URL}/${id}`);
export const createTasks = (task) => axios.post(`${API_URL}/create`, task);
export const updateTasks = (task) => axios.put(`${API_URL}/edit`, task);
export const deleteTasks = (id) => axios.delete(`${API_URL}/delete/${id}`);

// ✅ NEW: Get tasks by client/user ID
export const getTasksByClientId = (clientId) =>
  axios.get(`${API_URL}/client/${clientId}`);
