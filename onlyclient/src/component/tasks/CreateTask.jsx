import React, { useState, useEffect } from "react";
import { createTasks } from "../services/TaskServices";
import "./createtask.css";

const CreateTask = () => {
  const [userId, setUserId] = useState(null);
  const [task, setTask] = useState({
    title: "",
    description: "",
    skillsRequired: "",
    budget: "",
    deadline: "",
  });

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) setUserId(storedUserId);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userId) {
      alert("User not logged in");
      return;
    }

    const taskData = {
      ...task,
      client: { id: parseInt(userId) }, // 👈 wrap userId in object
    };

    try {
      const response = await createTasks(taskData);
      console.log("Task created:", response.data);
      alert("Task posted successfully!");
      setTask({
        title: "",
        description: "",
        skillsRequired: "",
        budget: "",
        deadline: "",
      });
    } catch (err) {
      console.error("Error creating task:", err);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="task-form-container">
      <h2>Create New Task</h2>
      <form className="task-form" onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          placeholder="Enter task title"
          value={task.title}
          onChange={handleChange}
          required
        />

        <label>Description:</label>
        <textarea
          name="description"
          placeholder="Describe the task"
          value={task.description}
          onChange={handleChange}
          required
        />

        <label>Skills Required:</label>
        <input
          type="text"
          name="skillsRequired"
          placeholder="e.g. React, Node.js"
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

        <button type="submit">Post Task</button>
      </form>
    </div>
  );
};

export default CreateTask;
