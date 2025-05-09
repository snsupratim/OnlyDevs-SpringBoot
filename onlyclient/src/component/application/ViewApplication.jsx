// src/pages/ViewApplication.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getApplicationsByTaskId } from "../services/ApplicationServices";
import {
  createAssignment,
  getAssignmentsByTaskId,
} from "../services/AssignmentServices";
import "./viewapplication.css";

const ViewApplication = () => {
  const { taskId } = useParams();
  const [applications, setApplications] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const [assignedDevIds, setAssignedDevIds] = useState(new Set());

  useEffect(() => {
    const fetchData = async () => {
      try {
        const appsRes = await getApplicationsByTaskId(taskId);
        setApplications(appsRes.data);

        const assignRes = await getAssignmentsByTaskId(taskId);
        setAssignments(assignRes.data);
        const assignedIds = new Set(assignRes.data.map((a) => a.developer.id));
        setAssignedDevIds(assignedIds);
      } catch (error) {
        console.error("Error fetching applications or assignments:", error);
      }
    };

    fetchData();
  }, [taskId]);

  const handleAssign = async (developerId) => {
    if (assignedDevIds.has(developerId))
      return alert("Developer already assigned.");

    try {
      await createAssignment({
        task: { id: parseInt(taskId) },
        developer: { id: developerId },
        assignedAt: new Date().toISOString(),
        isCompleted: false,
        submissionUrl: "",
      });

      alert("Developer assigned successfully!");
      setAssignedDevIds((prev) => new Set(prev).add(developerId));
    } catch (error) {
      console.error("Error assigning developer:", error);
      alert("Failed to assign developer.");
    }
  };

  return (
    <div className="application-list">
      <h2>Applications for Task #{taskId}</h2>
      {applications.length === 0 ? (
        <p>No applications yet.</p>
      ) : (
        applications.map((app) => (
          <div className="application-card" key={app.id}>
            <h4>Developer ID: {app.developer.id}</h4>
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
            <label>
              <input
                type="checkbox"
                checked={assignedDevIds.has(app.developer.id)}
                onChange={() => handleAssign(app.developer.id)}
                disabled={assignedDevIds.has(app.developer.id)}
              />
              {assignedDevIds.has(app.developer.id)
                ? " Developer Assigned"
                : " Assign Developer"}
            </label>
          </div>
        ))
      )}
    </div>
  );
};

export default ViewApplication;
