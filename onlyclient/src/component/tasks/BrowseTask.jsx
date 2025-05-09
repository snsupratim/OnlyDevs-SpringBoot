import React, { useEffect, useState } from "react";
import { getAllTasks } from "../services/TaskServices";
import "./browsetask.css";
import { Link } from "react-router-dom";

const BrowseTask = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await getAllTasks();
        setTasks(response.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div className="browse-task-container">
      <h2>Available Tasks</h2>
      {tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        <div className="task-grid">
          {tasks.map((task) => (
            <div key={task.id} className="task-card">
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
              <Link to={`/createApplication/${task.id}`}>
                <button className="apply-btn">Apply</button>
              </Link>
              {/* <Link to={`/getApplications/${task.id}`}>
                <button className="view-applications-btn">
                  View Applications
                </button>
              </Link> */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BrowseTask;
