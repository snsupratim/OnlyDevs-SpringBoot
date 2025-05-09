import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <h1>
          Welcome to <span className="brand">OnlyDevs</span>
        </h1>
        <p>
          Your go-to platform for hiring top-notch freelance developers or
          landing dev gigs.
        </p>
        {/* <div className="hero-buttons">
          <Link to="/browseTask" className="btn">
            Browse Tasks
          </Link>
          <Link to="/createTask" className="btn btn-secondary">
            Post a Task
          </Link>
        </div> */}
      </section>

      {/* About Section */}
      {/* <section className="about">
        <h2>About OnlyDevs</h2>
        <p>
          OnlyDevs is a marketplace connecting talented developers with clients
          looking for freelance help. Whether you're a developer or a business,
          we've got you covered.
        </p>
        <ul>
          <li>Hire skilled developers quickly</li>
          <li>Safe, secure, and project-based contracts</li>
          <li>Feedback & ratings for every collaboration</li>
          <li>Manage tasks and submissions easily</li>
        </ul>
      </section> */}

      {/* How It Works Section */}
      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <h3>1. Register</h3>
            <p>
              Create an account as a <strong>Client</strong> or{" "}
              <strong>Developer</strong>.
            </p>
          </div>

          <div className="step">
            <h3>2. For Clients</h3>
            <ul>
              <li>Create a new task or project.</li>
              <li>Browse and assign the best-matched developer.</li>
              <li>Manage submissions and approve work.</li>
            </ul>
          </div>

          <div className="step">
            <h3>3. For Developers</h3>
            <ul>
              <li>Browse available tasks.</li>
              <li>Apply for suitable opportunities.</li>
              <li>Complete the task and get rated.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What People Say</h2>
        <div className="testimonial">
          <p>
            "OnlyDevs helped me land my first freelance gig—highly recommend!"
          </p>
          <span>- Alex, Frontend Dev</span>
        </div>
        <div className="testimonial">
          <p>"I found the perfect developer for my startup in just 3 days!"</p>
          <span>- Priya, Startup Founder</span>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>© 2025 OnlyDevs. All rights reserved.</p>
        <div className="footer-links">
          <Link to="/terms">Terms</Link>
          <Link to="/privacy">Privacy</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </footer>
    </div>
  );
};

export default Home;
