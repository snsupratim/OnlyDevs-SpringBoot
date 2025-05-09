// src/components/applications/AllApplications.jsx
import React, { useEffect, useState } from "react";
import { getAllApplications } from "../services/ApplicationServices";
import "./applications.css";

const AllApplications = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await getAllApplications();
        setApplications(response.data);
      } catch (error) {
        console.error("Error fetching applications:", error);
      }
    };

    fetchApplications();
  }, []);

  return (
    <div className="applications-container">
      <h2>All Applications</h2>
      {applications.length > 0 ? (
        <ul className="application-list">
          {applications.map((app) => (
            <li key={app.id} className="application-item">
              <h3>Task: {app.task?.title}</h3>
              <p>
                <strong>Description:</strong> {app.task?.description}
              </p>
              <p>
                <strong>Skills Required:</strong> {app.task?.skillsRequired}
              </p>
              <p>
                <strong>Budget:</strong> ${app.task?.budget}
              </p>
              <p>
                <strong>Deadline:</strong> {app.task?.deadline}
              </p>
              <hr />
              <p>
                <strong>Developer:</strong> {app.developer?.name} (
                {app.developer?.emailid})
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
        <p>No applications found.</p>
      )}
    </div>
  );
};

export default AllApplications;
