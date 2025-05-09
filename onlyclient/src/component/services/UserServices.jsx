import axios from "axios";

const API_URL = "http://localhost:8185/api/users";

export const getUsers = () => axios.get(`${API_URL}/`);
export const getUsersId = (id) => axios.get(`${API_URL}/${id}`);
export const createUsers = (user) => axios.post(`${API_URL}/create`, user);
export const updateUsers = (user) => axios.put(`${API_URL}/edit`, user);
export const deleteUsers = (id) => axios.delete(`${API_URL}/delete/${id}`);

export const userLogin = (emailid, password) => {
  const params = new URLSearchParams();
  params.append("emailid", emailid);
  params.append("password", password);

  return axios.post(`${API_URL}/login`, params, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
};
