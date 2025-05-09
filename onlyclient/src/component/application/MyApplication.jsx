import React, { useEffect, useState } from "react";
import {
  getApplicationsByDeveloperId,
  updateApplicationStatus,
} from "../services/ApplicationServices";
import {
  getAssignmentsByDeveloperId,
  updateAssignment,
} from "../services/AssignmentServices";
import { getTasksById } from "../services/TaskServices";
import "./myapplications.css";

const MyApplication = () => {
  const [applications, setApplications] = useState([]);
  const [taskDetails, setTaskDetails] = useState({});
  const [assignments, setAssignments] = useState([]);
  const [submissionUrls, setSubmissionUrls] = useState({});
  const developerId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const res = await getApplicationsByDeveloperId(developerId);
        setApplications(res.data);

        const taskMap = {};
        for (let app of res.data) {
          const taskId = app.task.id;
          if (!taskMap[taskId]) {
            const taskRes = await getTasksById(taskId);
            taskMap[taskId] = taskRes.data;
          }
        }
        setTaskDetails(taskMap);
      } catch (error) {
        console.error("Error fetching developer applications:", error);
      }
    };

    const fetchAssignments = async () => {
      try {
        const res = await getAssignmentsByDeveloperId(developerId);
        const assignmentsWithLocalStorage = res.data.map((a) => {
          const localData = localStorage.getItem(`submission_${a.id}`);
          if (localData) {
            const parsed = JSON.parse(localData);
            return {
              ...a,
              submissionUrl: parsed.submissionUrl,
              isCompleted: parsed.isCompleted,
            };
          }
          return a;
        });
        setAssignments(assignmentsWithLocalStorage);
      } catch (error) {
        console.error("Error fetching assignments:", error);
      }
    };

    if (developerId) {
      fetchApplications();
      fetchAssignments();
    }
  }, [developerId]);

  const handleAccept = async (id) => {
    await updateApplicationStatus(id, "ACCEPTED");
    alert("You accepted the offer.");
    window.location.reload();
  };

  const handleReject = async (id) => {
    await updateApplicationStatus(id, "REJECTED");
    alert("You rejected the offer.");
    window.location.reload();
  };

  const handleSubmitUrl = async (assignmentId) => {
    const submissionUrl = submissionUrls[assignmentId];
    if (!submissionUrl) return alert("Please enter a URL before submitting.");

    try {
      await updateAssignment({
        id: assignmentId,
        submissionUrl,
        isCompleted: true,
      });

      // Save in localStorage
      localStorage.setItem(
        `submission_${assignmentId}`,
        JSON.stringify({ submissionUrl, isCompleted: true })
      );

      // Update assignments state locally
      setAssignments((prev) =>
        prev.map((a) =>
          a.id === assignmentId ? { ...a, submissionUrl, isCompleted: true } : a
        )
      );

      alert("Submission URL submitted successfully.");
    } catch (error) {
      console.error("Submission failed:", error);
      alert("Failed to submit URL.");
    }
  };

  const getAssignmentByTaskId = (taskId) =>
    assignments.find((a) => a.task.id === taskId);

  return (
    <div className="my-applications-container">
      <h2>My Applications</h2>
      {applications.length === 0 ? (
        <p>You haven’t applied to any tasks yet.</p>
      ) : (
        applications.map((app) => {
          const taskId = app.task.id;
          const task = taskDetails[taskId];
          const assignment = getAssignmentByTaskId(taskId);
          const clientName = assignment?.task?.client?.name;

          return (
            <div key={app.id} className="application-card">
              <h3>{task?.title || "Loading task title..."}</h3>
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

              {clientName && (
                <p style={{ color: "blue" }}>
                  Assigned by Client: <strong>{clientName}</strong>
                </p>
              )}

              {app.status === "PENDING" && (
                <div>
                  <button onClick={() => handleAccept(app.id)}>Accept</button>
                  <button onClick={() => handleReject(app.id)}>Reject</button>
                </div>
              )}

              {app.status === "ACCEPTED" && (
                <>
                  <p style={{ color: "green" }}>You accepted the offer.</p>

                  {assignment && (
                    <>
                      <p>
                        <strong>Submission URL:</strong>{" "}
                        {assignment.submissionUrl ? (
                          <a
                            href={assignment.submissionUrl}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {assignment.submissionUrl}
                          </a>
                        ) : (
                          "Not submitted yet"
                        )}
                      </p>
                      <p>
                        <strong>Completed:</strong>{" "}
                        {assignment.isCompleted ? "✅ Yes" : "❌ No"}
                      </p>

                      {!assignment.isCompleted && (
                        <div>
                          <input
                            type="text"
                            placeholder="Enter submission URL"
                            value={submissionUrls[assignment.id] || ""}
                            onChange={(e) =>
                              setSubmissionUrls((prev) => ({
                                ...prev,
                                [assignment.id]: e.target.value,
                              }))
                            }
                          />
                          <button
                            onClick={() => handleSubmitUrl(assignment.id)}
                          >
                            Submit & Complete
                          </button>
                        </div>
                      )}
                    </>
                  )}
                </>
              )}

              {app.status === "REJECTED" && (
                <p style={{ color: "red" }}>You rejected the offer.</p>
              )}
            </div>
          );
        })
      )}
    </div>
  );
};

export default MyApplication;
