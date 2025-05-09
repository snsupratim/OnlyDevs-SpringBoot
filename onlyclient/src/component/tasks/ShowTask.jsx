import React, { useState, useEffect } from "react";
import { getTasksByClientId, deleteTasks } from "../services/TaskServices";
import { getApplicationsByTaskId } from "../services/ApplicationServices";
import { Link, useNavigate } from "react-router-dom";
import "./showtask.css";

const ShowTask = () => {
  const [tasks, setTasks] = useState([]);
  const [applicationCounts, setApplicationCounts] = useState({});
  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTasksAndApplications = async () => {
      try {
        const taskRes = await getTasksByClientId(userId);
        const taskList = taskRes.data;
        setTasks(taskList);

        const counts = {};
        await Promise.all(
          taskList.map(async (task) => {
            const apps = await getApplicationsByTaskId(task.id);
            console.log(task.id);
            counts[task.id] = apps.data.length;
          })
        );
        setApplicationCounts(counts);
      } catch (error) {
        console.error("Error fetching tasks or application counts:", error);
      }
    };

    if (userId) fetchTasksAndApplications();
  }, [userId]);

  const handleDelete = async (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this task?"
    );
    if (!confirm) return;

    try {
      await deleteTasks(id);
      setTasks((prev) => prev.filter((task) => task.id !== id));
      alert("Task deleted successfully!");
    } catch (error) {
      console.error("Error deleting task:", error);
      alert("Failed to delete task.");
    }
  };

  return (
    <div className="task-list-container">
      <h2>Your Posted Tasks</h2>
      {tasks.length === 0 ? (
        <p>No tasks found.</p>
      ) : (
        tasks.map((task) => (
          <div className="task-card" key={task.id}>
            <h3>{task.title}</h3>
            <p>
              <strong>Description:</strong> {task.description}
            </p>
            <p>
              <strong>Skills Required:</strong> {task.skillsRequired}
            </p>
            <p>
              <strong>Budget:</strong> ${task.budget}
            </p>
            <p>
              <strong>Deadline:</strong> {task.deadline}
            </p>

            <p>
              <strong>Applications:</strong>{" "}
              <Link to={`/view-applications/${task.id}`}>
                {applicationCounts[task.id] || 0} view
              </Link>
            </p>

            <div className="task-actions">
              <Link to={`/edit-task/${task.id}`}>
                <button className="update-btn">Update</button>
              </Link>
              <button
                className="delete-btn"
                onClick={() => handleDelete(task.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ShowTask;
