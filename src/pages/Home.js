// Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import the CSS file

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
      <h1>Welcome to My Portfolio</h1>
      <p>Hello! Welcome to my portfolio website. Feel free to explore and learn more about my projects, services, and expertise.</p>
      <Link to="/about">Learn More About Me</Link> {/* Link to the About Me page */}
      </div>
    </div>
  );
};

export default Home;

