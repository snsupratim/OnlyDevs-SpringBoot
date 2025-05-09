import React, { useState, useEffect } from "react";
import { getTasksById, updateTasks } from "../services/TaskServices";
import { useParams, useNavigate } from "react-router-dom";
import "./createtask.css"; // reuse same styling

const EditTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [task, setTask] = useState({
    id: id,
    title: "",
    description: "",
    skillsRequired: "",
    budget: "",
    deadline: "",
  });

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await getTasksById(id);
        const data = response.data;
        setTask({
          id: data.id,
          title: data.title,
          description: data.description,
          skillsRequired: data.skillsRequired,
          budget: data.budget,
          deadline: data.deadline,
        });
      } catch (err) {
        console.error("Error fetching task:", err);
        alert("Task not found.");
      }
    };

    fetchTask();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateTasks(task);
      alert("Task updated successfully!");
      navigate("/browse-tasks");
    } catch (err) {
      console.error("Error updating task:", err);
      alert("Failed to update task.");
    }
  };

  return (
    <div className="task-form-container">
      <h2>Edit Task</h2>
      <form className="task-form" onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={task.title}
          onChange={handleChange}
          required
        />

        <label>Description:</label>
        <textarea
          name="description"
          value={task.description}
          onChange={handleChange}
          required
        />

        <label>Skills Required:</label>
        <input
          type="text"
          name="skillsRequired"
          value={task.skillsRequired}
          onChange={handleChange}
          required
        />

        <label>Budget ($):</label>
        <input
          type="number"
          name="budget"
          value={task.budget}
          onChange={handleChange}
          required
        />

        <label>Deadline:</label>
        <input
          type="date"
          name="deadline"
          value={task.deadline}
          onChange={handleChange}
          required
        />

        <button type="submit">Update Task</button>
      </form>
    </div>
  );
};

export default EditTask;
