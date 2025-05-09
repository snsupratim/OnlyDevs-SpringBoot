import React, { useState } from "react";
import { userLogin } from "../services/UserServices"; // relative path from registration to service
import "./login.css";

const LogIN = () => {
  const [emailid, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const formhandle = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await userLogin(emailid, password);
      console.log("Login successful:", response.data);
      // You can store token or redirect user here
      localStorage.setItem("userId", response.data.id);
    } catch (err) {
      console.error("Login failed:", err);
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login to OnlyDevs</h2>
      {error && <p className="error-msg">{error}</p>}
      <form onSubmit={formhandle} className="login-form">
        <label>Email:</label>
        <input
          type="email"
          name="emailid"
          placeholder="Enter your email"
          value={emailid}
          onChange={handleEmail}
          required
        />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={password}
          onChange={handlePassword}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LogIN;
