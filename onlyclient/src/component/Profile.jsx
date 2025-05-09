import React, { useEffect, useState } from "react";
import { getUsersId } from "./services/UserServices";
import "./profile.css";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    if (userId) {
      getUsersId(userId)
        .then((res) => {
          setUser(res.data);
          localStorage.setItem("role", res.data.role); // Store role in localStorage
        })
        .catch((err) => console.error("Failed to load user profile:", err));
    }
  }, []);

  if (!user) return <p>Loading profile...</p>;

  return (
    <div className="profile-container">
      <h2>My Profile</h2>
      <div className="profile-card">
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        <p>
          <strong>Email:</strong> {user.emailid}
        </p>
        <p>
          <strong>Role:</strong> {user.role}
        </p>
      </div>
    </div>
  );
};

export default Profile;
