import axios from "axios";

const API_URL = "http://localhost:8185/api/applications";

export const getAllApplications = () => axios.get(`${API_URL}/`);
export const getApplicationById = (id) => axios.get(`${API_URL}/${id}`);
export const createApplications = (application) =>
  axios.post(`${API_URL}/create`, application);
export const updateApplications = (application) =>
  axios.put(`${API_URL}/edit`, application);
export const deleteApplications = (id) =>
  axios.delete(`${API_URL}/delete/${id}`);
export const getApplicationsByTaskId = (taskId) =>
  axios.get(`${API_URL}/task/${taskId}`);
// ✅ Get assignments by developer ID
// ✅ Get applications by developer ID
export const getApplicationsByDeveloperId = (developerId) => {
  return axios.get(`${API_URL}/developer/${developerId}`);
};
export const updateApplicationStatus = (id, status) => {
  return axios.put(`${API_URL}/update-status/${id}?status=${status}`);
};

// export const userLogin = (emailid, password) => {
//   const params = new URLSearchParams();
//   params.append("emailid", emailid);
//   params.append("password", password);

//   return axios.post(`${API_URL}/login`, params, {
//     headers: {
//       "Content-Type": "application/x-www-form-urlencoded",
//     },
//   });
// };
