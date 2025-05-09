import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { createApplications } from "../services/ApplicationServices";
import "./createapplication.css";

const CreateApplication = () => {
  const { taskId } = useParams();
  const [developerId, setDeveloperId] = useState(null);
  const [proposal, setProposal] = useState("");

  useEffect(() => {
    const storedDevId = localStorage.getItem("userId");
    if (storedDevId) setDeveloperId(storedDevId);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!developerId || !taskId) {
      alert("Missing user or task information.");
      return;
    }

    const application = {
      proposal,
      task: { id: taskId },
      developer: { id: developerId },
    };

    try {
      const response = await createApplications(application);
      console.log("Application submitted:", response.data);
      alert("Application sent!");
      setProposal("");
    } catch (err) {
      console.error("Error submitting application:", err);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="application-form-container">
      <h2>Submit Your Proposal</h2>
      <form className="application-form" onSubmit={handleSubmit}>
        <textarea
          placeholder="Write your proposal here..."
          value={proposal}
          onChange={(e) => setProposal(e.target.value)}
          required
        ></textarea>
        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
};

export default CreateApplication;
