// src/services/AssignmentServices.js

import axios from "axios";

const API_URL = "http://localhost:8185/api/assignments";

// Get all assignments
export const getAllAssignments = () => {
  return axios.get(`${API_URL}/`);
};

// Get assignment by ID
export const getAssignmentById = (id) => {
  return axios.get(`${API_URL}/${id}`);
};

// Get assignments by task ID
export const getAssignmentsByTaskId = (taskId) => {
  return axios.get(`${API_URL}/task/${taskId}`);
};
// ✅ Get assignments by developer ID
export const getAssignmentsByDeveloperId = (developerId) => {
  return axios.get(`${API_URL}/developer/${developerId}`);
};

export const assignDeveloper = (assignment) =>
  axios.post(`${API_URL}/create`, assignment);

// Create a new assignment
export const createAssignment = (assignmentData) => {
  return axios.post(`${API_URL}/create`, assignmentData);
};

// Update assignment
export const updateAssignment = (assignmentData) => {
  return axios.put(`${API_URL}/edit`, assignmentData);
};

// Delete assignment
export const deleteAssignment = (id) => {
  return axios.delete(`${API_URL}/delete/${id}`);
};
