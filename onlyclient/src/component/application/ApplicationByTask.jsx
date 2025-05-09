// src/components/applications/ApplicationsByTask.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getApplicationById } from "../services/ApplicationServices";
import "./applications.css";

const ApplicationsByTask = () => {
  const { taskId } = useParams();
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await getApplicationById(taskId);
        setApplications(response.data);
      } catch (error) {
        console.error("Failed to fetch applications:", error);
      }
    };

    fetchApplications();
  }, [taskId]);

  return (
    <div className="applications-container">
      <h2>Applications for Task #{taskId}</h2>
      {applications.length > 0 ? (
        <ul className="application-list">
          {applications.map((app) => (
            <li key={app.id} className="application-item">
              <p>
                <strong>Developer:</strong> {app.developer?.name}
              </p>
              <p>
                <strong>Proposal:</strong> {app.proposal}
              </p>
              <p>
                <strong>Status:</strong> {app.status}
              </p>
              <p>
                <strong>Applied At:</strong>{" "}
                {new Date(app.appliedAt).toLocaleString()}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No applications for this task yet.</p>
      )}
    </div>
  );
};

export default ApplicationsByTask;
