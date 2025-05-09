import React, { useState } from "react";
import { createUsers } from "../services/UserServices"; // import createUsers function from service
import "./auth.css";

const SignUP = () => {
  const [formData, setFormData] = useState({
    name: "",
    emailid: "",
    password: "",
    role: "CLIENT",
  });
  const [error, setError] = useState(""); // State to handle errors

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error state before submitting

    try {
      const response = await createUsers(formData); // Sending form data to backend
      console.log("User created successfully:", response.data);
      // Redirect to login page or show success message after successful signup
    } catch (err) {
      console.error("Error creating user:", err);
      setError("An error occurred. Please try again."); // Show error message
    }
  };

  return (
    <div className="auth-container">
      <h2>Signup</h2>
      {error && <p className="error-msg">{error}</p>}{" "}
      {/* Display error message if exists */}
      <form className="auth-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="emailid"
          placeholder="Email"
          value={formData.emailid}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <select name="role" value={formData.role} onChange={handleChange}>
          <option value="CLIENT">Client</option>
          <option value="DEVELOPER">Developer</option>
        </select>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default SignUP;
