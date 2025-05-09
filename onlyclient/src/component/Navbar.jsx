import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [role, setRole] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    const userId = localStorage.getItem("userId");
    setRole(storedRole);
    setIsLoggedIn(!!userId);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setRole(null);
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/" className="logo-link">
            OnlyDevs
          </Link>
        </div>
        <nav className="nav-links">
          <Link to="/">Home</Link>

          {role === "DEVELOPER" && (
            <>
              <Link to="/browseTask">Browse Tasks</Link>
              <Link to="/my-applications">MyApplication</Link>
            </>
          )}

          {role === "CLIENT" && (
            <>
              <Link to="/showtask">Show Tasks</Link>
              <Link to="/createTask">Create Task</Link>
            </>
          )}

          {isLoggedIn ? (
            <>
              <Link to="/profile">Profile</Link>
              {/* <Link to="/all-applications">AllApplication</Link> */}
              <button onClick={handleLogout} className="logout-button">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Register</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
